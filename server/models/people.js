const mongoose = require("mongoose");

let PeopleSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength:2}
})
mongoose.model("People", PeopleSchema);
const Quote = mongoose.model("People");
