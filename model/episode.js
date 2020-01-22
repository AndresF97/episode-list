var orm = require("../config/orms.js");

var show  ={
    selectAll: function(placeHolder){
        orm.selectAll("episode", function(res){
            placeHolder(res)
        });
    },
    insertOne : function(info,placeHolder){
        orm.insertOne(info.show_name,info.episode_name,function(res){
            
            placeHolder(res)
        });
    },
    upDateOne: function(col,val,cb){
        orm.updateOne("episode",col,val, function(res){
            cb(res)
        })
    }
};

module.exports = show;

