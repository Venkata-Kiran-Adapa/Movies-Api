const express=require('express');
const router=express();
const {
  handleGetAllMovies,
  handlePostNewMovie,
  handleDeleteMoviesByTitle,
  handleGetMoviesByDirectors,
  handleGetMoviesByGenre,
  handleGetMoviesByYear,
  handleUpdateMoviesByTitle,
  handleGetMoviesByTitle
                             } = require('../controllers/movies');

router.route('/')
      .get(handleGetAllMovies)
      .post(handlePostNewMovie);

router.get('/title/:title',handleGetMoviesByTitle);

router.get('/directors/:directors', handleGetMoviesByDirectors);

router.get('/year/:year', handleGetMoviesByYear);

router.get('/genre/:genre',handleGetMoviesByGenre);

router.route('/:title')
    .put(handleUpdateMoviesByTitle)
    .delete(handleDeleteMoviesByTitle);
     
module.exports =router;