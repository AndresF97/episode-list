const mysql = require("mysql")
var connection
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
    host:"ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user:"kkkycim08khv8xda",
    password:"oipgyrfqetq0qvgl",
    database:"fv2m5mixpq1o7ldf"
})

connection.connect(function(err){
    if(err){
        console.error("error connection: "+err.stack)
        return;
    }
    console.log("connected as id "+ connection.threadId)
})


module.exports = connection;