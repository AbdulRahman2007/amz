const express = require("express");
const body = require("body-parser");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let newItems = [];

//making app use body-parser package
app.use(bodyParser.urlencoded({extended:true}))

//setting express to veiw ejs file
app.set('view engine', 'ejs');




//sending response to client
app.get("/", function(req,res){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var day = today.toLocaleDateString("en-US", options);
    res.render("index", {KindOfDay: day, NewListItems : newItems});  //index is the ejs file that renders on server 3000.
});


//making post req so, user can add items.
app.post("/", function(req,res){
   let newItem =  req.body.newItem;
   newItems.push(newItem);
    res.redirect("/" );
});



// making app listen to server.
app.listen(port,function(){
    console.log("Server is listening on port 3000");
});