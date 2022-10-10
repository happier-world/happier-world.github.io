// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "shoulders_arms") {
         $("#feedback").html('<img src="img/shoulders-upper-arms.png"/>');
      }

      if ($(this).attr("id") == "back") {
         $("#feedback").html('<img src="img/back.png"/>');
      }

      if ($(this).attr("id") == "torso") {
         $("#feedback").html('<img src="img/torso.png"/>');
      }
      if ($(this).attr("id") == "hips") {
         $("#feedback").html('<img src="img/hips.png"/>');
      }

      if ($(this).attr("id") == "outer_thigh") {
         $("#feedback").html('<img src="img/outer-thigh.png"/>');
      }

      if ($(this).attr("id") == "inner_thigh") {
         $("#feedback").html('<img src="img/inner-thigh.png"/>');
      }
      if ($(this).attr("id") == "quads") {
         $("#feedback").css("align","center");
         $("#feedback").html('<img src="img/quads.png"/>');
      }

      if ($(this).attr("id") == "hams") {
         $("#feedback").html('<img src="img/hamstrings.png"/>');
      }

      if ($(this).attr("id") == "calves") {
         $("#feedback").html('<img src="img/calves.png"/>');
      }

  $("#feedback").css("backgroundColor","white");
	   $('#myModal').modal("show");
   });
}); //end main jQuery function
