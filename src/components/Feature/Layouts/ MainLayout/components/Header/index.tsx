'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import classNames from 'classnames';
import { useCart } from '@/context/CartContext'; // Import hook từ CartContext

const Header: React.FC = () => {
  const { status } = useSession();
  const { cartItems, removeFromCart } = useCart(); // Lấy giỏ hàng từ context
  const [isFixed, setIsFixed] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tính tổng giá trị giỏ hàng
  const totalCartPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <header
      className={classNames('bg-white shadow-md w-full', {
        'fixed top-0 left-0 z-40': isFixed,
      })}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo và Thanh tìm kiếm */}
        <div className="flex items-center flex-grow">
          <Link href="/">
            <img
              src="https://res.cloudinary.com/dmpq7pjrg/image/upload/v1730048972/logo_hhydvi.png"
              alt="Fahasa Logo"
              className="h-12 cursor-pointer"
            />
          </Link>
          {status === 'authenticated' && (
            <div className="ml-4 flex-grow">
              <input
                type="text"
                placeholder="Tìm kiếm sách, tác giả..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          )}
        </div>

        {/* Giỏ hàng và tài khoản */}
        <div className="flex items-center space-x-4">
          {/* Nút giỏ hàng */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dmpq7pjrg/image/upload/c_thumb,w_200,g_face/v1730049285/cart_hxflbv.png"
              alt="Cart"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsCartOpen(!isCartOpen)}
            />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
            {isCartOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-4 w-96 z-10">
                <h2 className="text-lg font-semibold mb-2">Giỏ hàng</h2>
                {cartItems.length > 0 ? (
                  <>
                    <ul>
                      {cartItems.map((item) => (
                        <li
                          key={item.Book_Author}
                          className="flex items-center justify-between border-b py-2"
                        >
                          <img
                            src={item.url}
                            alt={item.Book_Title}
                            className="w-20 mr-2"
                          />
                          <div>
                            <p className="text-sm font-medium w-full pr-4">
                              {item.Book_Title}
                            </p>
                            <p className="text-xs text-gray-500 text-red-500">
                              {item.price.toLocaleString()} đ x {item.quantity}
                            </p>
                          </div>
                          <button
                            className="text-red-500 text-sm border border-spacing-1 px-2 py-1 hover:bg-red-500 hover:text-white"
                            onClick={() => removeFromCart(item.Book_Author)} // Sử dụng hàm từ Context
                          >
                            Xóa
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 font-bold text-red-500">
                      Tổng cộng: {totalCartPrice.toLocaleString()} đ
                    </div>
                  </>
                ) : (
                  <p>Giỏ hàng trống.</p>
                )}
              </div>
            )}
          </div>

          {/* Quản lý tài khoản */}
          {status === 'unauthenticated' ? (
            <div className="flex gap-3">
              <Link href="/login">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Đăng nhập
                </button>
              </Link>
              <Link href="/register">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Đăng ký
                </button>
              </Link>
            </div>
          ) : (
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md bg-orange-500 py-1.5 px-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600">
                Tài khoản
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/account"
                      className={classNames(
                        'block px-4 py-2 text-sm',
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      )}
                    >
                      Trang cá nhân
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => signOut({ callbackUrl: '/' })}
                      className={classNames(
                        'block w-full text-left px-4 py-2 text-sm',
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      )}
                    >
                      Đăng xuất
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
