var orm = require("../config/orms.js");

var show  ={
    selectAll: function(placeHolder){
        orm.selectAll("episode", function(res){
            placeHolder(res)
        });
    },
    selectOne:function(id,cb){
        orm.selectOne("episode",id,function(res){
            cb(res)
        })
    },
    insertOne : function(info,placeHolder){
        orm.insertOne(info.show_name,info.episode_name,info.memo,info.show_logo,info.show_plot,function(res){
            placeHolder(res)
        });
    },
    updateWatched: function(info,id,cb){
        orm.updateWatched("episode",info.watched,id, function(res){
            cb(res)
        })
    },
    updateOne: function(info,id,cb){
        orm.updateOne(info.episode_name,info.memo,id, function(res){
            cb(res)
        })
    },
    deleteOne : function(id,cb){
        orm.deleteOne("episode",id, function(res){
            cb(res)
        });
    }
};

module.exports = show;

