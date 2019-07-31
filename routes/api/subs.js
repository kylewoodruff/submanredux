const router = require('express').Router();
const subsController = require('../../controllers/subscriptionController');
const checkJwt = require('../../serverAuth');

router.use(checkJwt);

router.route('/')
  .get(subsController.findAll)
  .post(subsController.create);


router
  .route('/:id')
  .get(subsController.findById)
  .put(subsController.update)
  .delete(subsController.remove);

module.exports = router;
