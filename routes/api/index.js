const router = require('express').Router();
const userRoutes = require('./user');
const moviesRoutes = require('./movies');
const watchRoutes = require('./watchlist');


router.use('/user', userRoutes);
router.use('/movies', moviesRoutes);
router.use('/watchlist', watchRoutes);

module.exports = router;
