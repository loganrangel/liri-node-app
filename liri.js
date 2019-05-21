require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");

var command = process.argv[2]
var input = process.argv.slice(3).join("");

// MAKE TO SWITCH CASE make liri.js to take in: concert-this, spotify-this-song, movie-this, do-what-it-says
if (command === 'concertThis') {
    concertThis(search);
} else if (command === "spotifyThisSong") {
    spotifyThis(search);
} else if (command === "movieThis") {
    movieThis(search);
} else if (command === "doWhatSays") {
    doWhatSays();
} else {
    console.log("Please give a recognizable command.");
};

