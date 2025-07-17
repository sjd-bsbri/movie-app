import Link from 'next/link';
import Button from './_components/ui/Button';
import { Film, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <div className="relative flex items-center justify-center w-48 h-48 mb-8">
        <Film className="w-48 h-48 text-gray-800" strokeWidth={0.5} />
        
        <div className="absolute text-7xl font-black text-red-500/80">
          404
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
        اوه! این صفحه موجود نمی باشد
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-md">
        متاسفانه صفحه‌ای که به دنبال آن بودید یافت نشد. شاید آدرس را اشتباه وارد کرده‌اید یا این صفحه دیگر در آرشیو ما موجود نیست.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
        <Link href="/">
          <Button variant="primary" className="py-3 px-6 text-base w-60 sm:w-auto cursor-pointer">
            بازگشت به صفحه اصلی
          </Button>
        </Link>
        <Link href="/search">
          <Button variant="secondary" className="py-3 px-6 text-base w-60 sm:w-auto flex items-center justify-center gap-2 cursor-pointer">
            <Search size={18} />
            جستجوی فیلم
          </Button>
        </Link>
      </div>
    </main>
  );
}