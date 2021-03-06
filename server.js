const express = require('express');
var path = require("path");
const app= express();

app.use(express.static(__dirname+'/dist/portfolio-website'));

app.listen(process.env.PORT||8080)

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/dist/portfolio-website/index.html'));
})

console.log('server intercepted')