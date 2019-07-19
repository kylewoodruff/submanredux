const router = require('express').Router();
const utellyController = require('../../controllers/utellyController');

router.route("/:name")
  .get(utellyController.getMovies);

  module.exports = router;