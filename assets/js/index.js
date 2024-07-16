'use strict';

/** 
* import all components and functions
*/

import{ sidebar } from "./sidebar.js";
import {api_key, imageBaseUrl, fetchDataFromServer } from "./api.js";

const pageContent = document.querySelector("[page-content]");

sidebar();

    /**
     *  fetch all genres e.g: [ { "id": "123", "name": "Action" }]
     * then change genre format e.g: { 123: "Action" }
     */
    const genreList = {

        // create genre string from genre_id  e.g: [23, 43] -> "Action, Romance".

        asString(genreIdList) {
            let newGenreList = [];

            for (const genreId of genreIdList) {
                this[genreId] && newGenreList.push(this[genreId]); // this == genreList;
            }

            return newGenreList.join(", ");
        }

    };

    fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, 
        function( { genres }) {
            for (const { id, name } of genres) {
                genreList[id] = name;
            }

            fetchDataFromServer(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`, heroBanner);

        });





const heroBanner = function({ results : movieList}) {

    const banner = document.createElement("section");
    banner.classList.add("banner");
    banner.ariaLabel = "Popular Movies";

    banner.innerHTML = html`
            <div class="banner-slider">

                <div class="slider-item active" slider-item>
                 
                </div>


            </div>

            <div class="slider-control">
                <div class="control-inner">

                    <button class="poster-box slider-item">
                        <img src="./assets/images/slider-control.jpg" 
                        alt="Slide to Puss in Boots: The Last Wish" 
                        loading="lazy" draggable="false" class="img-cover">
                    </button>

                </div>
            </div>
    `;

    let controlItemIndex = 0;

    for (const [index, movie] of movieList.entries()) {

        const {
            backdrop_path,
            title,
            release_date,
            genre_ids,
            overview,
            poster_path,
            vote_average,
            id
        } = movie;

        const sliderItem = document.createElement("div");
        sliderItem.classList.add("slider-item");
        sliderItem.setAttribute("slider-item", "");

        sliderItem.innerHTML = `
               <img src="${imageBaseUrl}w1280${backdrop_path}" 
                    alt="${title}" class="img-cover"
                    loading="index === 0 ? "eager": "lazy"> 

                    <div class="banner-content">

                        <h2 class="heading">
                            ${title}
                        </h2>

                        <div class="meta-list">
                            <div class="meta-item">${release_date.splt("-")[0]}</div>

                            <div class="meta-item card-badge">${vote_average.toFixed(1)}</div>
                        </div>

                        <p class="genre">${genreList.asString(genre_ids)}</p>

                        <p class="banner-text">${overview}</p>

                        <a href="./detail.html" class="btn">
                            <img src="./assets/images/play_circle.png" width="24"
                            height="24" aria-hidden="true" alt="play circle">

                            <span class="span">Watch Now</span>
                        </a>

                    </div>

        `

    }

}