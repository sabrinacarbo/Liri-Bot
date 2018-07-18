console.log('this is loaded');

require("dotenv").config();

// Spotify API keys
var spotID = process.env.SPOTIFY_ID;
var spotSecret = process.env.SPOTIFY_SECRET;

// Twitter API keys
var twitConKey = process.env.TWITTER_CONSUMER_KEY;
var twitConSecret = process.env.TWITTER_CONSUMER_SECRET;
var twitTokenKey = process.env.TWITTER_ACCESS_TOKEN_KEY;
var twitTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

exports.twitter = {
  consumer_key: twitConKey,
  consumer_secret: twitConSecret,
  access_token_key: twitTokenKey,
  access_token_secret: twitTokenSecret
};

exports.spotify = {
  id: spotID,
  secret: spotSecret
};
