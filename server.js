const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.get("/" , (req , res) => {
    console.log("Welcome to our hotel , here is the menu card!");
})

const personRoutes = require("./Routes/personRoutes");
app.use("/Person" , personRoutes)

const MenuItemRoutes = require("./Routes/MenuItemsRoutes");
app.use("/menu" , MenuItemRoutes);

app.listen(PORT, () => {
    console.log("server is listening on port 3000");
})


