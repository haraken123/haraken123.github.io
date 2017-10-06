$(function() {
  /*
  var scrollValue // 現在のY座標
  var indexOffsets =[]; // 各インデックスエリアのY座標
  var index = 0; // 現在表示しているエリアのインデックス
  $(window).on('scroll',function(){
    scrollValue = $(window).scrollTop();
    console.log( scrollValue );
    for(var i=1; i<indexOffsets.length; i++) {
      console.log("offset[" + i + "]:" + indexOffsets[i] );
      if( scrollValue >= indexOffsets[indexOffsets.length-1] ) {
        index = (indexOffsets.length-1);
        break;
      }else if( scrollValue < indexOffsets[i] ){
        index = i - 1;
        break;
      }
    }
    console.log("index:" +index );
    var tempIndex = 0;
    $('.nav-item').each(function(){
      if( tempIndex == index ) {
        $(this).addClass('bottom-bordered');       
      }else{
        $(this).removeClass('bottom-bordered');       
      }
      tempIndex++;
    });

  });
   
  // eachを利用して「nav-index」クラスの要素それぞれに処理を行なう
  $('.nav-index').each(function(){
    
    indexOffsets.push( $(this).offset().top ); // それぞれのオフセットを配列に入れる
    console.log("offsets:" +  $(this).offset().top );
    /*
    // スクロール量と要素の位置からマージンを引いた値を比較
    if( scroll_top > offset_top - top_margin ){
      // スクロール量が所定の位置を越えた時にfadeinクラスを付与
        $(this).addClass('fadein');       
    }else{
      // スクロール量が所定の位置を越えていない場合はfadeinクラスを外す
        $(this).removeClass('fadein');       
    }*/
//  });
  
  
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

  $('#cards').imagesLoaded( function() {
    $('#cards').masonry({
      itemSelector: '.work-card',
      isAnimated: true
    });
  });
  
  $(function(){
    $('.work-card, .info-sect ').css("opacity","0");
    $(window).scroll(function (){
      $(".work-card, .info-sect ").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight){
          $(this).css("opacity","1" );
          $(this).css("margin-top","1.5%" );
        } else {
          $(this).css("opacity","0" );
          $(this).css("margin-top","5%" );
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
          console.log(ii+" added");
          console.log(scroll+"  scroll");
          console.log(imgPos+"  imgPos");
          console.log(imgHeight+"  imgHeight");
          $( "nav ul li:nth-child(" + ii + ") .nav-item" ).addClass('bottom-bordered');       
        } else {
          console.log(ii+" removed");
          $( "nav ul li:nth-child(" + ii + ") .nav-item" ).removeClass('bottom-bordered');       
        }
      });
    });
  });
});
