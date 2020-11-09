const mysql = require("mysql")
var connection;
 connection = mysql.createConnection({
    host:"tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user:"kz58mvmdqrocwnwe",
    password:"p0z8wes0lxcmjvrm",
    database:"aftc4vwmsvelpq19"
   });

connection.connect(function(err){
    if(err){
        console.error("error connection: "+err.stack)
        return;
    }
    console.log("connected as id "+ connection.threadId)
})


module.exports = connection;