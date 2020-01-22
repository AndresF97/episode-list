 $(function(){ 
        $.ajax("/",{
            type:"GET"
        }).then(
            function(data){
            });


        $(".add-form").on("submit",function(event){
            console.log("helo")
        event.preventDefault()
        var newShow = {
            show_name:  $("#showName").val().trim(),
            episode_name: $("#episodeName").val().trim()
        } 
        console.log(newShow)
        $.ajax("/api/shows",{
            type:"POST",
            data:newShow
        }).then(
            function(){
                console.log("added new show");
                location.reload()
            }
        )
    })
});