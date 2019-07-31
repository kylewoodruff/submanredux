const router = require('express').Router();
const watchlistController = require('../../controllers/watchlistController');
const checkJwt = require('../../serverAuth');

router.use(checkJwt);

router.route('/')
  .get(watchlistController.findAll)
  .post(watchlistController.create);


router
  .route('/:id')
  .get(watchlistController.findById)
  .put(watchlistController.update)
  .delete(watchlistController.remove);

module.exports = router;
