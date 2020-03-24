// function(data) {
//      //
//      var text = `Kind: ${data.kind}<br>
//                  Time: ${data.data.dist}<br>
//                  Unix time: ${data.data.children[3].data.preview.images[0].source.url}`
//
//                  $("#mypanel").load("text");
//
//     //Mini Posts
//     var minipost = `Picture: ${data.data.children[3].data.preview.images[0].source.url}<br>
//                     Desc: ${data.data.children[3].data.selftext}`
//
//     var imageArray=new Array();
//
//     var text = 'Author: ${data}'
//
//
//       $('#mypanel').load(text);
// for (let i = 0; i < 1; i++) {
//    imageArray.push(data.data.children[i].data.preview.images[0].source.url)
//    // imageArray += imageArray[i] + "<br>"
//    // $('#mypanel').html(imageArray[i]);
//    $("#picture").append("<img src="+imageArray.push(data.data.children[3].data.preview.images[0].source.url) + ">");
//    // console.log();
// }
//
// var returnData = jQuery.parseJSON(data);
//
//      // alert("Success!");
//  });


// Jquery Plugin
(function($){
$.fn.subfont = function (){
  this.css("font-family", "stardew_valleyregular");
  this.css("font-size", 22);
  return this;
};
}(jQuery));
$(function (){
  $("#mypanel").subfont();
});


$(document).ready(function() {
  $.getJSON('https://www.reddit.com/r/StardewValley/.json', function(data, status) {
    var text = `${data.data.children[2].data.selftext}<br>
                 ${data.data.children[2].data.title}<br><br>
                 <img src=${data.data.children[2].data.preview.images[0].source.url} height="300">
<br><br>
                 ${data.data.children[3].data.selftext}<br>
                            ${data.data.children[3].data.title}<br><br>
                            <img src=${data.data.children[3].data.preview.images[0].source.url} height="300">
<br><br>
                            ${data.data.children[4].data.selftext}<br>
                                       ${data.data.children[4].data.title}<br><br>
                                       <img src=${data.data.children[4].data.preview.images[0].source.url} height="300">
<br><br>
                                       ${data.data.children[5].data.selftext}<br>
                                                  ${data.data.children[5].data.title}<br><br>
                                                  <img src=${data.data.children[5].data.preview.images[0].source.url} height="300">
<br><br>
                                                  ${data.data.children[6].data.selftext}<br>
                                                             ${data.data.children[6].data.title}<br><br>
                                                             <img src=${data.data.children[6].data.preview.images[0].source.url} height="300">
                                                             <br><br>
                                                                     ${data.data.children[7].data.selftext}<br>
                                                                                ${data.data.children[7].data.title}<br><br>
                                                                                <img src=${data.data.children[7].data.preview.images[0].source.url} height="300">`
$("#mypanel").html(text);
    // alert(status);
  })
});
