//Dependencies
var db = require("../models");

module.exports = function(app) {

    app.get("/", function (req, res) {
        db.Burger.findAll().then(function(data) {
            console.log(data);
            var burgerObj = {
                Burger: data
            };
            res.render("index", burgerObj);
        });
    });

};