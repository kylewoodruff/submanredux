const router = require('express').Router();
const userRoutes = require('./user');
const moviesRoutes = require('./movies');
const watchRoutes = require('./watchlist');
const subsRoutes = require('./subs');


router.use('/user', userRoutes);
router.use('/movies', moviesRoutes);
router.use('/watchlist', watchRoutes);
router.use('/subs', subsRoutes);

module.exports = router;
