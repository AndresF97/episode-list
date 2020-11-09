const mysql = require("mysql")
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
 connection = mysql.createConnection({
    host:"yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user:"kvd1xovsdkjhju03",
    password:"bw8svpzgyl23jiz9",
    database:"wimpk9svtumnd7au"
   });
};

connection.connect(function(err){
    if(err){
        console.error("error connection: "+err.stack)
        return;
    }
    console.log("connected as id "+ connection.threadId)
})


module.exports = connection;