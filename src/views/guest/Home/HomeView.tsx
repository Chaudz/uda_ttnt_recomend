import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import ProductModal from '@/components/BaseUI/ModalProduct/ModelProduct';

interface Product {
  Book_Author: string;
  Book_Title: string;
  ISBN: string;
  Publisher: string;
  Year_Of_Publication: number;
  category: string;
  price: number;
  url: string;
}

const HomeView: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [visibleProductsCount, setVisibleProductsCount] = useState<number>(20);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const { data: session, status } = useSession();
  const [userId, setUserId] = useState<string | null>(null);

  // Lấy user ID từ session
  useEffect(() => {
    if (session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [session]);

  // Fetch tất cả sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/csv-books');
        console.log('Fetched products:', response.data);

        if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          console.error('Dữ liệu không phải là mảng:', response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Fetch sản phẩm gợi ý dựa trên user ID
  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      if (!userId) return;

      try {
        const response = await axios.get(
          `http://localhost:5000/api/get-predictions?user_id=${userId}`,
        );
        console.log('Fetched recommended products:', response.data);

        if (Array.isArray(response.data.recommendations)) {
          setRecommendedProducts(response.data.recommendations);
        } else {
          console.error('Dữ liệu gợi ý không phải là mảng:', response.data);
        }
      } catch (error) {
        console.error('Error fetching recommended products:', error);
      }
    };

    fetchRecommendedProducts();
  }, [userId]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);

    // axios
    //   .post('http://localhost:5000/api/save-user-action', {
    //     user_id: userId,
    //     item_id: product.ISBN,
    //     action_type: 'click_product',
    //   })
    //   .then((response) => {
    //     console.log('User action saved:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error saving user action:', error);
    //   });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setVisibleProductsCount(30);
  };

  const handleMoreClick = () => {
    setVisibleProductsCount((prev) => prev + 30);

    // Gửi hành động người dùng nhấn "More"
    axios
      .post('http://localhost:5000/api/save-user-action', {
        user_id: userId,
        action: 'load_more_products',
      })
      .then((response) => {
        console.log('User action saved:', response.data);
      })
      .catch((error) => {
        console.error('Error saving user action:', error);
      });
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const visibleProducts = filteredProducts.slice(0, visibleProductsCount);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <div>Vui lòng đăng nhập để tiếp tục.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Banner */}
      <div className="bg-red-500 text-white p-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold">SÁCH HAY</h1>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
        {Array.from(new Set(products.map((product) => product.category))).map(
          (category, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-200"
              onClick={() => handleCategoryClick(category)}
            >
              <span className="text-sm font-semibold">{category}</span>
            </div>
          ),
        )}
      </div>

      {/* Product List */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          {selectedCategory
            ? `Sản phẩm trong danh mục: ${selectedCategory}`
            : 'Tất cả sản phẩm'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {loading ? (
            <div>Loading...</div>
          ) : visibleProducts.length > 0 ? (
            visibleProducts.map((product, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.url}
                  alt={product.Book_Title}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3 className="font-semibold mb-2">{product.Book_Title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Author: {product.Book_Author}
                </p>
                <p className="text-red-600 font-bold">
                  {product.price.toLocaleString()} đ
                </p>
                <p className="text-gray-500 text-xs">
                  Publisher: {product.Publisher}
                </p>
              </div>
            ))
          ) : (
            <div>Không tìm thấy sản phẩm nào.</div>
          )}
        </div>

        {/* Load More Button */}
        {filteredProducts.length > visibleProductsCount && (
          <div className="text-center mt-4">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
              onClick={handleMoreClick}
            >
              Xem thêm
            </button>
          </div>
        )}
      </div>

      {/* Recommended Products */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Sản phẩm gợi ý cho bạn</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {recommendedProducts.length > 0 ? (
            recommendedProducts.map((product, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.url}
                  alt={product.Book_Title}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3 className="font-semibold mb-2">{product.Book_Title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Author: {product.Book_Author}
                </p>
                <p className="text-red-600 font-bold">
                  {product.price.toLocaleString()} đ
                </p>
              </div>
            ))
          ) : (
            <div>Không có sản phẩm gợi ý.</div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default HomeView;
