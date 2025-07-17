import Button from '../_components/ui/Button'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'خرید اشتراک',
    description: 'پلن‌های اشتراک فیلم‌نت را مشاهده و بهترین گزینه را برای خود انتخاب کنید.',
};

const plans = [
    {
      name: 'یک ماهه',
      price: '۴۹٬۰۰۰',
      originalPrice: '',
      monthlyPrice: '۴۹٬۰۰۰ تومان',
      isBestValue: false,
      features: ['کیفیت ۱۰۸۰p', 'همه فیلم‌ها و سریال‌ها', 'یک کاربر همزمان'],
    },
    {
      name: 'سه ماهه',
      price: '۱۲۹٬۰۰۰',
      originalPrice: '۱۴۷٬۰۰۰',
      monthlyPrice: 'ماهی ۴۳٬۰۰۰ تومان',
      isBestValue: true,
      features: ['کیفیت 4K + HDR', 'همه فیلم‌ها و سریال‌ها', 'دو کاربر همزمان', '۱۵٪ تخفیف'],
    },
    {
      name: 'شش ماهه',
      price: '۲۲۹٬۰۰۰',
      originalPrice: '۲۹۴٬۰۰۰',
      monthlyPrice: 'ماهی ۳۸٬۰۰۰ تومان',
      isBestValue: false,
      features: ['کیفیت 4K + HDR', 'همه فیلم‌ها و سریال‌ها', 'چهار کاربر همزمان', 'دانلود نامحدود'],
    },
    {
      name: 'یکساله',
      price: '۳۹۹٬۰۰۰',
      originalPrice: '۵۸۸٬۰۰۰',
      monthlyPrice: 'ماهی ۳۳٬۰۰۰ تومان',
      isBestValue: false,
      features: ['کیفیت 4K + HDR', 'همه فیلم‌ها و سریال‌ها', 'چهار کاربر همزمان', 'پشتیبانی ویژه'],
    },
];

export default function PricingPage() {
    return (
        <main className="bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto px-4 py-12 lg:py-20">
                <div className="p-8 lg:p-12 text-center">
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-3">
                        اشتراک ویژه فیلم‌نت
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        بهترین پلن را متناسب با نیاز خود انتخاب کنید و بدون محدودیت از دنیای فیلم و سریال لذت ببرید.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative border-2 rounded-xl p-6 flex flex-col transition-all duration-300 ${
                                plan.isBestValue
                                ? 'border-red-500 shadow-red-500/20 shadow-2xl scale-105 bg-gray-800'
                                : 'border-gray-700 hover:border-red-500/50 bg-gray-800/50'
                            }`}
                        >
                            {plan.isBestValue && (
                                <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                                    پرفروش‌ترین
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-4 text-center text-white">{plan.name}</h3>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                                <span className="text-gray-400 ml-1">تومان</span>
                                {plan.originalPrice && (
                                <p className="text-gray-500 line-through mt-1">{plan.originalPrice} تومان</p>
                                )}
                            </div>
                            <p className="text-center text-red-400 font-semibold mb-6 h-6">{plan.monthlyPrice}</p>
                            <ul className="space-y-3 text-right text-gray-300 mb-8 flex-grow">
                                {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    {feature}
                                </li>
                                ))}
                            </ul>
                            <Button variant={plan.isBestValue ? 'primary' : 'secondary'} className="w-full mt-auto py-3 cursor-pointer">
                                انتخاب و پرداخت
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}