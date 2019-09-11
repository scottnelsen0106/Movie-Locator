var config = {
  apiKey: "AIzaSyDtkWR8dn7ozjR5blSqWO4pmQGX0-VM5UI",
  authDomain: "movie-locator-project1.firebaseapp.com",
  databaseURL: "https://movie-locator-project1.firebaseio.com",
  projectId: "movie-locator-project1",
  storageBucket: "movie-locator-project1.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

var movie = "elf"

var tmdbMovieURL = "https://api.themoviedb.org/3/search/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&query=" + movie;


var genre = 35

var tmdbGenreURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&with_genres=" + genre;


console.log(tmdbGenreURL)