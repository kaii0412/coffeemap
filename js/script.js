
$("path").mouseenter(function(e){
  var tagname=$(this).attr("data-name");
  vm.filter=tagname;

});





$("#chiayi_1").mouseenter(function(e){
  $(".coffeeinfo_1").css("display","none");
})

$("#chiayi_1").mouseleave(function(e){
  $(".coffeeinfo_1").css("display","block");
})


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