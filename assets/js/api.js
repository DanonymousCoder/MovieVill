'use strict';

const api_key = 'acd7051084d12e733b81592b8c9d8b60';
const imageBaseUrl = 'http://image.tmdb.org/t/p/';

/**
 *  fetch data from a server using the'url' and passes the reuslt in 
 * JSON data to a 'callback' function, along with an optional parameter
 * if has 'optionalParam'.
 */

const fetchDataFromServer = function(url, callback, optionalParam) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}