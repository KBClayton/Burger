$(function() {
    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
      var eat = true;
  
      var eaten = {
        eaten: eat
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: true
      }).then(
        function() {
          console.log(id+" has been eaten "+eat);
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var nburger = {
        name: $("#ca").val().trim(),
        eaten: false
      };
      console.log("burger_page.js");
      console.log(nburger);

  
      $.ajax("/api/burgers", {
        type: "POST",
        data: nburger
      }).then(
        function() {
          console.log("added "+nburger.name);
          location.reload();
        }
      );
    });
  
    $(".endburger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("ended burger ", id);
          location.reload();
        }
      );
    });
  });
  