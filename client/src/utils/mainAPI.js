import axios from 'axios'

const BASEURL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="

export default {
  search: function (query) {
    return axios.get(BASEURL + query, {
      headers: {
        "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "f504da3c21mshe56c513d6a9955dp1b1c63jsn4548cb484cf3"
      }

    });
  }
};