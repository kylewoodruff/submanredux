const router = require('express').Router();
const userRoutes = require('./user');
const moviesRoutes = require('./movies');


router.use('/user', userRoutes);
router.use('/movies', moviesRoutes);

module.exports = router;
