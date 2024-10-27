// components/CustomToaster.tsx
import { Toaster } from 'react-hot-toast';

const CustomToaster = () => {
  return (
    <Toaster
      toastOptions={{
        className: '',
        position: 'top-right',
        style: {
          border: '1px solid #713200',
          padding: '18px',
          color: '#713200',
        },
      }}
    />
  );
};

export default CustomToaster;
