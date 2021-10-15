// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "New Zealand") {
         $("#feedback").css("color","black");
         $("#feedback").html("Yes, there are more resident penguins in NZ than anywhere else in the world");
      }
  $("#feedback").css("backgroundColor","yellow");
$('#myModal').modal("show");
   });
}); //end main jQuery function
