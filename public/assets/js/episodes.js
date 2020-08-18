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
$("#searchShows").on("click",function(event){
    event.preventDefault()
    console.log($("#showName").val())
    var show = $("#showName").val()
    var episodde = $("#episodeName").val()
    console.log(show)
     var queryUrl = "https://www.omdbapi.com/?t=" + show + "&plot=short&apikey=trilogy"
        console.log(show)
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var image = $(`<img src=${response.Poster}>`);
            var imgHolder = $("#imgSearch");
            imgHolder.empty();
            console.log(response.Poster)
            imgHolder.append(image)
            if(response.Poster !== undefined){
                var form = $(".add-form")
                var textarea = $(`<textarea class="m-4"></textarea>`)
                var addBtn = $(`<button class="btn btn-success">Add!</button>`)
                form.append(textarea)
                form.append(addBtn)
            }
    });
})