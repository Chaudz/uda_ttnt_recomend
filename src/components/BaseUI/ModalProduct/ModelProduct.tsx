import { useCart } from '@/context/CartContext';
import React from 'react';

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

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    console.log('Adding product to cart:', product);
    const item = {
      Book_Title: product.Book_Title,
      Book_Author: product.Book_Author,
      price: product.price,
      quantity: 1,
      url: product.url,
    };
    // console.log('Item being added to cart:', item); 
    addToCart(item); 
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          ✖
        </button>

        {/* Product Details Container */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div>
            <img
              src={product.url}
              alt={product.Book_Title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">{product.Book_Title}</h2>

            <div className="space-y-3">
              <div>
                <span className="font-semibold">Author:</span>{' '}
                {product.Book_Author}
              </div>
              <div>
                <span className="font-semibold">Publisher:</span>{' '}
                {product.Publisher}
              </div>
              <div>
                <span className="font-semibold">Year of Publication:</span>{' '}
                {product.Year_Of_Publication}
              </div>
              <div>
                <span className="font-semibold">Category:</span>{' '}
                {product.category}
              </div>
              <div className="text-2xl font-bold text-red-600 mt-4">
                {product.price.toLocaleString()} đ
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-400 transition"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
