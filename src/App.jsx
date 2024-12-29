import { useState } from 'react'

import './App.css'
import axios from 'axios';
import { useEffect } from 'react';
import MovieCard from './components/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://dummyapi.online/api/movies')
      .then(response => {
        setMovies(response.data);
        console.log('Movies fetched:', response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <>
       <div className="App container">
      <h1 className="my-4">Amazing Animated Movie Cards</h1>
      <div className="movie-cards d-flex flex-wrap justify-content-center">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
