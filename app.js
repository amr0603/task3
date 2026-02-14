require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
const mongoose = require("mongoose");


const PORT = process.env.PORT||3004; 

const Task3 = require("./models/Task3");
const book = require("./models/book");

async function connectionDB() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("conction scssful DB");
    } catch (error) {
         console.log("conction falid", error.message) 
    }
    
};
 connectionDB();
 

 app.post("./Task3",async(req ,res)=>{

try {
    const { name}=req.body;

if(! name){
return res.status(400).json({msg:"not filed"})
}
const task3=await Task2.create({ name});
res.status(201).json(); 

} catch (error) {
    console.log("error",error.message)
}
 })
 //
 
 app.post("./book",async(req ,res)=>{

try {
    const {  title, author,task}=req.body;

if(!title|| ! author||!task){
return res.status(400).json({msg:"not filed"})
}
const task3=await Task2.create({ title, author,task});
res.status(201).json(); 

} catch (error) {
    console.log("error",error.message)
}
 })

app.get('/api/book', async (req, res) => {
  try {
    const books = await Book.find().populate('task3', 'name bio'); 
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});





app.listen(PORT,()=>{
    console.log("srver rinning un port: ", PORT)
});