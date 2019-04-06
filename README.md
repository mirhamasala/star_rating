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

## Code Notes

From [Five star rating field with animated hover effect](https://codepen.io/blixt/pen/QyNXEp)

```css
/* These styles are applied by default.
   They will also override the hover
   style for all stars to the right
   of the currently hovered star. */
.rate i, .rate i:hover ~ i {
  color: #222;
  text-shadow: none;
  transition: color 200ms,
              text-shadow 200ms;
  /* This will remove the delay when
     moving the cursor left or right
     within the set of stars. */
  transition-delay: 0;
}

/* This is the style that will be
   applied to all stars and then
   subsequently removed from the stars
   to the right of the one being
   hovered. */
.rate:hover i {
  color: #fc0;
  text-shadow: #fc0 0 0 20px;
}

/* Make the effect apply one star at a
   time. Limiting the selector to when
   .rate is hovered removes the effect
   without delay when cursor leaves
   the .rate area. */
.rate:hover i:nth-child(2) {
  transition-delay: 30ms;
}

.rate:hover i:nth-child(3) {
  transition-delay: 60ms;
}

.rate:hover i:nth-child(4) {
  transition-delay: 90ms;
}

.rate:hover i:nth-child(5) {
  transition-delay: 120ms;
}

/* Miscellaneous styles. */
.rate i {
  cursor: pointer;
  font-style: normal;
}

body {
  align-items: center;
  background: #000;
  display: flex;
  font-size: 48px;
  height: 100%;
  justify-content: center;
  margin: 0;
}

html {
  height: 100%;
}
```

## Look Up
- [x] `text-shadow`
- [x] general sibling selector

## Resources
- [Child and Sibling Selectors](https://css-tricks.com/child-and-sibling-selectors/)
- [Five star rating field with animated hover effect](https://codepen.io/blixt/pen/QyNXEp)
- [Gradient Text](https://css-tricks.com/snippets/css/gradient-text/)
- [Lars's Working Example](https://datene.github.io/star_rating/)
