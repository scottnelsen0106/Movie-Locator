/* var config = {
  apiKey: "AIzaSyDtkWR8dn7ozjR5blSqWO4pmQGX0-VM5UI",
  authDomain: "movie-locator-project1.firebaseapp.com",
  databaseURL: "https://movie-locator-project1.firebaseio.com",
  projectId: "movie-locator-project1",
  storageBucket: "movie-locator-project1.appspot.com",
};
firebase.initializeApp(config);
var database = firebase.database(); */

$(document).ready(function() {
  $("#genreButtons").hide()
});

$("#stayHome").on("click", function () {
  $("#genreButtons").show()
})


/*
var movie = "elf"
var tmdbMovieURL = "https://api.themoviedb.org/3/search/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&query=" + movie;

var tmdbGenreURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&with_genres=" + genre;
console.log(tmdbGenreURL)

var tmdbHomeReleaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&release_date.lte=" + releaseDateHome;
console.log(releaseDateHome)
*/

var genreAction = 28
var genreComedy = 35
var genreDrama = 18
var genreHorror = 27

var releaseDateStay = moment().subtract(8, 'months').format("YYYY-MM-DD");


var actionStayReleaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&release_date.lte=" + releaseDateStay + "&with_genres=" + genreAction;

var comedyStayReleaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&release_date.lte=" + releaseDateStay + "&with_genres=" + genreComedy;

var dramaStayReleaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&release_date.lte=" + releaseDateStay + "&with_genres=" + genreDrama;

var horrorStayReleaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&release_date.lte=" + releaseDateStay + "&with_genres=" + genreHorror;

function getactionMovies() {

  $.ajax({
    url: actionStayReleaseURL,
    method: "GET"
  }).then(function(response) { 

    var movieOne = response.results[0].title
    console.log(movieOne)

    var movieTwo = response.results[1].title
    console.log(movieTwo)

    var movieThree = response.results[2].title
    console.log(movieThree)

    var movieFour = response.results[3].title
    console.log(movieFour)

  });

}

getactionMovies ()

