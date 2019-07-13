const router = require('express').Router();
const passport = require('passport');


// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  res.render('logging out of google');
});

// google auth
router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }),
);

// redirect with google auth
// callback route after authentication
router.get('/google/callback', passport.authenticate('google'), (
  req,
  res,
) => {
  //
});


module.exports = router;
