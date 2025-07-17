import Link from 'next/link';
import Button from './ui/Button';

export default function Header() {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">
          فیلم‌نت
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/search" className="text-gray-300 hover:text-white transition-colors px-2">
            جستجو
          </Link>
          <Link href="/pricing" >
            <Button variant="secondary"  >
              خرید اشتراک
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="primary">
              ورود
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}