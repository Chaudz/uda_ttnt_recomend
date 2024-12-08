'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  Book_Title: string;
  Book_Author: string;
  price: number;
  quantity: number;
  url: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (bookAuthor: string) => void; 
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.Book_Title === item.Book_Title,
      );

      if (existingItem) {
        return prevItems.map((i) =>
          i.Book_Title === item.Book_Title
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (bookAuthor: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.Book_Author !== bookAuthor),
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
