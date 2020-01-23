# episode-list
A list that you can keep track of your episode and reviews
- This app will allow you to add notes straight from the website and to a server that will push the information to json file called db. 
## Site Picture


## Technologies Used
- HTML - used to create elements on the DOM
- Bootstrap - Used to create cosmitics of the website and Media inquries
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Express - An npm extension to set up a local host and manipulate the information.

## Summary 
- This App will allow you to take notes.
## Setup
1. None 
## Code Snippet
```javascript
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
                location.reload()
            }
        )
    })
```
- This code will connects the paths to the router to get/pots/delete information.
[LinkedIn](linkedin.com/in/andres-felipe-jimenez-ferreira-b67a35192)
[GitHub](https://github.com/AndresF97)
