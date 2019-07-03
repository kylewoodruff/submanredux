const router = require("./node_modules/express").Router();
const watchlistController = require("../../controllers/watchlistController");


router.route("/")
  .get(watchlistController.findAll)
  .post(watchlistController.create);


router
  .route("/:id")
  .get(watchlistController.findById)
  .put(watchlistController.update)
  .delete(watchlistController.remove)
  .put(watchlistController.populate);

module.exports = router;