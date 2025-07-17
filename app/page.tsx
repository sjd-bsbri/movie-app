import MovieSlider from './_components/MovieSlider';
import MovieList from './_components/MovieList';
import { movies } from './_data/movies';
import TopActors from './_components/TopActors';

export default function HomePage() {
  const popularMovies = [...movies].sort((a, b) => b.rating - a.rating);
  const newMovies = [...movies].sort((a, b) => b.year - a.year);

  const sliderMovies = popularMovies.slice(0, 21);

  return (
    <div>
      <MovieSlider movies={sliderMovies} />

      <div className="container mx-auto px-4 -mt-10 relative z-20 space-y-16">
        <MovieList title="جدیدترین‌ها" movies={newMovies} />
                <TopActors />

        <MovieList title="محبوب‌ترین‌ها" movies={popularMovies} />

      </div>
    </div>
  );
}