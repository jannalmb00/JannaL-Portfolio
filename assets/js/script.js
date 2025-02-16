$(document).ready(function(){
  function toggleSection(sectionID, isShow){
      if(isShow){
          $(sectionID).addClass("active moveToBottomEasing").fadeIn(200);
          $(".section").not(sectionID).removeClass("active").fadeOut(200);
      }else{
        $(sectionID).addClass("active").fadeIn(500);
      }
  }

  // Click event for the div   
  $("#welcome-btn").on("click", function(){
    toggleSection("#section1", true);
  })
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