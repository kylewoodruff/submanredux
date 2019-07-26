const mongoose = require('mongoose');


// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const WatchlistSchema = new Schema({
  movie_id: { type: String },
  title: { type: String },
  user: [
    {

      type: Schema.Types.ObjectId,

      ref: 'User',
    },
  ],
});

const Watchlist = mongoose.model('Watchlist', WatchlistSchema);


module.exports = Watchlist;
