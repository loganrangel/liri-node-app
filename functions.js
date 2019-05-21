var axios = require("axios");
var fs = require("fs");

var Liri = function() {
//node liri.js concert-this <artist/band name here>
this.concertThis = function (concertThis) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + BITID

    axios.get(URL).then(resp => {
      
     this.logger(stringToLog);   
    });
    
    //want back Name of the venue, Venue location, date of the event (mm/dd/year)
};
//node liri.js spotify-this-song '<song name here>' 
this.spotifyThis = function (spotifyThisSong) {
    var URL =

    this.logger(stringToLog);
//want back artist(s), song name, preview link of the song, album that song is from

//if no song provided, default to "The Sign" by Ace of Base

//utilize node-spotify-api package to retrieve Spotify info
};
// -------------------------
this.movieThis = function (movieThis) {
    var queryURL = "http://www.omdbapi.com/?apikey=" + OMDBKey + "&t" + movie;

    this.logger(stringToLog);
    //node liri.js movie-this '<movie name here>'

    //use axios package to retrieve data, 

    //want back title of the movie, year the movie came out, Rating, Rotten Tomatoes rating, country where movie produced, language, plot, actors  

    //if no movie provided, default to "Mr. Nobody"
};
//node liri.js do-what-it-says
this.doWhatSays = function (doWhatSays) {
    //using fs package, take text inside random.txt, should run spotify-this-song
};


};