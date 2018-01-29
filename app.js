const express = require("express");
const app = express();


app.get("/parser", function(req, res, next){
	var Obj = {
	"ipaddress": req.connection.remoteAddress ,
	"language": req.headers['accept-language'],
	"software": process.platform
}
	res.end(JSON.stringify(Obj));
});

app.listen(3000||process.env.port);
console.log("Now listening to requests.");
