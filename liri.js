//Loading modules
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var keys = require("./keys.js");

var inputCommand = process.argv[2];
var searchInput = process.argv.slice(3).join(" ");

// var defaultMovie = "Mr. Nobody";
var defaultSong = "The Sign";

// Variables to import from keys.js
var client = new Twitter(keys.twitter);


function commands(action) {
    switch (action) {
        case "my-tweets":
            twitter();
            break;

        case "spotify-this-song":
            spotifySong(searchInput);
            break;

            case "movie-this":
                movieThis();
                break;

            // case "do-what-it-says":
            //     doIt();
            //     break;
    };
};



// * `my-tweets`
// * This will show your last 20 tweets and when they were created at in your terminal/bash window.
function twitter() {

    var params = {
        screen_name: 'Sabrina Carbo',
        count: 20
    };

    client.get('statuses/user_timeline', params, function (error, tweet, response) {
        if (!error) {
            //console.log(tweet);
            tweetArray = tweet;

            for (i = 0; i < tweetArray.length; i++) {
                console.log("");
                console.log("Created at: " + tweetArray[i].created_at);
                console.log("");
                console.log("Text: " + tweetArray[i].text);
                console.log("");
            }
        } else {
            console.log(error);
        }
    });
};


// * `spotify-this-song`
// * This will show the following information about the song in your terminal/bash window
// * Artist(s)
// * The song's name
// * A preview link of the song from Spotify
// * The album that the song is from
// * If no song is provided then your program will default to "The Sign" by Ace of Base.

function spotifySong(song) {

    var spotify = new Spotify(keys.spotify);

    spotify.search({
        type: 'track',
        query: song,
        limit: 20
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // if(song === ""){
        // console.log(defaultSong);
        // }

        var songObject = data.tracks.items[0];
        // console.log(songObject);

        console.log("");
            console.log("Artist(s): " + songObject.artists[0].name);
            console.log("");
            console.log("Song Name: " + songObject.name);
            console.log("");
            console.log("Preview Link: " + songObject.preview_url);
            console.log("");
            console.log("Album: " + songObject.album.name);
            console.log("");
    });

};


// * `movie-this`
// * This will output the following information to your terminal/bash window:

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

// * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

// * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

// * It's on Netflix!

// * You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

function movieThis(movie) {

    var queryUrl = "http://www.omdbapi.com/?t=" + searchInput + "&y=&plot=short&apikey=trilogy";

	request(queryUrl, function(error, response, body) {
		if (movie === undefined){
        	return movie = "Mr Nobody";
    	}
		if (!error && response.statusCode === 200) {
            var body = JSON.parse(body);

            console.log("");
            console.log("Title: " + body.Title);
            console.log("");
            console.log("Release Year: " + body.Year);
            console.log("");
            console.log("IMDB Rating: " + body.imdbRating);
            console.log("");
            console.log("Rotten Tomatoes Rating: " + body.Ratings[1].Value);
            console.log("");
            console.log("Country: " + body.Country);
            console.log("");
            console.log("Language: " + body.Language);
            console.log("");
            console.log("Plot: " + body.Plot);
            console.log("");
            console.log("Actors: " + body.Actors);
            console.log("");
		}
	});
};





// * `do-what-it-says`
// * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

// * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

// * Feel free to change the text in that document to test out the feature for other commands.


// function doIt() {



// };




// ### BONUS

// * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

// * Make sure you append each command you run to the `log.txt` file. 

// * Do not overwrite your file each time you run a command.

// Core node package for reading and writing files   ==================== BONUS ====================
// var fs = require("fs");

// // This block of code will create a file called "movies.txt".
// // It will then print "Inception, Die Hard" in the file
// fs.writeFile("movies.txt", "Inception, Die Hard", function(err) {

//   // If the code experiences any errors it will log the error to the console.
//   if (err) {
//     return console.log(err);
//   }

//   // Otherwise, it will print: "movies.txt was updated!"
//   console.log("movies.txt was updated!");

// });




commands(inputCommand);