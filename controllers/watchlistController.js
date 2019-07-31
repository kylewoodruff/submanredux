const db = require('../models');

module.exports = {
  findAll(req, res) {
    db.User
      .find({ id: req.user.sub })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create(req, res) {
    // console.log(req.user.sub);
    // console.log(req.body.movie_id);
    db.User
      .findOneAndUpdate(
        {
          id: req.user.sub,
          // 'shows.movie_id': req.movie_id,
        },
        { $push: { watchlist: req.body } },
      )
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  update(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
