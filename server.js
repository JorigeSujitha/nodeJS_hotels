const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/" , (req , res) => {
    console.log("Welcome to our hotel , here is the menu card!");
})

const personRoutes = require("./Routes/personRoutes");
app.use("/Person" , personRoutes)

const MenuItemRoutes = require("./Routes/MenuItemsRoutes");
app.use("/menu" , MenuItemRoutes);

app.listen(3000 , () => {
    console.log("server is listening on port 3000");
})


