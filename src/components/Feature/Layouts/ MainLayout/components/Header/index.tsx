'use client';

import Button from '@/components/BaseUI/Button';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/16/solid';

const Header: React.FC = () => {
  const { status } = useSession();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-white shadow-md w-full ${
        isFixed ? 'fixed top-0 left-0 z-50' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center flex-grow">
          <img
            src="/path-to-your-logo.png"
            alt="Fahasa Logo"
            className="h-10 mr-4"
          />
          {status === 'authenticated' && (
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Tráng - Han Kang giải Nobel 2024"
                className="w-96 pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {status === 'unauthenticated' ? (
            <div className="flex gap-3">
              <Link href={'/login'}>
                <Button label="Đăng nhập" variant="contained" />
              </Link>
              <Link href={'/register'}>
                <Button label="Đăng ký" variant="contained" />
              </Link>
            </div>
          ) : (
            <div className="flex gap-3">
              <div>gio hang</div>
              <div className="relative">
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md bg-orange-500 py-1.5 px-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    Account
                  </MenuButton>
                  <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <MenuItem>
                        {({ active }) => (
                          <Link
                            href="/account"
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            } block px-4 py-2 text-sm`}
                          >
                            Account
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <Link
                            href="#"
                            onClick={() => signOut({ callbackUrl: '/home' })}
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            } block px-4 py-2 text-sm`}
                          >
                            Đăng xuất
                          </Link>
                        )}
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
