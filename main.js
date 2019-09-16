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
  $("#zipCodeForm").hide()
  $("#mapContainer").hide()
});

$("#stayHome").on("click", function () {
  $("#genreButtons").show()
  $("#zipCodeForm").hide();
  $("#diffResetButtons").hide()
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

function getActionMovies() {

  $.ajax({
    url: actionStayReleaseURL,
    method: "GET"
  }).then(function(response) { 

    var movieOne = response.results[randomMovieIndexOne].title

    var movieTwo = response.results[randomMovieIndexTwo].title

    var movieThree = response.results[randomMovieIndexThree].title

    var movieFour = response.results[randomMovieIndexFour].title

    $("#movie1").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexOne].poster_path)
    $("#movie2").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexTwo].poster_path)
    $("#movie3").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexThree].poster_path)
    $("#movie4").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexFour].poster_path)

    $("#movie1").attr("value", movieOne)
    $("#movie2").attr("value", movieTwo)
    $("#movie3").attr("value", movieThree)
    $("#movie4").attr("value",movieFour)
})
}

function getComedyMovies() {

  $.ajax({
    url: comedyStayReleaseURL,
    method: "GET"
  }).then(function(response) { 

    var movieOne = response.results[randomMovieIndexOne].title

    var movieTwo = response.results[randomMovieIndexTwo].title

    var movieThree = response.results[randomMovieIndexThree].title

    var movieFour = response.results[randomMovieIndexFour].title

    $("#movie1").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexOne].poster_path)
    $("#movie2").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexTwo].poster_path)
    $("#movie3").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexThree].poster_path)
    $("#movie4").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexFour].poster_path)

    $("#movie1").attr("value", movieOne)
    $("#movie2").attr("value", movieTwo)
    $("#movie3").attr("value", movieThree)
    $("#movie4").attr("value",movieFour)
})
}

function getDramaMovies() {

  $.ajax({
    url: dramaStayReleaseURL,
    method: "GET"
  }).then(function(response) { 

    var movieOne = response.results[randomMovieIndexOne].title

    var movieTwo = response.results[randomMovieIndexTwo].title

    var movieThree = response.results[randomMovieIndexThree].title

    var movieFour = response.results[randomMovieIndexFour].title

    $("#movie1").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexOne].poster_path)
    $("#movie2").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexTwo].poster_path)
    $("#movie3").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexThree].poster_path)
    $("#movie4").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexFour].poster_path)

    $("#movie1").attr("value", movieOne)
    $("#movie2").attr("value", movieTwo)
    $("#movie3").attr("value", movieThree)
    $("#movie4").attr("value",movieFour)
})
}

function getHorrorMovies() {

  $.ajax({
    url: horrorStayReleaseURL,
    method: "GET"
  }).then(function(response) { 

    var movieOne = response.results[randomMovieIndexOne].title

    var movieTwo = response.results[randomMovieIndexTwo].title

    var movieThree = response.results[randomMovieIndexThree].title

    var movieFour = response.results[randomMovieIndexFour].title

    $("#movie1").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexOne].poster_path)
    $("#movie2").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexTwo].poster_path)
    $("#movie3").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexThree].poster_path)
    $("#movie4").attr("src","https://image.tmdb.org/t/p/w185/" + response.results[randomMovieIndexFour].poster_path)

    $("#movie1").attr("value", movieOne)
    $("#movie2").attr("value", movieTwo)
    $("#movie3").attr("value", movieThree)
    $("#movie4").attr("value",movieFour)
})
}

var movieGenreSelected

$("#btn-Action").on("click", function () {
  $("#movieOnlineLocation").empty()
  $("#moviePoster").show()
  getActionMovies()
  movieGenreSelected = "action"
  console.log("genre: " + movieGenreSelected)
})

$("#btn-Comedy").on("click", function () {
  $("#movieOnlineLocation").empty()
  $("#moviePoster").show()
  getComedyMovies()
  movieGenreSelected = "comedy"
  console.log("genre: " + movieGenreSelected)
})

$("#btn-Drama").on("click", function () {
  $("#movieOnlineLocation").empty()
  $("#moviePoster").show()
  getDramaMovies()
  movieGenreSelected = "drama"
  console.log("genre: " + movieGenreSelected)
})

$("#btn-Horror").on("click", function () {
  $("#movieOnlineLocation").empty()
  $("#moviePoster").show()
  getHorrorMovies()
  movieGenreSelected = "horror"
  console.log("genre: " + movieGenreSelected)
})


$("img").on("click", function (){ 
  $("#diffResetButtons").show()
  var movieTitle = $(this).attr("value")

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

        if (parsedJSON.results.length === 0) {
          $("#movieOnlineLocation").append(movieTitle + " is not available online...Choose Another!")
        }  

        else {
          var arr = parsedJSON.results[0].locations

          for(var i = 0; i < parsedJSON.results[0].locations.length; i++)
          $("#movieOnlineLocation").append("You can watch " + movieTitle + " on " + parsedJSON.results[0].locations[i].display_name + ".  ")

    /*     jQuery.each(arr, function(i,val) {
            $("#movieOnlineLocation").replaceWith("<p>" + val.display_name + "<p>")
            console.log ("HEEEY232323" + val.display_name) 
          })*/
        }


        $("#diffMovies").on("click", function (){
          if (movieGenreSelected === "action") {
            randomMovieIndexOne = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexTwo = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexThree = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexFour = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            getActionMovies()
            $("#movieOnlineLocation").empty()
          }
          if (movieGenreSelected === "comedy") {
            randomMovieIndexOne = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexTwo = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexThree = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexFour = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            getComedyMovies()
          }
          if (movieGenreSelected === "drama") {
            randomMovieIndexOne = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexTwo = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexThree = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexFour = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            getDramaMovies()
          }
          if (movieGenreSelected === "horror") {
            randomMovieIndexOne = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexTwo = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexThree = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            randomMovieIndexFour = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
            getHorrorMovies()
          }
        })

        $("#resetButton").on("click", function (){
          $("#genreButtons").hide()
          $("#moviePoster").hide()
          randomMovieIndexOne = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
          randomMovieIndexTwo = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
          randomMovieIndexThree = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
          randomMovieIndexFour = movieIndexNumber[Math.floor(Math.random()*movieIndexNumber.length)]
          $("#movieOnlineLocation").empty()
        })

      });
  })


})

$("#goOut").on("click", function () {
  $("#genreButtons").hide();
  $("#moviePoster").hide();
  $("#movieOnlineLocation").hide();
  $("#zipCodeForm").show();
})

var zipNumber

function getZipCode () {
  zipNumber = $("#zipCode").val().trim();
}

function validateZip (str) {
  isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

  if (isValidZip.test(str)) {
    return true;
  }
  
  else {
    return false;
  }
}

$("#zipCodeButton").on("click", function() {
  getZipCode ()
  console.log(zipNumber)
  console.log(validateZip (zipNumber))

  if (validateZip (zipNumber) === false) {
    $("#invalidZip").text("Invalid zip code. Please enter a valid zip code")
    $("#zipCode").val("")
  }

  else {
    $("#invalidZip").text("")
    $("#mapContainer").show()
    movieMapInfo()
  }
})


function movieMapInfo() {
  getZipCode ()
  var movieMapURL = "https://www.mapquestapi.com/search/v2/radius?origin=" + zipNumber + "&radius=15&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|783201&outFormat=json&key=yMPy5Bl4sQ0I1GpYAsF7t9R5iLuWuY6V"

  $.ajax({
    url: movieMapURL,
    method: "GET"
  }).then(function(response) { 
    

    for (var i = 0; i < response.searchResults.length; i++) {
      console.log(response.searchResults[i].fields)
      console.log(response.searchResults[i].fields.name)

      var movieName = response.searchResults[i].fields.name

      var movieNamePlus

      function updateName() {
        movieNamePlus = movieName.split(" ").join("+");
      }

      updateName () 

      $("#moviePhysicalLocation").append("<ul>" + response.searchResults[i].fields.name + ": " +  "<a href= https://www.google.com/search?q=" +  movieNamePlus + " target='_blank'>Click here to see what movies are playing here</a>" + "</ul>")

      // ": <a href='https://www.google.com/search?q='" + response.searchResults[i].fields.name "target='_blank'> Click here to see what movies are playing</a>" + 

      /* $("#movieOnlineLocation").append("You can watch " + movieTitle + " on " + parsedJSON.results[0].locations[i].display_name + ".  ") */
    }

    
  
  })

}

// parsedJSON.searchResults[i].length

/* <div id="mapContainer"></div> */








