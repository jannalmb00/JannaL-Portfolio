$(document).ready(function(){
  function toggleSection(sectionID, isShow){
      if(isShow){
          $(sectionID).addClass("active").fadeIn(500);
          $(".section").not(sectionID).removeClass("active").fadeOut(300);
      }else{
        $(sectionID).addClass("active").fadeIn(500);
      }
  }

  // Click event for the div    
  $(".home-btn").on("click", function(){
    toggleSection("#section2", true);
  });
  $("#project-btn").on("click", function(){
    toggleSection("#section3", true);
  });
  $("#skills-btn").on("click", function(){
    toggleSection("#section4", true);
  });
  $("#update-btn").on("click", function(){
    toggleSection("#section5", true);
  });
});
