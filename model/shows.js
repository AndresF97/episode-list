var orm = require("../config/orms.js");

var show  ={
    selectAll: function(placeHolder){
        orm.selectAll("episode", function(res){
            placeHolder(res)
        });
    },
    insertOne : function(info,placeHolder){
        orm.insertOne(info.show_name,info.episode_name,info.memo,info.show_logo,function(res){
            placeHolder(res)
        });
    },
    upDateOne: function(info,id,cb){
        orm.updateOne("episode",info,id, function(res){
            cb(res)
        })
    }
};

module.exports = show;

