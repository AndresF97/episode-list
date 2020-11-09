var connection = require("./connection.js");

var orm = {
    selectAll : function(whatTable,cb){
       
        var queryStr = "SELECT * FROM ??;";
        connection.query(queryStr,[whatTable],function(err,results){
            if(err){
                throw err
            }
           cb(results);
       
        })
    },
    selectOne: function(whatTable,id,cb){
        var queryStr = `SELECT * FROM ${whatTable} WHERE ${id}`;
        console.log(queryStr+" this")
        connection.query(`SELECT * FROM ${whatTable} WHERE ${id};`,(err,results)=>{
            if(err){
                throw err
            }
            cb(results);
        })
    },
    insertOne:function(whatShow,whatEpisode,note,whatPoster,whatPlot,cb){
        connection.query("INSERT INTO episode SET ?",{show_name:whatShow,episode_name:whatEpisode,memo:note,show_logo:whatPoster,show_plot:whatPlot},function(err,result){
        if(err){
            throw err
            }
            //cb renders the results
            cb(result)
        });  
    },
    updateOne:function(valOfEpisode,valOfMemo,valOfId,cb){
        console.log(`UPDATE episode SET episode_name = ${valOfEpisode}, memo = ${valOfMemo}, WHERE id = ${valOfId}`)
        connection.query("UPDATE episode SET episode_name = ?, memo = ? WHERE id = ?",[valOfEpisode,valOfMemo,valOfId],function(err,results){
            if(err){
               throw err
            }
            cb(results)

        })
    },
    updateWatched:function(table,watchedVal,id,cb){
        console.log(`UPDATE ${table} SET watched = ${watchedVal} WHERE ${id}`)
        connection.query(`UPDATE ${table} SET watched = ${watchedVal} WHERE ${id}`,(err,results)=>{
            if(err){
                throw err
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