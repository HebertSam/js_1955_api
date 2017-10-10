const mongoose = require("mongoose");
const People = mongoose.model("People");


module.exports = {
    show: function(req, res){
        People.find({}, function(err, people){
            if(err){
                return console.log("something went wrong")
            }
            res.json(people);
        })
    },
    add: function(req, res){
        People.create({name:req.params.name}, function(err){
            if(err){
                return console.log("something went wrong")
            }
            res.redirect("/")
        })
    },
    destroy: function(req, res){
        People.remove({name:req.params.name}, function(err){
            if(err){
                return console.log("something went wrong")
            }
            res.redirect("/")
        })
    },
    showName: function(req, res){
        People.findOne({name:req.params.name}, function(err, people){
            if(err){
                return console.log("something went wrong")
            }
            res.json(people)
        })
    }
}