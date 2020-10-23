 $(function(){ 
        $.ajax("/",{
            type:"GET"
        }).then(
            function(data){
            });


        $(".add-form").on("submit",function(event){
        event.preventDefault()
        console.log($("#mainPost").attr("data-post"))
        console.log($("#memo").val())
        var newShow = {
            show_name:  $("#showName").val().trim(),
            episode_name: $("#episodeName").val().trim(),
            memo:$("#memo").val().trim(),
            show_poster:$("#mainPost").attr("data-post")
        } 
        $.ajax("/api/shows",{
            type:"POST",
            data:newShow
        }).then(
            function(){
                console.log("added new show");
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
})
//delete a show
$(".delete").on("click",function(event){
    event.preventDefault()
    console.log($(this).attr("data-delete"))
    var id = $(this).attr("data-delete")
})