//Loading modules
var Twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require('request');
var keys = require("./keys.js");

var inputCommand = process.argv[2];
// var commandParam = process.argv[3];

// var tweetsArray = [];

// var defaultMovie = "Mr. Nobody";
// var defaultSong = "The Sign";

// require("dotenv").config();

var input = process.argv[2];


// Variables to import from keys.js         ??????????????????????????????????????????????????
// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
// console.log(keys.twitter);

function commands(action) {
    switch (action) {
        case "my-tweets":
            twitter();
            break;

            // case "spotify-this-song":
            //     spotify();
            //     break;

            // case "movie-this":
            //     movie();
            //     break;

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

            for(i=0; i<tweetArray.length; i++){
                console.log('');
                console.log("Created at: " + tweetArray[i].created_at);
                console.log("Text: " + tweetArray[i].text);
                console.log('');
            }
        }
        else{
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

// * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

// * Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

// * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

// * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

// * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

// * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

// function spotify() {



// };



// * `movie-this`
// * This will output the following information to your terminal/bash window:

// ```
// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.
// ```

// * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

// * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

// * It's on Netflix!

// * You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

// function movie() {



// };





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



//reading txt files:                                  ============ MAY NEED ===============
// fs.readFile("movies.txt", "utf8", function(error, data) {

//     // If the code experiences any errors it will log the error to the console.
//     if (error) {
//       return console.log(error);
//     }

//     // We will then print the contents of data
//     console.log(data);

//     // Then split it by commas (to make it more readable)
//     var dataArr = data.split(",");

//     // We will then re-display the content as an array for later use.
//     console.log(dataArr);

//   });

commands(inputCommand);