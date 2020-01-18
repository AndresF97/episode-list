const mysql = require("mysql")

var connection = mysql.createConnection({
    host:"local",
    port: 3306,
    user:"root",
    password:"password",
    database:"episode_db"
})

connection.connect((err)=>{
    if(err){
        console.err("err conneciton "+resizeBy.stack)
        return;
    }
    console.log("conected as id "+ connection.threadId)
})


module.exports = connection;