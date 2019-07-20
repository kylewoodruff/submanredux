import axios from 'axios'

export default {
  search: function (query) {
    console.log(query)
    return axios.get("/api/movies/" + query);
  }
};