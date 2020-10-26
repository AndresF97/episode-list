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
    insertOne:function(whatShow,whatEpisode,note,whatPoster,cb){
        console.log(whatShow)
        console.log(whatEpisode)
        console.log(note)
        console.log(whatPoster)
        connection.query("INSERT INTO episode SET ?",{show_name:whatShow,episode_name:whatEpisode,memo:note,show_logo:whatPoster},function(err,result){
        if(err){
            throw err
            }
            //cb renders the results
            cb(result)
        });  
    },
    updateOne:function(valOfShow,valOfEpisode,valOfId,cb){
        connection.query(`UPDATE episode SET show_name = ${valOfShow}, epsido_name = ${valOfEpisode} WHERE id =${valOfId}`,(err,results)=>{
            if(err){
                console.error("there's an error in upDate function")
            }
            cb(results)

        })


    },
    deleteOne:function(table,id,cb){
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += id;
        connection.query(queryString, function(err ,result){
            if(err){
                throw err
            }
            cb(result)
        });
    }

};


module.exports = orm;