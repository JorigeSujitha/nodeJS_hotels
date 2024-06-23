const express = require("express");
const router = express.Router();
const personRoutes = require("./../Models/Person");
const Person = require("./../Models/Person");

//POST
router.post("/" , async (req , res) => {
    try{
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
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
        const response = await Person.find();
        console.log("data fetched");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error"});
    }
})

//3.Parametrised call GET
router.get("/:workType" , async (req , res) => {
    try{
        const workType = req.params.workType;
    if(workType == "chef" || workType == "manager" || workType == "waiter"){
        const response = await Person.find({work : workType});
        console.log("response fetched");
        res.status(200).json(response);
    }else{
        res.status(404).json({error : "Person Not Found"});
    }
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error"});
    }
});

//4.Update
router.put("/:id" , async (req , res) => {
    try{
       const personId = req.params.id;
       const updatedPersonData = req.body;
       const response = await Person.findByIdAndUpdate(personId , updatedPersonData , {
        new : true,
        runValidators : true
       })
       console.log("data updated");
       res.status(200).json(response);
       if(!response){
        res.status(404).json({error : "Person Not Found"});
       }
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error"});
    }
})

//5.DELETE
router.delete("/:id" , async (req , res) => {
    try{
    const personId = re.params.id;
    const response = await Person.findByIdAndDelete(personId);
    console.log("data deleted");
    res.status(200).json(response);
    if(!response){
        res.status(404).json({error : "Internal Server Error"});
    }
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error"});
    }
})

module.exports = router;