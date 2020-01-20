var connection = require("./connection.js");

var orm = {
    selectAll : function(whatTable){
        var queryS = "SELECT * FROM ??";
        connection.query(queryS,[whatTable],(err,results =>{
            if(err){
                console.error("Sorry there's an error in the selectAll function")
            }
            console.log(results)
        }))
    },
    insertOne:function(whatTable,whatInfo){
        var queryS = "INSERT INTO ?? SET ?"
        connection.query(queryS,[whatTable,whatInfo],(err,results)=>{
        if(err){
            console.error("There's an error in the slectWhere function")
            }
            console.log(results)
        });  
    },
    updateOne:function(whatTable,whatCol,valOf){
        var queryS ="UPDATE ?? SET ?? WHERE ?? =?"
        connection.query(queryS,[whatTable,whatCol,valOf],(err,results)=>{
            if(err){
                console.error("there's an error in upDate function")
            }
            console.log(results)

        })


    }

};

module.exports = orm;