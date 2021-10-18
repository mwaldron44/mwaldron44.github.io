// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "New Zealand") {
         $("#feedback").css("color","blue");
         $("#feedback").html("Yes, NZ has on of the most diverse penguin populations in the world.");
      }

  $("#feedback").css("backgroundColor","yellow");

   });
}); //end main jQuery function
