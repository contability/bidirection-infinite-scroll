import '@styles/global.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "FURIUM's portfolio",
  description: "FURIUM's portfolio v3.0",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <html lang="en">{children}</html>;
};

export default RootLayout;
