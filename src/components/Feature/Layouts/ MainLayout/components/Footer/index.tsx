import React from 'react';
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaTumblr,
//   FaTwitter,
//   FaPinterest,
// } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div>
            <img
              src="/path-to-fahasa-logo.png"
              alt="Fahasa.com"
              className="mb-4"
            />
            <p className="text-sm mb-2">
              Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM
            </p>
            <p className="text-sm mb-2">
              Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA
            </p>
            <p className="text-sm mb-4">
              60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam
            </p>
            <p className="text-sm mb-4">
              Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ
              trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả
              Hệ Thống Fahasa trên toàn quốc.
            </p>
            <div className="flex space-x-4 mb-4">
              {/* <FaFacebookF className="text-blue-600" />
              <FaInstagram className="text-pink-600" />
              <FaYoutube className="text-red-600" />
              <FaTumblr className="text-blue-800" />
              <FaTwitter className="text-blue-400" />
              <FaPinterest className="text-red-700" /> */}
            </div>
            <div className="flex space-x-4">
              <img
                src="/path-to-google-play.png"
                alt="Google Play"
                className="h-8"
              />
              <img
                src="/path-to-app-store.png"
                alt="App Store"
                className="h-8"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">DỊCH VỤ</h3>
            <ul className="space-y-2 text-sm">
              <li>Điều khoản sử dụng</li>
              <li>Chính sách bảo mật thông tin cá nhân</li>
              <li>Chính sách bán hàng</li>
              <li>Phương thức vận chuyển</li>
              <li>Chính sách đổi - trả - hoàn tiền</li>
              <li>Chính sách bảo hành - bồi hoàn</li>
              <li>Chính sách vận chuyển</li>
              <li>Chính sách khách sỉ</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">HỖ TRỢ</h3>
            <ul className="space-y-2 text-sm">
              <li>Chính sách đổi - trả - hoàn tiền</li>
              <li>Chính sách bảo hành - bồi hoàn</li>
              <li>Chính sách vận chuyển</li>
              <li>Chính sách khách sỉ</li>
              <li>Phương thức thanh toán và xuất HĐ</li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-bold mb-4">TÀI KHOẢN CỦA TÔI</h3>
            <ul className="space-y-2 text-sm">
              <li>Đăng nhập/Tạo mới tài khoản</li>
              <li>Thay đổi địa chỉ khách hàng</li>
              <li>Chi tiết tài khoản</li>
              <li>Lịch sử mua hàng</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8">
          <h3 className="font-bold mb-4">LIÊN HỆ</h3>
          <p className="text-sm mb-2">60-62 Lê Lợi, Q.1, TP. HCM</p>
          <p className="text-sm mb-2">cskh@fahasa.com.vn</p>
          <p className="text-sm">1900636467</p>
        </div>

        {/* Delivery Partners */}
        <div className="mt-8 flex flex-wrap items-center justify-between">
          <img
            src="/path-to-snappy.png"
            alt="Snappy"
            className="h-8 mb-4 mr-4"
          />
          <img src="/path-to-lex.png" alt="LEX" className="h-8 mb-4 mr-4" />
          <img
            src="/path-to-ninjavan.png"
            alt="Ninja Van"
            className="h-8 mb-4 mr-4"
          />
          <img
            src="/path-to-ahamove.png"
            alt="Ahamove"
            className="h-8 mb-4 mr-4"
          />
          <img
            src="/path-to-vn-post.png"
            alt="VN Post"
            className="h-8 mb-4 mr-4"
          />
          <img src="/path-to-vnpay.png" alt="VNPay" className="h-8 mb-4 mr-4" />
          <img src="/path-to-momo.png" alt="MoMo" className="h-8 mb-4 mr-4" />
          <img
            src="/path-to-shopeepay.png"
            alt="ShopeePay"
            className="h-8 mb-4"
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 text-xs text-center">
          <p>
            Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và
            Đầu tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi
            lần thứ 10, ngày 20/05/2022.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
