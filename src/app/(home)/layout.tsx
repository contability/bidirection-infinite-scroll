import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <body className="h-[100dvh]">
      <main>{children}</main>
    </body>
  );
};

export default MainLayout;
