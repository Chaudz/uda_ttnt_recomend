import { CartProvider } from '@/context/CartContext';
import Footer from './components/Footer';
import Header from './components/Header';

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <CartProvider>
        <Header />
        {children}
        <Footer />
      </CartProvider>
    </div>
  );
};

export default MainLayout;
