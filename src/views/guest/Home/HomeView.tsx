import React from 'react';

const HomeView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Banner */}
      <div className="bg-red-500 text-white p-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold">HỘP QUÀ THÁNG 10</h1>
        {/* Thêm nội dung banner khác ở đây */}
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
        {[
          'Sale Lương Về',
          'MCBooks',
          'Kinh Tế',
          'Sản Phẩm Được Yêu Thích',
          'Manga',
          'Flash Sale',
          'Mã Giảm Giá',
          'Ngoại Văn',
          'Phân Loại',
          'Sản Phẩm Mới',
        ].map((category, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
            <span className="text-sm">{category}</span>
          </div>
        ))}
      </div>

      {/* Flash Sale */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Flash Sale</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              name: 'Thư Cho Em',
              price: 70000,
              originalPrice: 140000,
              discount: 50,
            },
            {
              name: 'Giáo Trình Chuẩn HSK 4',
              price: 121360,
              originalPrice: 148000,
              discount: 18,
            },
            {
              name: 'Sơn Hải Kinh',
              price: 296400,
              originalPrice: 380000,
              discount: 22,
            },
            {
              name: 'Atomic Habits',
              price: 386320,
              originalPrice: 439000,
              discount: 12,
            },
            {
              name: 'The Official Cambridge Guide to IELTS',
              price: 389670,
              originalPrice: 419000,
              discount: 7,
            },
          ].map((product, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-red-600 font-bold">
                {product.price.toLocaleString()} đ
              </p>
              <p className="text-gray-500 line-through text-sm">
                {product.originalPrice.toLocaleString()} đ
              </p>
              <p className="text-green-600 text-sm">-{product.discount}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Halloween Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Happy Halloween</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            {
              name: 'Tấm Trang Trí Halloween',
              price: 19240,
              originalPrice: 26000,
              discount: 26,
            },
            {
              name: 'Dây Treo Bộ Xương Trang Trí Halloween',
              price: 20720,
              originalPrice: 28000,
              discount: 26,
            },
            {
              name: 'Dây Đèn Led Trang Trí Halloween',
              price: 104000,
              originalPrice: 131000,
              discount: 20,
            },
            {
              name: 'Bộ Trang Trí Bóng Bay Halloween',
              price: 136800,
              originalPrice: 152000,
              discount: 10,
            },
            {
              name: 'Quả Bí Ngô Đèn Led Trang Trí Halloween',
              price: 159100,
              originalPrice: 215000,
              discount: 26,
            },
          ].map((product, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-sm">{product.name}</h3>
              <p className="text-red-600 font-bold">
                {product.price.toLocaleString()} đ
              </p>
              <p className="text-gray-500 line-through text-xs">
                {product.originalPrice.toLocaleString()} đ
              </p>
              <p className="text-green-600 text-xs">-{product.discount}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
