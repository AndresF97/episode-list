$(function(){
   
    $.ajax("/",{
        type:"GET"
    }).then(
        function(data){
            console.log(data,"jgggluguyg");
        console.log("It works")
        // location.reload()
        });

});