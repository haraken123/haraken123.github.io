$.ajax({
  type: 'GET',
  url: 'js/json/data.json',
  dataType: 'json',
  success: function(json){
    $("header").append('<nav><ul id="ancher_list"></ul></nav>');
    var publicIndex = 0;
    for(var i=0; i < json.length; i++){
      if( !json[i].isPublic ) {
        continue;
      }
      publicIndex++;
      $("#ancher_list").append('<li><a href="#work' + publicIndex + '">' + publicIndex + "</a></li>");
      if( i < (json.length-1) ) {
        $("#ancher_list").append('<li>/</li>');
      }
      $("#content-wrapper").append('<div id="work' + publicIndex + '" class="work-item">');
      $("#work" + publicIndex).append('<div class="work_title">作品名： <span class="work_data">' + json[i].title + '</span></div>');
      for (var j=0; j<json[i].images.length; j++){
        $("#work" + publicIndex).append('<a data-fancybox="gallery' + publicIndex + '" href="img/' + json[i].images[j] + '"><img src="img/' + json[i].images[j] + '"></img></a>');
      }
      $("#work" + publicIndex).append('<div class="work_info"></div>');
      $("#work" + publicIndex + " .work_info").append('<div class="work_concept">コンセプト： <span class="work_data">' + json[i].concept + '</span></div>');
      $("#work" + publicIndex + " .work_info").append('<div class="work_category">カテゴリー： <span class="work_data">' + json[i].category + '</span></div>');
      $("#work" + publicIndex + " .work_info").append('<div class="work_role">役割： <span class="work_data">' + json[i].role + '</span></div>');
      $("#work" + publicIndex + " .work_info").append('<div class="work_tools">使用ツール： <span class="work_data">' + json[i].tools + '</span></div>');
      if( json[i].skill ) {
        $("#work" + publicIndex + " .work_info").append('<div class="work_skill">使用技術： <span class="work_data">' + json[i].skill + '</span></div>');
      }
      $("#work" + publicIndex + " .work_info").append('<div class="work_term">制作期間： <span class="work_data">' + json[i].term + '</span></div>');
      $("#work" + publicIndex + " .work_info").append('<div class="work_detail">詳細： <span class="work_data">' + json[i].detail + '</span></div>');
      if( json[i].url && json[i].isPublic ) {
        $("#work" + publicIndex + " .work_info").append('<div class="work_url">リンク： <a href="' + json[i].url + '" target="_blank"><span class="work_data">' + json[i].url + '</span></a></div>');
      }
      if( i < (json.length-1) ) {
        $("#work" + publicIndex).append('<a class="next_link" href="#work'+ (publicIndex+1) + '"><span class="sankaku"></span></a>');
      }
    }
  }
});
