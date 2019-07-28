const router = require('express').Router();
const userController = require('../../controllers/userController');
const checkJwt = require('../../serverAuth');

router.use(checkJwt);


router.route('/')
  .get(userController.findAll)
  .post(userController.create);


router.route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove)
  .put(userController.populate);

module.exports = router;
