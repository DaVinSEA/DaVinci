var 
    http = require("http"),
    fs = require("fs"),
    path = require("path");
    
var
    express = require("express");
    
var
    app = express();

var
    server = http.createServer(app);
    
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function (){
    var addr = server.address();
    console.log('listening at:', addr.address,':', addr.port);
});