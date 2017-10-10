const mongoose = require("mongoose");
const People = mongoose.model("People");
const people = require("../controllers/people.js");

module.exports = function(app){
    app.get("/", function(req, res){
        people.show(req, res)
    })
    app.get("/new/:name", function(req, res){
        people.add(req, res)
    })
    app.get("/remove/:name", function(req, res){
        people.destroy(req, res)
    })
    app.get("/:name", function(req, res){
        people.showName(req, res)
    })
}
