import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '../_data/movies';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} className="block group aspect-[2/3] w-full">
      <div className="relative overflow-hidden rounded-xl h-full transition-all duration-300 ease-in-out hover:scale-105 shadow-lg">
        <Image
          src={movie.imageUrl}
          alt={movie.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          
          <div className="transform transition-transform duration-300 translate-y-6 group-hover:translate-y-0">
            <h3 className="truncate text-lg font-bold text-white">{movie.title}</h3>
            <div className="mt-2 flex items-center justify-between text-sm text-gray-200">
              <span className="font-medium">{movie.year}</span>
              <span className="flex items-center gap-1 font-bold">
                {movie.rating}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.445a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.367-2.445a1 1 0 00-1.175 0l-3.367 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.25 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}