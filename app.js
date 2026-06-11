
const express = require("express");
const app = express();

// const figlet = require('figlet');

// figlet("AIMKEY :)", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }

//   console.log(data);
// });

// middleware
app.use(function (req, res, next){
    console.log("hello from middleware");
    next(); // nest req ko middle se agy brhata ha q ke middle pe req ake jam hu jati ha tu isse push krne ka kaam next krta ha.
})

app.use(function (req, res, next){
    console.log("hello from middleware 2");
    next(); 
})

// Routes   
app.get("/", function (req, res) {
    res.send("hello");
});

app.get("/profile", function (req, res) {
    res.send("hello mustafa");
});

app.listen(3000);


// today we learn middleware, express and some basics