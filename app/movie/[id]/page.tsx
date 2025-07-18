// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { Metadata } from 'next';
// import { movies, Movie } from '@/app/_data/movies';
// import { topActors } from '@/app/_data/actors';
// import Button from '@/app/_components/ui/Button';
// import MovieList from '@/app/_components/MovieList';
// import TrailerPlayer from '@/app/_components/TrailerPlayer';
// import { Clock, Globe, Video, Heart, Share2, Clapperboard } from 'lucide-react';

// export function generateStaticParams() {
//   return movies.map((movie) => ({
//     id: movie.id.toString(),
//   }));
// }

// async function getMovieById(id: string): Promise<Movie | undefined> {
//   const numericId = parseInt(id, 10);
//   return movies.find((m) => m.id === numericId);
// }

// type PageProps = { params: { id: string } };

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//     const movie = await getMovieById(params.id);
//     if (!movie) return { title: 'فیلم پیدا نشد' };
//     return { title: movie.title, description: movie.description };
// }

// export default async function MovieDetailPage({ params }: PageProps) {
//   const movie = await getMovieById(params.id);

//   if (!movie) {
//     notFound();
//   }

//   const similarMovies = movies
//     .filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g)))
//     .slice(0, 6);

//   return (
//     <div className="bg-gray-950 text-white min-h-screen">
//       <section className="relative h-[80vh] md:h-[70vh] flex items-end p-4 sm:p-8 text-white">
//         <div className="absolute inset-0">
//           <Image src={movie.bannerUrl} alt={`بنر ${movie.title}`} fill className="object-cover opacity-20" priority />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
//         </div>
//         <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
//           <div className="flex-shrink-0 w-40 sm:w-48 md:w-60 -mt-24 md:mt-0">
//             <Image src={movie.imageUrl} alt={movie.title} width={400} height={600} className="rounded-lg shadow-2xl w-full h-auto" />
//           </div>
//           <div className="flex-grow text-center md:text-right">
//             <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 text-sm">
//               <span>{movie.year}</span>
//               <span>•</span>
//               <span>{`${movie.runtime} دقیقه`}</span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold my-3">{movie.title}</h1>
//             <p className="max-w-3xl text-gray-300 line-clamp-3 md:line-clamp-none mx-auto md:mx-0">{movie.description}</p>
//             <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
//               <Button variant="primary" className="flex items-center gap-2 py-3 px-6 text-base sm:text-lg cursor-pointer">
//                 <Heart />
//                 افزودن به لیست
//               </Button>
//               <Button variant="secondary" className="w-12 h-12 p-0 flex items-center justify-center cursor-pointer">
//                 <Share2 />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           <div className="lg:col-span-2 space-y-12">
//             <div>
//               <h2 className="text-2xl font-bold mb-4">بازیگران اصلی</h2>
//               <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
//                 {movie.cast.map(actorName => {
//                   const actorImage = topActors.find(a => a.name === actorName)?.imageUrl || 'https://picsum.photos/seed/placeholder/200/300';
//                   return (
//                     <div key={actorName} className="text-center">
//                       <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-800">
//                           <Image src={actorImage} alt={actorName} fill className="object-cover" />
//                       </div>
//                       <p className="font-medium mt-2 text-sm truncate">{actorName}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold mb-4">تریلر رسمی</h2>
//               <TrailerPlayer url={movie.trailerUrl} />
//             </div>
//           </div>

//            <aside className="space-y-6 bg-gray-900 p-6 rounded-lg border border-gray-800 self-start lg:sticky top-24">
//             <h3 className="text-xl font-bold border-b border-gray-700 pb-3 mb-4">جزئیات فیلم</h3>
//             <div className="flex items-center gap-3"><Video className="text-red-400" /><div><p className="text-gray-400 text-sm">کارگردان</p><p className="font-semibold">{movie.director}</p></div></div>
//             <div className="flex items-center gap-3"><Globe className="text-red-400" /><div><p className="text-gray-400 text-sm">کشور سازنده</p><p className="font-semibold">{movie.country}</p></div></div>
//             <div className="flex items-center gap-3"><Clock className="text-red-400" /><div><p className="text-gray-400 text-sm">مدت زمان</p><p className="font-semibold">{`${movie.runtime} دقیقه`}</p></div></div>
//             <div className="flex items-start gap-3">
//               <Clapperboard className="text-red-400 mt-1 flex-shrink-0" />
//               <div>
//                 <p className="text-gray-400 text-sm">ژانرها</p>
//                 <p className="font-semibold leading-relaxed">{movie.genre.join('، ')}</p>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </section>

//       {similarMovies.length > 0 && (
//         <section className="container mx-auto px-4 py-12 border-t border-gray-800">
//           <h2 className="text-3xl font-bold mb-6">فیلم‌های مشابه</h2>
//           <MovieList movies={similarMovies} />
//         </section>
//       )}
//     </div>
//   );
// }


import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { movies, Movie } from '@/app/_data/movies';
import { topActors } from '@/app/_data/actors';
import Button from '@/app/_components/ui/Button';
import MovieList from '@/app/_components/MovieList';
import TrailerPlayer from '@/app/_components/TrailerPlayer';
import { Clock, Globe, Video, Heart, Share2, Clapperboard } from 'lucide-react';

// برای ساخت مسیرهای استاتیک
export function generateStaticParams() {
  return movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}

// گرفتن فیلم بر اساس آیدی
async function getMovieById(id: string): Promise<Movie | undefined> {
  const numericId = parseInt(id, 10);
  return movies.find((m) => m.id === numericId);
}

// // متادیتای صفحه
// export async function generateMetadata(
//   { params }: { params: { id: string } }
// ): Promise<Metadata> {
//   const movie = await getMovieById(params.id);
//   if (!movie) return { title: 'فیلم پیدا نشد' };
//   return {
//     title: movie.title,
//     description: movie.description,
//   };
// }

// کامپوننت اصلی صفحه
export default async function MovieDetailPage(
  { params }: { params: { id: string } }
) {
  const movie = await getMovieById(params.id);
  if (!movie) {
    notFound();
  }

  const similarMovies = movies
    .filter((m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g)))
    .slice(0, 6);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* بنر */}
      <section className="relative h-[80vh] md:h-[70vh] flex items-end p-4 sm:p-8 text-white">
        <div className="absolute inset-0">
          <Image
            src={movie.bannerUrl}
            alt={`بنر ${movie.title}`}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
          <div className="flex-shrink-0 w-40 sm:w-48 md:w-60 -mt-24 md:mt-0">
            <Image
              src={movie.imageUrl}
              alt={movie.title}
              width={400}
              height={600}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
          <div className="flex-grow text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-300 text-sm">
              <span>{movie.year}</span>
              <span>•</span>
              <span>{`${movie.runtime} دقیقه`}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold my-3">{movie.title}</h1>
            <p className="max-w-3xl text-gray-300 line-clamp-3 md:line-clamp-none mx-auto md:mx-0">
              {movie.description}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
              <Button variant="primary" className="flex items-center gap-2 py-3 px-6 text-base sm:text-lg cursor-pointer">
                <Heart />
                افزودن به لیست
              </Button>
              <Button variant="secondary" className="w-12 h-12 p-0 flex items-center justify-center cursor-pointer">
                <Share2 />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* اطلاعات فیلم */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* بازیگران */}
            <div>
              <h2 className="text-2xl font-bold mb-4">بازیگران اصلی</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {movie.cast.map((actorName) => {
                  const actorImage =
                    topActors.find((a) => a.name === actorName)?.imageUrl ||
                    'https://picsum.photos/seed/placeholder/200/300';
                  return (
                    <div key={actorName} className="text-center">
                      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-800">
                        <Image src={actorImage} alt={actorName} fill className="object-cover" />
                      </div>
                      <p className="font-medium mt-2 text-sm truncate">{actorName}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* تریلر */}
            <div>
              <h2 className="text-2xl font-bold mb-4">تریلر رسمی</h2>
              <TrailerPlayer url={movie.trailerUrl} />
            </div>
          </div>

          {/* سایدبار اطلاعات */}
          <aside className="space-y-6 bg-gray-900 p-6 rounded-lg border border-gray-800 self-start lg:sticky top-24">
            <h3 className="text-xl font-bold border-b border-gray-700 pb-3 mb-4">جزئیات فیلم</h3>
            <div className="flex items-center gap-3">
              <Video className="text-red-400" />
              <div>
                <p className="text-gray-400 text-sm">کارگردان</p>
                <p className="font-semibold">{movie.director}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-red-400" />
              <div>
                <p className="text-gray-400 text-sm">کشور سازنده</p>
                <p className="font-semibold">{movie.country}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-red-400" />
              <div>
                <p className="text-gray-400 text-sm">مدت زمان</p>
                <p className="font-semibold">{`${movie.runtime} دقیقه`}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clapperboard className="text-red-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">ژانرها</p>
                <p className="font-semibold leading-relaxed">{movie.genre.join('، ')}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* فیلم‌های مشابه */}
      {similarMovies.length > 0 && (
        <section className="container mx-auto px-4 py-12 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6">فیلم‌های مشابه</h2>
          <MovieList movies={similarMovies} />
        </section>
      )}
    </div>
  );
}
