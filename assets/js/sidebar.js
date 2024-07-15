'use strict';

import { api_key, fetchDataFromServer } from "./api.js";

export function sidebar () {
    const genreList = {}

    fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, 
        function( { genres }) {
            for (const { id, name } of genres) {
                genreList[id] = name;
            }

            genreLink();

        });

        canst sidebarInner = document.createElement("div");
        sidebarInner.classList.add("sidebar-inner");

        sidebarInner.innerHtml = `
                        <div class="sidebar-list">
                <p class="title">Genre</p>

                <a href="./movie-list.html"  menu-close 
                class="sidebar-link">Action</a>
                <a href="./movie-list.html"  menu-close 
                class="sidebar-link">Horror</a>
                <a href="./movie-list.html"  menu-close 
                class="sidebar-link">Comedy</a>
                <a href="./movie-list.html"  menu-close 
                class="sidebar-link">Adventure</a>
                <a href="./movie-list.html"  menu-close 
                class="sidebar-link">Drama</a>

            </div>

            <div class="sidebar-list">
                <p class="title">Language</p>

                <a href="./movie-list.html"  menu-close 
                class="sidebar-link">English</a>
                <a href="./movie-list.html"  menu-close 
                class="sidebar-link">Hindi</a>
                <a href="./movie-list.html"  menu-close 
                class="sidebar-link">Bengali</a>

            </div>

            <div class="sidebar-footer">
                <p class="copyright">
                    Copyright 2024 <a href="https://youtube.com/@codewithsadee">codewithsandee</a>
                </p>

                <img src="./assets/images/tmdb-logo.svg" width="130" 
                height="17" alt="the movie database logo">
            </div>
        `

};

