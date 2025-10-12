import React from 'react';

// Define a basic type for movie data structure
interface MovieCardProps {
  title: string;
  releaseYear: number;
  posterUrl?: string;
}

/**
 * Displays summarized movie information.
 */
const MovieCard: React.FC<MovieCardProps> = ({ title, releaseYear, posterUrl }) => {
  return (
    <div className="max-w-xs overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-xl hover:shadow-2xl">
      <img
        className="object-cover w-full h-64"
        src={posterUrl || 'https://placehold.co/400x600/1e293b/ffffff?text=No+Poster'}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 truncate">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">Released: {releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
