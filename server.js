require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT;
//const fruits = require('./models/fruits.js'); 

app.get("/greeting", (req, res) => {
    res.send("Hello, stranger");
});

app.get("/greeting/:name", (req, res) => {
    res.send("What's up " + req.params.name + " It's so great to see you!");
});
app.get("/tip/:total/:tipPercentage/", (req, res) => {
   // res.send("<h2>Tip Calculator express application created.</h2>");
    res.send("The tipPercentage is " + req.params.tipPercentage + " % and The total is " + req.params.total + " .");  

});
//Magic bill
const magicArray = ["It is certain", "It is decidedly so",
 "Without a doubt", "Yes definitely","You may rely on it",
  "As I see it yes", "Most likely", "Outlook good","Yes", 
  "Signs point to yes", "Reply hazy try again", "Ask again later",
  "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
  "Don't count on it", "My reply is no", "My sources say no","Outlook not so good",
   "Very doubtful"];
   app.get('/magic/:Will%20I%20Be%20A%20Millionaire', (req, res) => {
    let htmlResponse = "";
    hello = 'Will%20I%20Be%20A%20Millionaire';
for(let i = 0; i < magicArray.length; i++) {
   // res.send("<h1>" + req.params.magicArray[i] + "</h1>");
    res.send(magicArray[i][req.params.hello]);
}
   })








// server running
app.listen(port, () => {
    console.log("The server is running on port " + port);
})