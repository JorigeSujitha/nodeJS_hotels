const express = require("express");
const router = express.Router();
const MenuItemRoutes = require("./../Models/MenuItem");
const MenuItem = require("./../Models/MenuItem");

//1.POST
router.post("/" , async (req , res) => {
    try{
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log("data saved");
    res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error"});
    }
})

//2.GET
router.get("/" , async (req , res) => {
    try{
        const response = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error"});
    }
})

//3.PARAMETRISED GET
router.get("/:taste" , async (req , res) => {
    try{
        const taste = req.params.body;
        if(taste == "sweet" || taste == "spicy" || taste == "sour" || taste == "salt"){
            const response = await MenuItem.find({taste : taste});
            console.log("response fetched");
            res.status(200).json(response);
        }else{
            res.status(404).json({error : "Item Not Found"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error"});
    }
})

//4.Update
router.put("/:id" , async (req , res) => {
    try{
        const itemId = req.params.id;
        const updateMenuData = req.body;
        const response = await MenuItem.findByIdAndUpdate(itemId , updateMenuData , {
        new : true ,
        runValidators : true
    })
    console.log(" Menu data updated");
    res.status(200).json(response);
    if(!response){
        res.status(404).json({error : "Person Not Found"});
    }
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internl Server Error"});
    }
})

//5.DELETE
router.delete("/:id" , async (req , res) => {
    try{
        const itemId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(itemId);
    console.log("item data deleted");
    res.status(200).json(response);
    if(!response){
        res.status(404).json({error : "Person Not Found"});
    }
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error"})
    }
})

module.exports = router;