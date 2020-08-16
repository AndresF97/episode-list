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
        console.log(whatShow)
        console.log(whatEpisode)
        connection.query("INSERT INTO episode SET ?",{show_name:whatShow,episode_name:whatEpisode},(err,results)=>{
        if(err){
            console.error("There's an error in the insertFunction function")
            }
            //cb renders the resul
            cb(results)
        });  
    },
    updateOne:function(valOfShow,valOfEpisode,valOfId,cb){
        connection.query(`UPDATE episode SET show_name = ${valOfShow}, epsido_name = ${valOfEpisode} WHERE id =${valOfId}`,(err,results)=>{
            if(err){
                console.error("there's an error in upDate function")
            }
            cb(results)

        })


    }

};


module.exports = orm;