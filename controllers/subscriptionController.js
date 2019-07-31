const db = require('../models');


module.exports = {
  findAll(req, res) {
    db.User
      .find({
        id: req.user.sub,
      })
      // .sort({ date: -1 })
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
    db.User
      .findOneAndUpdate(
        {
          id: req.user.sub,
        },
        { $push: { subs: req.body } },
      )
      .then(dbUser => res.json(dbUser))
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
      .findOne(
        {
          id: req.user.sub,
        },
      )
      .then((dbModel) => {
        console.log("dbModel", dbModel)
        let subArray = dbModel.subs;
        console.log("subArray", subArray);
      })
      // .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};

//for delete need to findone to get user, 
//then findOneAndDelete the subscription based off of 
// the id. The index needs to be saved