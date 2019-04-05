I was thinking of a simple star-rating, it’s not super presentable though. But it’s compact and it’s a nice mix of CSS and JS.

datene [5:40 PM]
https://datene.github.io/star_rating/ here it is, about 35 lines of JS and about 40 lines of CSS
the trickiest part is to condense the logic to make the stars change colours
the only thing done in JS is persisting a state on click and on reload, that should be your last to-do

This is basically all the HTML you’ll need

this challenge is nice because making a star-rating like this is something almost every website has in some way or form, there’s many codepens and even libraries to make it happen but most of them are way too complex. While this solution is fast and the code is compact enough to understand at a single glance

a snippet of information to make this a little bit easier, although it really depends on your approach:
*In CSS there is no previous sibling selector, only a next sibling selector (`~`). There also isn’t a parent selector. Using `~` you can change the style of next siblings on hover*
