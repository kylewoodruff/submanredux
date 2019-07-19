const axios = require('axios')

const BASEURL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="
const apiKey = process.env.REACT_APP_API_KEY;

module.exports = {
  getMovies(req, res ) {
      console.log("get Movies")
      console.log(BASEURL)
      console.log(req.params.name)
      console.log(apiKey)
    axios.get(BASEURL + req.params.name, {
      headers: {
        'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey,
      },
    })

      .then(result => {console.log(result); return res.json(result.data.results)})

      .catch(err => res.status(422).json(err));
  }
}