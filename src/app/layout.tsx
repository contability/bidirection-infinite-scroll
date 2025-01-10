import '@styles/global.css';
import { ReactNode } from 'react';

export const metadata = {
  title: '무한스크롤',
  description: '양방향 무한스크롤 테스트',
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
