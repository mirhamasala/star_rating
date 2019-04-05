# Star Rating

## Lars's Instructions
Here it is: <https://datene.github.io/star_rating/>

It's about 35 lines of JS and about 40 lines of CSS.

The trickiest part is to condense the logic to make the stars change colours.

The only thing done in JS is persisting a state on click and on reload, that should be your last to-do.

This challenge is nice because making a star-rating like this is something almost every website has in some way or form, there’s many codepens and even libraries to make it happen but most of them are way too complex. While this solution is fast and the code is compact enough to understand at a single glance.

### Round 1
A snippet of information to make this a little bit easier, although it really depends on your approach:

**In CSS there is no previous sibling selector, only a next sibling selector (`~`). There also isn’t a parent selector. Using `~` you can change the style of next siblings on hover.**

## Resources
- [Lars's Working Example](https://datene.github.io/star_rating/)
