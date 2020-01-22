var express = require("express")
var router  = express.Router();
var shows = require("../model/episode.js")

router.get("/",function(req,res){
    shows.selectAll(function(data){
        res.render("index",{wObject:data});
    });

});

router.post("/api/shows",function(req,res){
    shows.insertOne(["",""],[req.body.name, req.body.comedy],function(result){
        res.json({id: result.inserId})
    });
});

// router.put("/api/shows/:id",function(req,res){
//     console.log(req.params.id)
//     var con  = "id = " +  req.params.id;
//     console.log("condition",con)
//     shows.upDateOne(
//         {
//             comedy : req.body.comedy
//         },
//         con,
//         function(results){
//             if(results.changedRows === 0){
//                 return res.status(404).end();
//             }
//             res.status(200).end();
//         }
//     );
// })
module.exports = router ;