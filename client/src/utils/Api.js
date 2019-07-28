import axios from 'axios';
import auth0Client from '../Auth';


export default {

  getUsers: function () {
    return axios.get("/api/user",
    {
      headers: {
        'Authorization': `Bearer ${auth0Client.getIdToken()}`
      }
    });
  },

  getUser: function (id) {
    return axios.get("/api/user/" + id,
    {
      headers: {
        'Authorization': `Bearer ${auth0Client.getIdToken()}`
      }
    });
  },

  deleteUser: function (id) {
    return axios.delete("/api/user/" + id,
    {
      headers: {
        'Authorization': `Bearer ${auth0Client.getIdToken()}`
      }
    });
  },

  saveUser: function (userData) {
    return axios.post(
      '/api/user', 
      userData,
      {
        headers: {
          'Authorization': `Bearer ${auth0Client.getIdToken()}`
        }
      });
  },
  saveWatchlist: function (userData) {
    //   console.log("This is inside userDate ");
    //  console.log(userData)
    return axios.post(
      '/api/watchlist', 
      userData,
      {
        headers: {
          'Authorization': `Bearer ${auth0Client.getIdToken()}`
        }
      });

  },
  getSubs: function () {
      return axios.get('/api/subs',
      {
        headers: {
          'Authorization': `Bearer ${auth0Client.getIdToken()}`
        }
      })
    }
}

