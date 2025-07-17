import Image from 'next/image';
import Button from './ui/Button';
import { Movie } from '../_data/movies'; 

interface BannerProps {
  movie: Movie;
}

export default function Banner({ movie }: BannerProps) {
  return (
    <div className="relative h-[60vh] w-full">
      <Image
        src={movie.bannerUrl}
        alt={`بنر فیلم ${movie.title}`}
        fill
        className="object-cover opacity-40"
        priority 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-end h-full pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          {movie.title}
        </h1>
        <p className="max-w-2xl text-gray-300 mb-6 line-clamp-3">
          {movie.description}
        </p>
        <div className="flex gap-4">
          <Button variant="primary">پخش فیلم</Button>
          <Button variant="secondary">اطلاعات بیشتر</Button>
        </div>
      </div>
    </div>
  );
}