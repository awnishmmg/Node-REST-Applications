var env = require("dotenv").config();
var http = require("http");
var app = require("./app");
// const PORT = 3000; //we will use .env or environment varibles for accessing the code

const PORT = process.env.PORT || 3000; 
 
var server = http.createServer(app); // App.js Bind

// function(request,response){
//     response.write("This is simple HTTP Response But not api");
//     response.write("Hello world");
//     response.write("Hello world from nodeman");
//     response.end();
// }

server.listen(PORT,function(){
    console.log(`App Running under ${PORT}`);
})
