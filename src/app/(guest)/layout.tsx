'use client';

import MainLayout from '@/components/Feature/Layouts/ MainLayout';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Đang tải...</div>;
  }

  if (status === 'authenticated') {
    return redirect('/home');
  }

  return <MainLayout>{children}</MainLayout>;
}
