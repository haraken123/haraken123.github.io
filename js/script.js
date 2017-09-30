$(function() {
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
  });
  
  
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
      itemSelector: '.work-card'
    });
  });

});