var express = require("express")
var router  = express.Router();
var shows = require("../model/shows.js")
//gets all data saved from the database
router.get("/",function(req,res){
    shows.selectAll(function(data){
        res.render("index",{wObject:data});
    });

});
//check the orm file to see how the data is being stored
router.post("/api/shows",function(req,res){
    shows.insertOne(req.body,function(result){
        console.log(result)
        res.json({id: result.insertId})
    });
});
//deletes from the db
router.delete("/api/deleteShow/:id",function(req,res){
    var id = "id = "+ req.params.id;
    shows.deleteOne(id, function(result){
        if(result.affectedRows == 0){
            return res.status(404).end()
        }else{
            res.status(200).end()
        }
    });
})

//updates info from to the database
router.put("/api/shows/:id",function(req,res){
    console.log(req.params.id)
    var condition = "id = " + req.params.id;
    show.upDateOne(req.body,function(res){
        console.log(res)
    })

        // function(results){
        //     if(results.changedRows === 0){
        //         return res.status(404).end();
        //     }
        //     res.status(200).end();
        // }
})
module.exports = router ;