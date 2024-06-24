const mongoose = require("mongoose");
require("dotenv").config();
//const mongoURL = process.env.MONGODB_URL_LOCAL ;
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
const db = mongoose.connection;
db.on("connected" , () => {
    console.log("connected to the mongoDB server");
})
db.on("error" , (err) => {
    console.log("error occured : " , err);
})
db.on("disconnected" , () => {
    console.log("disconnected from the mongoDB server");
})

//comment for testing purpose

module.exports = db;
