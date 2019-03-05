//Dependencies
var db = require("../models");

module.exports = function(app) {

    // select all
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll().then(function(result) {
            console.log(result);
            res.render("index", { Burger: result });
        });
    });

    // insert one
    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(data) {
            res.json({ newBurger: data });
        });
    });

    // update one
    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update(
            {
            burger_name: req.body.burger_name
            }, 
            {
            where: {id: req.params.id}
            }
        ).then(function(data) {
            res.json(data);
        });
    });

};