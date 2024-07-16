'use strict';

import { api_key, imageBaseUrl, fetchDataFromServer } from "./api.js";
import { sidebar } from "./sidebar.js";
import { createMovieCard } from "./movie-card.js";


const movieId = window.localStorage.getItem("movieId");
const pageContent = document.querySelector("[page-content]");



sidebar();



const getGenres = function(genreList) {
    const newGenreList = [];

    for (const { name } of genreList) 
}

fetchDataFromServer(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=casts,videos,images,releases`, function(movie) {

    const {
        backdrop_path,
        poster_path,
        title,
        release_date,
        runtime,
        vote_average,
        releases: { countries: [{ certification }]},
        genres,
        overview,
        casts: { cast, crew },
        videos: { results: videos }
    } = movie

    document.title = `${title} - Tvflix`;

    const movieDetail = document.createElement("div");
    movieDetail.classList.add("movie-detail");

    movieDetail.innerHTML = `
            <div class="backdrop-image" style="background-image: url('${imageBaseUrl}${"w1280" || "original"}${backdrop_path || poster_path}');">

            </div>
            <figure class="poster-box movie-poster">
                <img src="${imageBaseUrl}w342${poster_path}" 
                alt="${title}" class="img-cover">
            </figure>

           <div class="detail-box">



            <div class="detail-content">
                <h1 class="heading">${title}</h1>

                <div class="meta-list">
                    <div class="meta-item">
                        <img src="./assets/images/star.png" width="20"
                        height="20" alt="rating">

                        <span class="span">${vote_average.toFixed(1)}</span>
                    </div>

                    <div class="separator"></div>

                    <div class="meta-item">${runtime}m</div>

                    <div class="separator"></div>

                    <div class="meta-item">${release_date.split("-")[0]}</div>

                    <div class="meta-item card-badge">${certification}</div>

                </div>


                <p class="genre">${getGenres(genres)}</p>

                <p class="overview">
                    Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.
                </p>

                <ul class="detail-list">

                    <div class="list-item">
                        <p class="list-name">Starring</p>

                        <p>
                            Letitia Wright, Lupita Nyong'o, Danai Gurira, Winston Duke, Dominique Thorne, Tenoch Huerta Mejía, Angela Bassett, Florence Kasumba, Michaela Coel, Mabel Cadena
                        </p>
                    </div>

                    <div class="list-item">
                        <p class="list-name">Directed By</p>

                        <p>
                            Ryan Coogler
                        </p>
                    </div>

                </ul>


            </div>

            <div class="title-wrapper">
                <h3 class="title-large">Trailers and Clips</h3>
            </div>

            <div class="slider-list">
                <div class="slider-inner">

                    <div class="video-card"></div>

                    <div class="video-card"></div>

                    <div class="video-card"></div>

                    <div class="video-card"></div>

                </div>
            </div>

           </div>
    `

})
