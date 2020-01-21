var orm = require("../config/orms.js");

var show  ={
    selectAll: function(placeHolder){
        orm.selectAll("episode", function(res){
            placeHolder(res)
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

module.exports = show;

