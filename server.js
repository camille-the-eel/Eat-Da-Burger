//Dependencies
var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

var app = express();
const PORT = process.env.PORT || 8080;

//Middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Within handlebars, sets the default layout within views folder to main.handlebars file
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//Sets Express to interpret the view engine as handlebars
app.set("view engine", "handlebars");

//serving the static files to express -- express creates the routes for these files
//static files = front end files that client downloads from server 
app.use(express.static("public"));


//we are requiring the information from this file and also passing express into the function within the api-routes file
var apiRoutesFunction = require("./routes/api-routes");
apiRoutesFunction(app);
//can also be written as: require("./routes/api-routes.js")(app);
require("./routes/html-routes")(app);


//this requires all the model files so they can be synced within this one line of code (as opposed to individually in each file) 
//this holds all of the sequelize mapping to the tables in our mysql database
var db = require("./models");

//syncing the models, then starting express
db.sequelize.sync({force: true}).then(function () {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
})