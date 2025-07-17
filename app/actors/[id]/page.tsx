// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { Metadata } from 'next';
// import { featuredActors } from '@/app/_data/featured-actors';
// import { movies } from '@/app/_data/movies';
// import MovieList from '@/app/_components/MovieList';
// import { Cake, Globe, Ruler, Award, Instagram, Twitter } from 'lucide-react';

// export function generateStaticParams() {
//   return featuredActors.map((actor) => ({
//     id: actor.id.toString(),
//   }));
// }

// function getActorById(id: number) {
//   return featuredActors.find((actor) => actor.id === id);
// }

// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//   const actor = getActorById(parseInt(params.id)); 
//   if (!actor) return { title: 'بازیگر یافت نشد' };
//   return { title: actor.name, description: `بیوگرافی و کارنامه هنری ${actor.name}` };
// }

// export default function ActorProfilePage({ params }: { params: { id: string } }) {
//   const actor = getActorById(parseInt(params.id)); 

//   if (!actor) {
//     notFound();
//   }
  
//   const knownForMovies = movies.filter(movie => actor.knownFor.includes(movie.id));

//   const calculateAge = (birthDate: string) => {
//     const birthYear = parseInt(birthDate.match(/\d{4}/)?.[0] || '0');
//     if (birthYear === 0) return '';
//     const currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
//   };
//   const age = calculateAge(actor.birthDate);

//   return (
//     <div className="bg-gray-950 text-white min-h-screen">
//       <section className="relative h-[50vh] flex items-center justify-center">
//         <div className="absolute inset-0">
//           <Image src={actor.bannerImageUrl} alt={`بنر ${actor.name}`} fill className="object-cover opacity-20 blur-sm" priority />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-850 to-transparent"></div>
//         </div>
//         <div className="relative z-10 flex flex-col items-center text-center">
//           <div className="w-48 h-48 relative mb-4">
//             <Image
//               src={actor.imageUrl}
//               alt={actor.name}
//               fill
//               className="rounded-full object-cover border-4 border-gray-700 shadow-2xl"
//             />
//           </div>
//           <h1 className="text-5xl font-extrabold">{actor.name}</h1>
//           <div className="flex items-center gap-4 mt-4">
//             {actor.socialMedia.map(social => (
//                 <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
//                     {social.platform === 'instagram' && <Instagram />}
//                     {social.platform === 'twitter' && <Twitter />}
//                 </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           <div className="lg:col-span-2 space-y-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-4 border-r-4 border-red-500 pr-4">بیوگرافی</h2>
//               <p className="text-gray-300 leading-loose whitespace-pre-line">{actor.bio}</p>
//             </div>

//             {actor.awards.length > 0 && (
//                 <div>
//                     <h2 className="text-3xl font-bold mb-6 border-r-4 border-red-500 pr-4">جوایز و افتخارات</h2>
//                     <ul className="space-y-3">
//                         {actor.awards.map(award => (
//                             <li key={award} className="flex items-center gap-3 text-gray-300">
//                                 <Award className="text-yellow-400 flex-shrink-0" size={20} />
//                                 <span>{award}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
            
//             {knownForMovies.length > 0 && (
//               <div>
//                 <h2 className="text-3xl font-bold mb-6 border-r-4 border-red-500 pr-4">آثار شاخص</h2>
//                 <MovieList movies={knownForMovies} />
//               </div>
//             )}
//           </div>

//           <aside className="bg-gray-900 p-6 rounded-lg border border-gray-800 self-start lg:sticky top-24">
//              <h3 className="text-2xl font-bold mb-6">اطلاعات شخصی</h3>
//              <ul className="space-y-5">
//                 <li className="flex items-center gap-3"><Globe size={20} className="text-red-400" /> <div><span className="text-gray-400 text-sm">ملیت:</span> <p>{actor.nationality}</p></div></li>
//                 <li className="flex items-center gap-3"><Cake size={20} className="text-red-400" /> <div><span className="text-gray-400 text-sm">تاریخ تولد:</span> <p>{actor.birthDate}</p></div></li>
//                 {age && <li className="flex items-center gap-3"><span className="text-2xl font-thin text-red-400">#</span> <div><span className="text-gray-400 text-sm">سن:</span> <p>{age} سال</p></div></li>}
//                 <li className="flex items-center gap-3"><Ruler size={20} className="text-red-400" /> <div><span className="text-gray-400 text-sm">قد:</span> <p>{actor.height} سانتی‌متر</p></div></li>
//              </ul>
//           </aside>
//         </div>
//       </section>
//     </div>
//   );
// }


// sjd-bsbri/movie-app/movie-app-36c7f19d74c18f4678270e3b09686be4788d77ff/app/actors/[id]/page.tsx

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { featuredActors } from '@/app/_data/featured-actors';
import { movies } from '@/app/_data/movies';
import MovieList from '@/app/_components/MovieList';
import { Cake, Globe, Ruler, Award, Instagram, Twitter } from 'lucide-react';

// FIX 1: یک نوع مشخص برای پراپرتی‌های صفحه تعریف می‌کنیم
type PageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return featuredActors.map((actor) => ({
    id: actor.id.toString(),
  }));
}

// FIX 2: این تابع async باقی می‌ماند تا با بقیه کد هماهنگ باشد
async function getActorById(id: number) {
  return featuredActors.find((actor) => actor.id === id);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const actor = await getActorById(parseInt(params.id));
  if (!actor) return { title: 'بازیگر یافت نشد' };
  return { title: actor.name, description: `بیوگرافی و کارنامه هنری ${actor.name}` };
}

// FIX 3: کامپوننت اصلی صفحه باید async باشد
export default async function ActorProfilePage({ params }: PageProps) {
  const actor = await getActorById(parseInt(params.id));

  if (!actor) {
    notFound();
  }
  
  const knownForMovies = movies.filter(movie => actor.knownFor.includes(movie.id));

  const calculateAge = (birthDate: string) => {
    const birthYear = parseInt(birthDate.match(/\d{4}/)?.[0] || '0');
    if (birthYear === 0) return '';
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };
  const age = calculateAge(actor.birthDate);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src={actor.bannerImageUrl} alt={`بنر ${actor.name}`} fill className="object-cover opacity-20 blur-sm" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-850 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-48 h-48 relative mb-4">
            <Image
              src={actor.imageUrl}
              alt={actor.name}
              fill
              className="rounded-full object-cover border-4 border-gray-700 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl font-extrabold">{actor.name}</h1>
          <div className="flex items-center gap-4 mt-4">
            {actor.socialMedia.map(social => (
                <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                    {social.platform === 'instagram' && <Instagram />}
                    {social.platform === 'twitter' && <Twitter />}
                </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 border-r-4 border-red-500 pr-4">بیوگرافی</h2>
              <p className="text-gray-300 leading-loose whitespace-pre-line">{actor.bio}</p>
            </div>

            {actor.awards.length > 0 && (
                <div>
                    <h2 className="text-3xl font-bold mb-6 border-r-4 border-red-500 pr-4">جوایز و افتخارات</h2>
                    <ul className="space-y-3">
                        {actor.awards.map(award => (
                            <li key={award} className="flex items-center gap-3 text-gray-300">
                                <Award className="text-yellow-400 flex-shrink-0" size={20} />
                                <span>{award}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {knownForMovies.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 border-r-4 border-red-500 pr-4">آثار شاخص</h2>
                <MovieList movies={knownForMovies} />
              </div>
            )}
          </div>

          <aside className="bg-gray-900 p-6 rounded-lg border border-gray-800 self-start lg:sticky top-24">
             <h3 className="text-2xl font-bold mb-6">اطلاعات شخصی</h3>
             <ul className="space-y-5">
                <li className="flex items-center gap-3"><Globe size={20} className="text-red-400" /> <div><span className="text-gray-400 text-sm">ملیت:</span> <p>{actor.nationality}</p></div></li>
                <li className="flex items-center gap-3"><Cake size={20} className="text-red-400" /> <div><span className="text-gray-400 text-sm">تاریخ تولد:</span> <p>{actor.birthDate}</p></div></li>
                {age && <li className="flex items-center gap-3"><span className="text-2xl font-thin text-red-400">#</span> <div><span className="text-gray-400 text-sm">سن:</span> <p>{age} سال</p></div></li>}
                <li className="flex items-center gap-3"><Ruler size={20} className="text-red-400" /> <div><span className="text-gray-400 text-sm">قد:</span> <p>{actor.height} سانتی‌متر</p></div></li>
             </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}