import { useCart } from '@/context/CartContext';
import React from 'react';

const Cart: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Giỏ hàng</h1>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-4 border-b"
            >
              <div className="flex items-center">
                <img
                  src={item.url}
                  alt={item.Book_Title}
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <p className="font-semibold">{item.Book_Title}</p>
                  <p>{item.Book_Author}</p>
                </div>
              </div>
              <div>
                <p className="font-bold">{item.price.toLocaleString()} đ</p>
                <p>Số lượng: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
