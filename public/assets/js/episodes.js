 $(function(){ 
        $.ajax("/",{
            type:"GET"
        }).then(
            function(data){
            });


        $(".add-form").on("submit",function(event){
        event.preventDefault()
        var newShow = {
            show_name:  $("#showName").val().trim(),
            episode_name: $("#episodeName").val().trim()
        } 
        $.ajax("/api/shows",{
            type:"POST",
            data:newShow
        }).then(
            function(){
                console.log("added new show");
                //location.reload()
            }
        )
    })
    $(".watched").on("click",function(event){
        console.log(this)
        var id = $(this).data("id")
        $.ajax("/api/shows:" + id,{
            type:"PUT"
        }).then(function(){
            console.log("It worked")
            //location.reload()
        })
    })
});
$("#addShows").on("click",function(event){
    event.preventDefault()
    console.log($("#episodeName").val())
    var show = $("#episodeName").val()
    console.log(show)
     var queryUrl = "https://www.omdbapi.com/?t=" + show + "&plot=short&apikey=trilogy"
        console.log(show)
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response);
    });
})