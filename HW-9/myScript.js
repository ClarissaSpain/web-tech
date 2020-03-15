
$.getJSON('https://www.reddit.com/r/StardewValley/.json', function(data) {
     //
     // var text = `Kind: ${data.kind}<br>
     //             Time: ${data.data.dist}<br>
     //             Unix time: ${data.data.children[3].data.preview.images[0].source.url}`
    var imageArray=new Array();

    // var text = 'Author: ${data}'


      // $('#mypanel').load(data);
for (let i = 0; i < 1; i++) {
   imageArray.push(data.data.children[i].data.preview.images[0].source.url)
   // imageArray += imageArray[i] + "<br>"
   // $('#mypanel').html(imageArray[i]);
   $("#picture").append("<img src="+imageArray.push(data.data.children[3].data.preview.images[0].source.url) + ">");
   // console.log();
}

// var returnData = jQuery.parseJSON(data);

     // alert("Success!");
 });
