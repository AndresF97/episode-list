var express = require("express")
var router  = express.Router();
var shows = require("../model/shows.js")

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

// router.put("/api/shows/:id",function(req,res){
//     console.log(req.params.id)
//     show.upDateOne(req.body,function(res){
//         console.log(res)
//     })

        // function(results){
        //     if(results.changedRows === 0){
        //         return res.status(404).end();
        //     }
        //     res.status(200).end();
        // }
//})
module.exports = router ;