import React from 'react';
import { motion } from 'framer-motion';

const MovieCard = ({ movie }) => {
  return (
    <motion.div className="card mb-4" style={{ width: '18rem' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <img src={movie.image} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.movie}</h5>
        <p className="card-text">{movie.description}</p>
        <p className="card-text"><strong>Rating:</strong> {movie.rating}</p>
        <a href={movie.imdb_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View on IMDb</a>
      </div>
    </motion.div>
  );
};

export default MovieCard;