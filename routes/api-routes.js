//Dependencies
var db = require("../models");

module.exports = function(app) {

    //SELECT ALL BURGERS
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll().then(function(data) {
            res.json(data);
        });
    });

    //CREATE A BURGER
    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(data) {
            res.json({ newBurger: data });
        });
    });

    //UPDATE A BURGER BOOLEAN STATUS
    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update(
            {
            devoured: req.body.devoured
            }, 
            {
            where: {id: req.params.id}
            }
        ).then(function(data) {
            res.json(data);
        });
    });

    //UPDATE A BURGER NAME
    // app.put("/api/burgers/:id", function (req, res) {
    //     db.Burger.update(
    //         {
    //         burger_name: req.body.burger_name
    //         }, 
    //         {
    //         where: {id: req.params.id}
    //         }
    //     ).then(function(data) {
    //         res.json(data);
    //     });
    // });
};