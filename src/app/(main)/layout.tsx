import { MainLayoutRouter } from '@/components/Feature/Layouts/MainLayout/MainLayoutRouter';
import { CartProvider } from '@/context/CartContext';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <MainLayoutRouter>{children}</MainLayoutRouter>;
    </CartProvider>
  );
}
