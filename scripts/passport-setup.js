const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
  new GoogleStrategy(
    {
      // options for google strat
      callbackURL: '/google/callback',
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
    }, () => {

    },
  ),
);
