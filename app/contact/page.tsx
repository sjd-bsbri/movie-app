import { Metadata } from 'next';
import ContactForm from '../_components/ContactForm';
import { MapPin, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'تماس با ما',
};

const contactInfo = [
    { 
      icon: <MapPin size={24} className="text-red-400" />, 
      title: 'آدرس دفتر مرکزی', 
      value: 'تهران، برج فناوری، طبقه ۲۱' 
    },
    { 
      icon: <Mail size={24} className="text-red-400" />, 
      title: 'ایمیل پشتیبانی', 
      value: 'support@filmnet.example.com' 
    },
    { 
      icon: <Phone size={24} className="text-red-400" />, 
      title: 'تلفن تماس', 
      value: '۰۲۱-۱۲۳۴۵۶۷۸' 
    },
];

export default function ContactPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold mb-4">ارتباط با ما</h1>
                <p className="text-lg text-gray-400">نظرات، پیشنهادات و سوالات خود را با ما در میان بگذارید.</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 lg:p-12 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold">اطلاعات تماس</h2>
                        
                        {contactInfo.map(info => (
                            <div key={info.title} className="flex items-center gap-4">
                                <div className="flex-shrink-0 bg-gray-900/50 w-14 h-14 flex items-center justify-center rounded-full border border-gray-700">
                                    {info.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-white">{info.title}</h3>
                                    <p className="text-gray-300" dir="ltr">{info.value}</p>
                                </div>
                            </div>
                        ))}

                         <div className="pt-8 border-t border-gray-700">
                             <h3 className="font-semibold text-lg mb-3">ساعات کاری</h3>
                             <p className="text-gray-300">شنبه تا چهارشنبه: ۹ صبح الی ۵ عصر</p>
                             <p className="text-gray-300">پنجشنبه‌ها: ۹ صبح الی ۱ ظهر</p>
                         </div>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold mb-6">ارسال پیام مستقیم</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}