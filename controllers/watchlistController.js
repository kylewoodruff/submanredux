const db = require('../models');

module.exports = {
  findAll(req, res) {
    db.Watchlist
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById(req, res) {
    db.Watchlist
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create(req, res) {
    console.log("Reading request.body")
    console.log(req.body)
    db.Watchlist
      .findOneAndUpdate(req.body.movie_id, req.body, { upsert: true, new: true })
      // eslint-disable-next-line arrow-body-style
      .then((dbWatchlist) => {
        console.log(dbWatchlist)
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update(req, res) {
    db.Watchlist
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove(req, res) {
    db.Watchlist
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
