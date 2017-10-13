$(function() {
  
  $("#toggle").click(function(){
    $("#menu").slideToggle().css('display', 'block');
    return false;
  });
  $(window).resize(function(){
    var win = $(window).width();
    var p = 480;
    if(win > p){
      $("#menu").show().css('display', 'flex');
    } else {
      $("#menu").hide();
    }
  });

  $('.cards').imagesLoaded( function() {
    $('.cards').masonry({
      itemSelector: '.work-card',
      isAnimated: true
    });
  });
  
  $(function(){
    $('.work-card, .info-sect ').css("opacity","0");
    $('.work-card, .info-sect ').css("margin-top","100px");
    $(window).scroll(function (){
      $(".work-card, .info-sect ").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight){
          $(this).css("opacity","1" );
          $(this).css("margin-top","20px" );
        } else {
          $(this).css("opacity","0" );
          $(this).css("margin-top","100px" );
        }
      });
      var ii = 0;
      $(".nav-index ").each(function(){
        ii++;
        var imgPos = $(this).offset().top;
        var imgHeight = $(this).height();
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= imgPos && scroll <= imgPos + imgHeight ){
          $( "nav ul li:nth-child(" + ii + ") .nav-item" ).addClass('bottom-bordered');       
        } else {
          $( "nav ul li:nth-child(" + ii + ") .nav-item" ).removeClass('bottom-bordered');       
        }
      });
    });
  });
});
