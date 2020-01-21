var orm = require("../config/orms.js");

var show  ={
    selectAll : function(cb){
        orm.selectAll("episode",function(res){
            return(res);
        });
    },
    insertOne : function(info,cb){
        orm.insertOne("episode",info,function(res){
            cb(res)
        });
    },
    upDateOne: function(col,val,cb){
        orm.updateOne("episode",col,val, function(res){
            cb(res)
        })
    }
};
console.log(show.selectAll())
module.exports = show;

