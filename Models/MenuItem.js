const mongoose = require("mongoose");
const MenuItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number ,
        required : true,
        default : 2
    },
    taste : {
        type : String , 
        enum : ["spicy" , "sweet" , "sour" , "salt"],
        required : true
    },
    isDrink : {
        type : Boolean,
        default : false
    },
    ingredients : {
        type : [String],
        default : []
    },
    num_Sales : {
        type : Number,
        required : true
    }
})

const MenuItem = mongoose.model("MenuItem" , MenuItemSchema);
module.exports = MenuItem;