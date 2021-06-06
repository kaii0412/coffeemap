
$("path").mouseenter(function(e){
  var tagname=$(this).attr("data-name");
  vm.filter=tagname;

});


$(function() {
  $('chiayi_1.popper').hover(function() {
      $('#countryinfo_1').toggle();
  });
});

$(document).ready(function(){
  $('html,body').on("scroll", function() { 
      if ($('html,body').scrollTop() > 0) { 
          $(".icon-btn").fadeIn();
      }
      else {
          $(".icon-btn").fadeOut();
      }
  });
  $(".icon-btn").on("click", function() {
   $('html,body').animate({ scrollTop: 0 }, "slow");
  });
});