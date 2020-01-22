var connection = require("./connection.js");

var orm = {
    selectAll : function(whatTable,cb){
       
        var queryStr = "SELECT * FROM ??";
        connection.query(queryStr,[whatTable],function(err,results){
            if(err){
                throw err
            }
           cb(results);
       
        })
    },
    insertOne:function(whatShow,whatEpisode,cb){
        var queryS = "INSERT INTO episode (show_name,episode_name) VAlUES ??"
        console.log(whatShow)
        console.log(whatEpisode)
        connection.query("INSERT INTO episode SET ?",{show_name:whatShow,episode_name:whatEpisode},(err,results)=>{
        if(err){
            console.error("There's an error in the insertFunction function")
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


module.exports = orm;