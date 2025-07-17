import type { Metadata } from 'next';
import { vazirFont } from './_lib/fonts'; 
import Header from './_components/Header';
import Footer from './_components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | فیلم‌نت',
    default: 'فیلم‌نت - آرشیو آنلاین فیلم و سریال',
  },
  description: 'جدیدترین فیلم‌ها و سریال‌های روز دنیا را با بهترین کیفیت در فیلم‌نت تماشا کنید.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.className} bg-gray-900 text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}