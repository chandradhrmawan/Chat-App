const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,"/../public");
const port  = process.env.PORT || 3000
var app = express();

app.use(express.static(publicPath));

app.listen(3000,()=>{
	console.log('Server is up on port ${port} ');
})

/*console.log(__dirname+"/../public");
console.log(path.join(__dirname,"/../public"));*/