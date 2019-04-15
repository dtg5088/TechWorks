var path = require("path");



// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../logIn.html"));
  });

  // cms route loads cms.html
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../register.html"));
  });


};