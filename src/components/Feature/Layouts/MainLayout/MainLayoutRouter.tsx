'use client';

interface Props {
  children: React.ReactNode;
}

export const MainLayoutRouter: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
