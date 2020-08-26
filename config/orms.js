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
    insertOne:function(whatShow,whatEpisode,note,cb){
        console.log(whatShow)
        console.log(whatEpisode)
        console.log(note)
        connection.query("INSERT INTO episode SET ?",{show_name:whatShow,episode_name:whatEpisode,memo:note},function(err,results){
        if(err){
            console.error("There's an error in the insertFunction function")
            }
            //cb renders the results
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