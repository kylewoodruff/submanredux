db.User.create({})
  .then(function(dbUser) {
    console.log(dbUser);
  })
  .catch(function(err) {
    console.log(err.message);
  });

app.get("/Watchlist", function(req, res) {
  
  db.Watchlist.find({})
    .then(function(dbWatchlist) {
      
      res.json(dbWatchlist);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Route for retrieving all Users from the db
app.get("/user", function(req, res) {
  // Find all Users
  db.User.find({})
    .then(function(dbUser) {
      
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json(err);
    });
});


app.post("/submit", function(req, res) {
  
  db.Note.create(req.body)
    .then(function(dbWatchlist) {
     
      return db.User.findOneAndUpdate({}, { $push: { notes: dbNWatchlist._id } }, { new: true });
    })
    .then(function(dbUser) {
      
      res.json(dbUser);
    })
    .catch(function(err) {
     
      res.json(err);
    });
});

app.get("/populateduser", function(req, res) {
  
  db.User.find({})
    .populate("Watchlist")
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
     
      res.json(err);
    });
});