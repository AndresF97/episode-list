var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

var routes = require("./controllers/episode_controllers.js")





app.use("/public", express.static('./public/'));
app.use(express.urlencoded({extended : true}));

app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout:"main"}));
app.set("view engine","handlebars");


app.use(routes)


app.listen(PORT,function(){
    console.log("App now listening at localhost:" + PORT)
});