### Homework 8

WIP hw assignment:

I wasn't able to complete all parts of the requirements of this homework assignment.


Cycler jQuery
All the images are loaded with the page and positioned absolutely on top of each other, all with z-index=1. One image is initially set with a class of “active”, which is positioned on the top of the stack with z-index = 6.

Then, using jQuery, I’m identifying the active image, and then the next image down. I’m doing this via the jQuery .next() method. If there isn’t a next image – if we’re at the end of the images – I’m selecting the first image instead using .first(). This is where I am cycling through the images by assigning the second image with z-index 2 to immediately update with z-index-1.

Finally, all of this code is sitting in a function which I’m calling every seven seconds via setInterval().
