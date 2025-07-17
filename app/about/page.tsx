'use client'; 

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../_components/ui/Button';
import { teamMembers, milestones } from '../_data/about-us-data';
import { Target, Zap, Heart } from 'lucide-react';

const basePath = '/movie-app';

export default function AboutPage() {
  const [fillPercentage, setFillPercentage] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const { top, height } = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollStart = top + window.scrollY - windowHeight / 2;
      const currentScroll = window.scrollY;

      if (currentScroll > scrollStart) {
        const progress = ((currentScroll - scrollStart) / height) * 100;
        setFillPercentage(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <div className="absolute inset-0 bg-black opacity-50 z-0">
          <Image src={`${basePath}/images/aboutbaner.jpg`} alt="پس‌زمینه سینمایی" fill className="object-cover"/>
        </div>
        <div className="relative z-10 bg-black/30 backdrop-blur-sm p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold">ما به قدرت داستان ایمان داریم</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            فیلم‌نت فقط یک پلتفرم پخش فیلم نیست؛ ما جامعه‌ای از عاشقان سینما هستیم که بهترین داستان‌ها را از سراسر جهان برای شما گرد هم می‌آوریم.
          </p>
        </div>
      </section>
      <section className="py-20 bg-gray-950/50">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="p-6"><Target className="h-12 w-12 mx-auto text-red-500 mb-4" /><h3 className="text-2xl font-bold">ماموریت ما</h3><p className="text-gray-400 mt-2">ساده‌سازی دسترسی به محتوای باکیفیت و ساختن تجربه‌ای لذت‌بخش و یکپارچه برای تمام کاربران.</p></div>
                  <div className="p-6"><Zap className="h-12 w-12 mx-auto text-red-500 mb-4" /><h3 className="text-2xl font-bold">چشم‌انداز ما</h3><p className="text-gray-400 mt-2">تبدیل شدن به اولین انتخاب هر فارسی‌زبان برای سرگرمی، در هر کجای جهان.</p></div>
                  <div className="p-6"><Heart className="h-12 w-12 mx-auto text-red-500 mb-4" /><h3 className="text-2xl font-bold">ارزش‌های ما</h3><p className="text-gray-400 mt-2">کیفیت، نوآوری، احترام به کاربر و اشتیاق به سینما، هسته اصلی تمام فعالیت‌های ماست.</p></div>
              </div>
          </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-extrabold text-center mb-20">از ایده تا امروز</h2>
        <div ref={timelineRef} className="relative max-w-2xl mx-auto py-4">
          <div className="absolute left-1/2 w-1 h-full bg-gray-700 -translate-x-1/2"></div>
          
          <div
            className="absolute left-1/2 w-1 bg-gradient-to-b from-red-500 to-yellow-500 -translate-x-1/2 transition-height duration-200"
            style={{ height: `${fillPercentage}%` }}
          ></div>

          {milestones.map((item, index) => (
            <div key={index} className="relative mb-12 flex justify-between items-center w-full">
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'order-3 pl-8'}`}></div>
              
              <div className="z-10 flex items-center justify-center order-2">
                  <div className={`w-6 h-6 rounded-full border-4 border-gray-900 transition-colors duration-500 ${fillPercentage > (index / (milestones.length - 1)) * 100 - 1 ? 'bg-red-500' : 'bg-gray-700'}`}></div>
              </div>

              <div className={`w-5/12 order-1 p-6 bg-gray-800 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <p className="font-bold text-lg text-red-400">{item.year}</p>
                <h3 className="font-semibold text-xl mt-1">{item.title}</h3>
                <p className="text-gray-400 mt-2 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-950/50">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-16">آشنایی با تیم فیلم‌نت</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.name} className="bg-gray-800 rounded-lg p-6 text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10">
                        <Image src={member.imageUrl} alt={member.name} width={128} height={128} className="rounded-full object-cover mx-auto mb-4 border-4 border-gray-700"/>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-red-400 mb-3">{member.role}</p>
                        <p className="text-gray-400 text-sm">{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <section className="text-center py-20">
          <h2 className="text-3xl font-bold mb-4">به ما بپیوندید</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">ما همیشه به دنبال افراد بااستعداد و مشتاق هستیم. اگر به داستان‌سرایی و تکنولوژی علاقه دارید، جای شما در تیم ما خالیست.</p>
          <Link href="/careers"><Button variant="primary" className="py-3 px-8 text-lg cursor-pointer">مشاهده موقعیت‌های شغلی</Button></Link>
      </section>
    </div>
  );
}