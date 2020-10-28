 $(function(){ 
        $.ajax("/",{
            type:"GET"
        }).then(
            function(data){
        });
    //update date show if watched
    $(".watched").on("click",function(event){
        var id = $(this).data("id");
        console.log(id);
        $(this).data("watched",true);
        var watch = $(this).data("watched");
        console.log($(this).data("watched"));
        var newWatchedState = {
            watched: watch
        };
            $.ajax("/api/watched/" + id, {
                type: "PUT",
                data: newWatchedState
            }).then(
                function() {
                console.log("changed sleep to", newWatchedState);
                // Reload the page to get the updated list
                location.reload();
                }
            );
    })
    //adds a show into the the list
    $(".add-form").on("submit",function(event){
        event.preventDefault()
        console.log($("#mainPost").attr("data-post"))
        console.log($("#memo").val())
        var newShow = {
            show_name:  $("#showName").val().trim(),
            episode_name: $("#episodeName").val().trim(),
            memo:$("#memo").val().trim(),
            show_logo:$("#mainPost").attr("data-post")
        } 
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
    //delete a show
    $(".delete").on("click",function(event){
        event.preventDefault()
        console.log(this)
        console.log($(this).attr("data-delete"))
        var id = $(this).attr("data-delete")
        $.ajax("/api/deleteShow/"+id,{
            type:"DELETE"
        }).then(function(){
            console.log("deleted" + id);
            location.reload()
        }
        );
    })
});
//seacrhes for show
$("#searchShows").on("click",function(event){
    event.preventDefault()
    console.log($("#showName").val())
    var show = $("#showName").val()
    console.log(show)
     var queryUrl = "https://www.omdbapi.com/?t=" + show + "&plot=short&apikey=trilogy"
        console.log(show)
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            var image = $(`<img src=${response.Poster}>`);
            image.attr("data-post",`${response.Poster}`);
            image.attr('id',"mainPost")
            var imgHolder = $("#imgSearch");
            imgHolder.empty();
            imgHolder.append(image)
            if(response.Poster !== undefined){
                var form = $(".add-form")
                var textarea = $(`<textarea id="memo"class="m-4"></textarea>`)
                var addBtn = $(`<button class="btn btn-success">Add!</button>`)
                form.append(textarea)
                form.append(addBtn)
            }
    });
});
//update a show info
// $(".update").on("click",function(event){
//     event.preventDefault();
//      console.log(this)
//      //after this you should be redirected to another page with all the shows information
// })

