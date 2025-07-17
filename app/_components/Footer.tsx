import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-right">
          <Link href="/" className="text-3xl font-bold text-red-600">
            فیلم‌نت
          </Link>
          <p className="mt-2 text-sm text-gray-400">دنیایی از فیلم و سریال در دستان شما</p>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-center md:text-right">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">دسترسی سریع</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><Link href="/search" className="hover:text-red-500 transition-colors">جستجو</Link></li>
              <li><Link href="/pricing" className="hover:text-red-500 transition-colors">خرید اشتراک</Link></li>
              <li><Link href="/login" className="hover:text-red-500 transition-colors">ورود</Link></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">پشتیبانی</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><Link href="/faq" className="hover:text-red-500 transition-colors">پرسش‌های متداول</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition-colors">تماس با ما</Link></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">فیلم‌نت</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><Link href="/about" className="hover:text-red-500 transition-colors">درباره ما</Link></li>
              <li><Link href="/terms" className="hover:text-red-500 transition-colors">قوانین و مقررات</Link></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">شبکه‌های اجتماعی</h2>
            
            <div className="flex gap-5 mt-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/company/filmnetir/" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Linkedin size={24} strokeWidth={1.5} />
                </a>
               
                <a href="https://twitter.com/filmnetofficial" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Twitter size={24} strokeWidth={1.5} />
                </a>
                <a href="https://t.me/filmnetofficial" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Send size={24} strokeWidth={1.5} />
                </a>
                 <a href="https://instagram.com/filmnet.ir_" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Instagram size={24} strokeWidth={1.5} />
                </a>
                
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800/50">
        <div className="container mx-auto py-4 px-5">
          <p className="text-gray-400 text-sm text-center">
            © ۱۴۰۴ فیلم‌نت — تمام حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}