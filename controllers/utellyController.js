const axios = require('axios');

const BASEURL = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=';
const apiKey = process.env.REACT_APP_API_KEY || 'f504da3c21mshe56c513d6a9955dp1b1c63jsn4548cb484cf3';

module.exports = {
  getMovies(req, res) {
    axios.get(BASEURL + req.params.name, {
      headers: {
        'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey,
      },
    })

      .then(result => res.json(result.data.results))

      .catch(err => res.status(422).json(err));
  },
};
