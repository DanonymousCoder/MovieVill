'use strict';

import { api_key, imageBaseUrl, fetchDataFromServer } from "./api.js";
import { sidebar } from "./sidebar.js";
import { createMovieCard } from "./movie-card.js";


const movieId = window.localStorage.getItem("movieId");
const pageContent = document.querySelector("[page-content]");



sidebar();



fetchDataFromServer(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${acd7051084d12e733b81592b8c9d8b60}&append_to_response=casts,videos,images,releases`, function(movie) {

})
