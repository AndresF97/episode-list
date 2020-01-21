var connection = require("./connection.js");

var orm = {
    selectAll : function(whatTable){
        var queryS = "SELECT * FROM ??";
        connection.query(queryS,[whatTable],function(err,results){
            if(err) throw err
            return(results)
        })
    },
    insertOne:function(whatTable,whatInfo,cb){
        var queryS = "INSERT INTO ?? SET ?"
        connection.query(queryS,[whatTable,whatInfo],(err,results)=>{
        if(err){
            console.error("There's an error in the slectWhere function")
            }
            cb(results)
        });  
    },
    updateOne:function(whatTable,whatCol,valOf,cb){
        var queryS ="UPDATE ?? SET ?? WHERE ?? =?"
        connection.query(queryS,[whatTable,whatCol,valOf],(err,results)=>{
            if(err){
                console.error("there's an error in upDate function")
            }
            cb(results)

        })


    }

};
console.log(orm.selectAll("episode"))
module.exports = orm;