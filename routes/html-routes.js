// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");



// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../logIn.html"));
  });

  // cms route loads cms.html
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../dashboard.html"));
  });

  // blog route loads blog.html
  app.get("/training", function(req, res) {
    res.sendFile(path.join(__dirname, "../training.html"));
  });

  // authors route loads author-manager.html
  app.get("/examPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../examPage.html"));
  });

  // authors route loads author-manager.html
  app.get("/modulePage", function(req, res) {
    res.sendFile(path.join(__dirname, "../modulePage.html"));
  });

};
