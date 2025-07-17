'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/Button';
import { Movie } from '../_data/movies';

import 'swiper/css';
import 'swiper/css/effect-fade';

interface MovieSliderProps {
  movies: Movie[];
}

export default function MovieSlider({ movies }: MovieSliderProps) {
  return (
    <div className="relative h-[65vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        allowTouchMove={false} 
        className="h-full w-full"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-full w-full">
              <Image
                src={movie.bannerUrl}
                alt={`بنر فیلم ${movie.title}`}
                fill
                className="object-cover opacity-100"
                priority={index === 0} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
              <div className="container mx-auto px-4 relative z-10 flex flex-col justify-end h-full pb-20 text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                  {movie.title}
                </h1>
                <p className="max-w-2xl text-gray-200 mb-8 line-clamp-2 text-lg">
                  {movie.description}
                </p>
                <div className="flex gap-4">
                  <Link href={`/movie/${movie.id}`}>
                    <Button variant="primary" className="px-6 py-3 text-base cursor-pointer">
                      اطلاعات بیشتر و پخش
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}