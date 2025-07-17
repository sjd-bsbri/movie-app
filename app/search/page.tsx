'use client'; 

import { useState } from 'react';
import MovieList from '../_components/MovieList';
import { movies, genres } from '../_data/movies'; 
export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortOrder, setSortOrder] = useState('rating');

  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((movie) =>
      selectedGenre === 'all' ? true : movie.genre.includes(selectedGenre)
    )
    .sort((a, b) => {
      if (sortOrder === 'rating') {
        return b.rating - a.rating;
      }
      if (sortOrder === 'year') {
        return b.year - a.year;
      }
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">جستجو و فیلتر فیلم‌ها</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-gray-800 rounded-lg">
        <input
          type="text"
          placeholder="نام فیلم را وارد کنید..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="all">همه ژانرها</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="rating">محبوب‌ترین</option>
          <option value="year">جدیدترین</option>
        </select>
      </div>

      {filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} />
      ) : (
        <p className="text-center text-gray-400 mt-16">فیلمی با این مشخصات یافت نشد.</p>
      )}
    </div>
  );
}