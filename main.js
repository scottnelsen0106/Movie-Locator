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
  $("#moviePoster").hide()
  $("#zipCodeForm").hide();
});

$("#stayHome").on("click", function () {
  $("#genreButtons").show()
})

var genreAction = 28
var genreComedy = 35
var genreDrama = 18
var genreHorror = 27

var releaseDateStay = moment().subtract(8, 'months').format("YYYY-MM-DD");


var actionStayReleaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&release_date.lte=" + releaseDateStay + "&with_genres=" + genreAction;

var comedyStayReleaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&release_date.lte=" + releaseDateStay + "&with_genres=" + genreComedy;

var dramaStayReleaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&release_date.lte=" + releaseDateStay + "&with_genres=" + genreDrama;

var horrorStayReleaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=fba4b8ce04296fb7fc2c5e02f832d206&release_date.lte=" + releaseDateStay + "&with_genres=" + genreHorror;

var movieIndexNumber = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
var randomMovieIndexOne = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
var randomMovieIndexTwo = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
var randomMovieIndexThree = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
var randomMovieIndexFour = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]

function getactionMovies() {

  $.ajax({
    url: actionStayReleaseURL,
    method: "GET"
  }).then(function(response) { 

    var movieOne = response.results[randomMovieIndexOne].title
    console.log(movieOne)

    var movieTwo = response.results[randomMovieIndexTwo].title
    console.log(movieTwo)

    var movieThree = response.results[randomMovieIndexThree].title
    console.log(movieThree)

    var movieFour = response.results[randomMovieIndexFour].title
    console.log(movieFour)

    $("#movie1").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexOne].poster_path)
    $("#movie2").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexTwo].poster_path)
    $("#movie3").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexThree].poster_path)
    $("#movie4").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexFour].poster_path)

    $("#movie1").attr("value", movieOne)
    $("#movie2").attr("value", movieTwo)
    $("#movie3").attr("value", movieThree)
    $("#movie4").attr("value",movieFour)
    console.log("https://image.tmdb.org/t/p/w185/" + response.results[0].poster_path)
})
}

$("#btn-Action").on("click", function () {
    $("#moviePoster").show()
    getactionMovies()
    console.log("hey")
})


$("img").on("click", function (){ 

  console.log(event);
  var movieTitle = $(this).attr("value")
  console.log("WHYYYY " + movieTitle)

  fetch ("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + movieTitle + "&country=us", {

  "method": "GET",
  "headers": {
        "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": "fc4a809c12msh61382c12edef21bp1a1041jsn79853bad1e8a"
    }
  })

  .then(response => {

    $("#movieOnlineLocation").empty()

      response.json().then(function(parsedJSON) {
        console.log(parsedJSON);

        if (parsedJSON.results.length === 0) {
          $("#movieOnlineLocation").append(movieTitle + " is not available online...Choose Another!")
        }  

        else {
          var arr = parsedJSON.results[0].locations

          for(var i = 0; i < parsedJSON.results[0].locations.length; i++)
          $("#movieOnlineLocation").append("You can watch " + movieTitle + " on " + parsedJSON.results[0].locations[i].display_name)

    /*     jQuery.each(arr, function(i,val) {
            $("#movieOnlineLocation").replaceWith("<p>" + val.display_name + "<p>")
            console.log ("HEEEY232323" + val.display_name) 
          })*/
        }
      });
  })

})


$("goOut").on("click", function () {
  $("#genreButtons").hide();
  $("#moviePoster").hide();
  $("#movieOnlineLocation").hide();
  $("zipCodeForm").show();
})


var zipCode = document.getElementById("#zipCode").value;

function validateZip (str) {
  isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

  if (isValidZip.test(str)) {
    return true;
  }
  
  else {
    return false;
  }
}

/* $("#zipCodeButton").on("click", function() {
  validateZip()
  if (return === "false") 

}) */


