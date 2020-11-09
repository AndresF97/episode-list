const mysql = require("mysql")
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
 connection = mysql.createConnection({
    host:"y06qcehxdtkegbeb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user:"kzgvrvjsjq0tzylc",
    password:"egcbk0kdc2rqdx07",
    database:"t25l2274xsibo9or"
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