# Episode List
## Summary
- This is an application that will allow you to search for shows or movies, add the shows or movie that you've searched for, add the epsiode name and a note with a poster to a database; depending if you already watched the show, the information of that show will be render on the right side of the website. Episode-List was created using Express,MySql,Handlebars-express,Boostrap and hand made ORM.

## Technologies Used
- HTML : used to structure and create elements on the DOM.
- CSS : Used to style elements in the HTML/Handelbars pages.
- Bootstrap : Used as a grid system.
- Javascript : High level programing lanaguage.
- JQuery : Javascript library to simplify DOM traversal.
- Node.js : Allows user to run the server.
- MySQL : Open-source relational database managment.
- Express-Handlebars: Templating engine for web application.

## Demo 
- [Live website](https://rocky-chamber-81604.herokuapp.com/)
## Localhost Option
![Episode List](public/assets/img/EpisodeDemo.gif)
1. clone the code.
2. run your CLI 
3. Type "npm i"
4. Type "node server.js"
5. Enjoy!

## Code Snippet
- This code will makes SQL queries using javascript by using back tics we can hand the queries some of the information that was given in the API call. We can delete, update and create new information the MySQL database.
```javascript
var orm = {
    selectAll : function(whatTable,cb){        var queryStr = "SELECT * FROM ??;";
        connection.query(queryStr,[whatTable],function(err,results){
            if(err){
                throw err
            }
           cb(results);
       
        })
    },
    selectOne: function(whatTable,id,cb){
        var queryStr = `SELECT * FROM ${whatTable} WHERE ${id}`;
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
        connection.query("UPDATE episode SET episode_name = ?, memo = ? WHERE id = ?",[valOfEpisode,valOfMemo,valOfId],function(err,results){
            if(err){
               throw err
            }
            cb(results)

        })
    },
    updateWatched:function(table,watchedVal,id,cb){
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
```
## Auhtor
- [LinkedIn](linkedin.com/in/andres-felipe-jimenez-ferreira-b67a35192)
- [GitHub](https://github.com/AndresF97)
- [Portfolio](https://andresf97.github.io/PortfolioUpdate/public/index.html)