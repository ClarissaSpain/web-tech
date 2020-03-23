### Homework 9
JSON and JQuery

1. Find a dataset to display @
2. Use jQuery and AJAX to access the JSON file @
3. Display your data in a meaningful way
4. Create a jQuery plugin that you can apply to your data as well.

jQuery.getJSON( url [, data ] [, success ] )

$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});

Popular External JS Libraries
https://www.smashingmagazine.com/2009/03/40-stand-alone-javascript-libraries-for-specific-purposes/

Some that I am interested in using for my final project:

wForms
JS Charts
Processing.js
Date.js or Pretty Date
typeface.js
Blackbird Alert()s (good for debugging)


The second I got the JQuery Ajax to actually pull stuff from the r/StardewValley json I was super excited.
Now, I had to figure out how to display my data...

Initially, I wanted to show images from the subreddit page, but then I realized that images in html don't quite work with url links and that I would need a folder of images.
