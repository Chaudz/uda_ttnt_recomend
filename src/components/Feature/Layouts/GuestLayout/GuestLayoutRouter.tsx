'use client';

interface Props {
  children: React.ReactNode;
}

export const GuestLayoutRouter: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
