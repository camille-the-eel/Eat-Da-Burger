//routing in static app.use
//this is where we do our jquery onclicks and also the ajax put/post to push the info into our api arrays

$(document).ready(function() {
    $(".eatburg").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = {
          devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(function () {
            console.log("Devoured: ID ", id);

            //Reload for updated list
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burg").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers/", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("New burger created");

            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});