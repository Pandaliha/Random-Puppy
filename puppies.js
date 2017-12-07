var derLink = "";

function getPuppy() {
  (function($){
var albumID = 'NNbeO';
var pictureAPI = "https://api.imgur.com/3/gallery/r/puppies/new";

  $.ajax({
      url: pictureAPI,
      headers:{
          'Authorization':'Client-ID ff4cc7fcad7bf4e'
      },
      type: 'GET',
      dataType: 'json',
      success: function(data) { 
          //alert(data.data[0].link);
        $("#new-puppy").animate({
          top: 0
        }, 500);

    $("#puppybed").css("display", "block"); 
    var z = "";
    console.log(data);
    for (var i = 0; i < 25; i++) {
        var x = Math.floor((Math.random() * 100) + 1);
          z = data.data[x].link;
    };

    $("img").attr("src", z);
    $("#puppybed").fadeIn(900);
    $("#new-tweet").fadeIn(900);
    derLink = z;
      },
      error: function() { console.log("ERROR"); }
  });

})(jQuery);

};
  
    

$(document).ready(function() {
  $('#new-puppy').on('click', getPuppy);
/*NEW*/
  $('#new-tweet').click(function (e) {
 //alert('test');
 var textToTweet = "Look at this puppy: " + derLink;
 if (textToTweet.length > 140) {
 alert('Tweet should be less than 140 Chars');
 }
 else {
 var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
 window.open(twtLink,'_blank');
 }
 });
  /*END NEW*/
  });        
