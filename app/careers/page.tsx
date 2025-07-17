import { Metadata } from 'next';
import Button from '../_components/ui/Button';
import { openPositions } from '../_data/careers-data';
import { Briefcase, BrainCircuit, Users, Building, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'فرصت‌های شغلی',
  description: 'به تیم خلاق و پویای فیلم‌نت بپیوندید و در ساختن آینده سرگرمی با ما همراه شوید.',
};

const benefits = [
    { icon: <Briefcase size={32} className="text-red-400"/>, title: "پروژه‌های چالش‌برانگیز", description: "روی محصولی کار کنید که میلیون‌ها کاربر از آن استفاده می‌کنند و تاثیر مستقیم کار خود را ببینید." },
    { icon: <BrainCircuit size={32} className="text-red-400"/>, title: "فرصت رشد و یادگیری", description: "با حمایت کامل برای شرکت در دوره‌های آموزشی و کنفرانس‌ها، همیشه در حال یادگیری باشید." },
    { icon: <Users size={32} className="text-red-400"/>, title: "تیم حرفه‌ای و همدل", description: "در کنار بهترین‌های صنعت در یک محیط کاری دوستانه، خلاق و به دور از حاشیه فعالیت کنید." }
];

export default function CareersPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="bg-gray-950/50 text-center py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">به تیم فیلم‌نت بپیوندید</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            ما به دنبال افراد خلاق، مشتاق و باانگیزه‌ای هستیم که به ما در ماموریت‌مان برای ارائه بهترین تجربه سرگرمی کمک کنند.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">چرا کار در فیلم‌نت؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map(benefit => (
                <div key={benefit.title} className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center">
                    <div className="inline-block p-4 bg-gray-900 rounded-full mb-4">
                        {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950/50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">موقعیت‌های شغلی فعال</h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {openPositions.map(job => (
                    <div key={job.id} className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-300 border border-gray-700 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/10">
                        <div>
                            <h3 className="text-xl font-bold text-red-400">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400 mt-2 text-sm">
                                <span className="flex items-center gap-2"><Building size={16} /> {job.department}</span>
                                <span className="flex items-center gap-2"><MapPin size={16} /> {job.location}</span>
                                <span className="flex items-center gap-2"><Clock size={16} /> {job.type}</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 mt-4 md:mt-0">
                             <Button variant="secondary" className='cursor-pointer'>مشاهده و ارسال رزومه</Button>
                        </div>
                    </div>
                ))}

                {openPositions.length === 0 && (
                    <div className="text-center text-gray-400 bg-gray-800 p-8 rounded-lg">
                        <p>در حال حاضر موقعیت شغلی فعالی وجود ندارد، اما ما همیشه رزومه شما را بررسی می‌کنیم.</p>
                        <p className="mt-2">می‌توانید رزومه خود را به <span className="text-red-400" dir="ltr">hr@filmnet.example.com</span> ارسال کنید.</p>
                    </div>
                )}
            </div>
        </div>
      </section>
    </div>
  );
}