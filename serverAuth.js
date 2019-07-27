const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://sub-merge.auth0.com/.well-known/jwks.json',
  }),
  audience: 'teNlTbyVB3lCq5OTWhmxEbkLJlLowDJN',
  issuer: 'https://sub-merge.auth0.com/',
  algorithms: ['RS256'],
});


module.exports = checkJwt;
