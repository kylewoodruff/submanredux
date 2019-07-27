import axios from 'axios'


export default {
    
    getUsers: function() {
      return axios.get("/api/user");
    },
    
    getUser: function(id) {
      return axios.get("/api/user/" + id);
    },
    
    deleteUser: function(id) {
      return axios.delete("/api/user/" + id);
    },
   
    saveUser: function(userData) {
      return axios.post("/api/user", userData);
    },
    saveWatchlist: function (userData){ 
      console.log("This is inside userDate ");
     console.log(userData)
      return axios.post('/api/watchlist', userData);
    },
    
    getSubs: function () {
      return axios.get('/api/subs')
    }
    
  };