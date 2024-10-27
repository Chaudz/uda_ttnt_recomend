'use client';

import { GuestLayoutRouter } from '@/components';
import { useSession } from 'next-auth/react';

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  console.log('===', session.data);

  // if (status === 'loading') {
  //   return <div>Loading</div>;
  // }

  return <GuestLayoutRouter>{children}</GuestLayoutRouter>;
}
