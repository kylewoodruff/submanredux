import axios from 'axios'


const BASEURL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="
const apiKey = process.env.REACT_APP_API_KEY
console.log(apiKey)

export default {
  search: function (query) {
    return axios.get(BASEURL + query, {
      headers: {
        "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apiKey
      }

    });
  }
};