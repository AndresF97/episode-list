var express = require("express")
var router  = express.Router();
var shows = require("../model/shows.js");
const show = require("../model/shows.js");
//gets all data saved from the database
//gets single page with one with a single Mysql 
router.get("/",function(req,res){
    shows.selectAll(function(data){
        res.render("index",{wObject:data});
    });

}); 
router.get("/:id",function(req,res){
    var id = "id = " +req.params.id;
    shows.selectOne(id,function(data){
        console.log(data)
        res.render("single",data[0])
    });
});
//check the orm file to see how the data is being stored
router.post("/api/shows",function(req,res){
    shows.insertOne(req.body,function(result){
        console.log(result)
        res.json({id: result.insertId})
    });
});
//updates info from to the database
router.put("/api/watched/:id",function(req,res){
    var id = "id = " + req.params.id;
    console.log(req.params.id)
    shows.updateWatched({
        watched:req.body.watched},id, function(result){
            if(result.changedRows === 0){
                return res.status(404).end()
            }else{
                res.status(200).end();
            }
        });
    })
//deletes from the db
router.delete("/api/deleteShow/:id",function(req,res){
    var id = "id = "+ req.params.id;
    shows.deleteOne(id, function(result){
        if(result.affectedRows == 0){
            return res.status(404).end()
        }else{
            res.status(200).end()
        }
    })
})
//router.put("/api/updateShowInfo/:id",function(req,res){
    // var id = req.params.id;
    // console.log(req.params.id)
    // show.updateWatched({
    //     watched:req.body.watch},id, function(result){
    //         if(result.changedRows === 0){
    //             return res.status(404)
    //         }else{
    //             res.status(200)
    //         }
    //     });
//});
module.exports = router ;