const express = require("express");
const  bodyParser = require("body-parser");
const gulp = require("gulp");
const nodemon = require("gulp-nodemon");

const app = express();
const port = 2000;
// body-parser is used to collect input from a form
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get("/bmi", (req, res)=>{
    res.sendFile(__dirname + "/BmiCal.html")
})


app.post("/", (req,res)=>{


   let num1 = Number(req.body.num1);
   let num2 = Number(req.body.num2);

   const result = num1 * num2 
    res.send("The result of the Calculation is: " + result)
})

app.post("/bmi", (req, res) =>{
  let  weight = Number(req.body.weight) 
  let  height = Number(req.body.height) 
    let pound = weight * 2.2;

//   let result = ((weight/height) * 2.2);

  let result = pound/height

  if(result <= 18.5){
     res.send("Your BMI is: " + result + " you are Under weight")
  }else if(result > 18.5 && result <=24.9){
    res.send("Your BMI is: " + result + " you are Normal weight")     
  }else if(result > 25 && result <= 29.9){
    res.send("Your BMI is: " + result + " you are Over weight")
  }else if(result > 30){
    res.send("Your BMI is: " + result + " you are Obesity")
  }else{
    res.send("Invalid input entered")

  }
 
})

app.listen(port, () =>{
    console.log("server as started at port 2000")
})






