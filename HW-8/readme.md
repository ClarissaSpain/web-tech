### Homework 8


All the images are loaded with the page and positioned absolutely on top of each other, all with z-index=1. One image is initially set with a class of “active”, which is positioned on the top of the stack with z-index = 3.

Then, using jQuery, I’m identifying the active image, and then the next image down. I’m doing this via the jQuery .next() method. If there isn’t a next image – if we’re at the end of the images – I’m selecting the first image instead using .first().

Now, once I’ve identified the next image, I’m assigning z-index=2 to this so it’s the second image down in the pile – and hence is visible when the top image fades out.

Then, I’m fading out the active image. When this completes there’s a few things to do. First, I’m setting the z-index of the active image (now faded out) back to z-index=1. Then, I’m reversing the fade by using the show() method. It won’t be visible now because of the z-index. Finally, I’m removing the active class. Effectively, I’m putting this image back into the bottom pile.

Nearly there. Then, with the next image, which is now on top anyway, I’m assigning z-index=3, and then adding the active class to this image.

Finally, all of this code is sitting in a function which I’m calling every seven seconds via setInterval().
