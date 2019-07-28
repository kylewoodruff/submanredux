const mongoose = require('mongoose');

const { Schema } = mongoose;

const Shows = new Schema({
  movie_id: { type: String },
  title: { type: String },
});

// const Watchlist = mongoose.model('Watchlist', WatchlistSchema);


module.exports = Shows;
