// JavaScript Document// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "USA") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, USA is the third one");
      }

      if ($(this).attr("id") == "China") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, China has the largest population: 1,343,239,923");
      }

      if ($(this).attr("id") == "Brazil") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Brazil not the largest");
      }

  $("#feedback").css("backgroundColor","yellow");
$('#myModal').modal("show");

   });
}); //end main jQuery function
