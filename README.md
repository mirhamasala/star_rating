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
## Debrief

### Starry Eyed - First Draft
Many years ago, when the night fell, the sky would turn dark, and you couldn't even see as little as a sliver of light. Although the darkness was beautiful to look at, it was also dangerous. People who'd stare at it for too long would end up frozen in time, unable to move their focus. It was said that the darkness had absorbed their gaze and was now holding it in eternity.

Then one day, a starry-eyed boy called Nine, came up with a brilliant plan. He would glue five pointy objects to the sky that looked pale in the light but would glow in the dark. This way, he reasoned, the people could still wallow in the dark but wouldn't have to worry about accidentally crossing over to the other side.

#### Words in the wild
- imagined a sky that would glow
- keep the power of the dark, but at the same time
- five luminous objects in the sky that would glow in the dark
- So they could experience Infinity without having to leave Earth
- they called him the stargazer
- they called them the eternal skygazers
- the dark side (of the force, of the moon)
- slivers, slipping, permanent, gaze, eternally, glimpse, skygazer, stargazers, eternal darkness
- It was said that the darkness had absorbed their gaze into a glimpse of eternity.
- about losing their light

### How to put stars in the sky - First Draft

1. Set all stars in the starsbox to a base color

    `.stars i { color: var(--pale-light) };`

2. Make all stars in the box glow on hover

  - We're using the descendant selector to select all descendants of the starbox–that is, all the `<i>` elements inside the element `<div class="stars">`.

    `.stars:hover i { color: var(--glow-dark) };`

3. Reset the stars that come after the currently hovered (and glowing) star to the base color

  - The previous style rule makes all the stars light up on `hover` at the same time. But that's not exactly what we want. We'd like to reset the stars that come after the currently hovered star to the base color.

  - To achieve this, we first select the currently hovered star with `.stars i:hover` (note the difference in syntax with the previous rule) and set it to `--pale-light` like so:

    `.stars i:hover { color: var(--pale-light) };`

  - Now that we have selected the currently hovered star, we want, in fact, to set the stars that come *after* it to the base color instead. The general sibling combinator will help us do just that:

    `.stars i:hover ~ i { color: var(--pale-light) };`

    This rule says, from the perspective of the currently hovered star, please change the color of all my sibling stars into the base color–and don't change me. And since the style is applied on the currently hovered star, the style keeps applying as you hover from right to left and left to right. It's kinda dazzling, don't you think?

4. Repeat the same process but on click.

   - When a star is clicked we want it to behave in the same way as it was a currently hovered star. To get there we need to add a couple of classes so that we can apply the same rules as for the currently hovered star, but are still able to differentiate from it. On click, we add the class `.rated` to the starbox and the class `.active` to the currently clicked star

   - Then in our CSS stylesheet, we say: also apply the glow to all the stars that are in the rated star box with `rated i`

```css
    .stars:hover i, .rated i  {
        color: var(--glow-dark);
    }
```

- But again, we have to use the general sibling selector to say, please don't light up the stars beyond the clicked one with `.rated i .active ~ i`

```css
    .stars i:hover ~ i, .rated i.active ~ i {
        color: var(--glow-dark);
    }
```

5. Everything works fine now, except that we seem to have lost the ability to, after clicking on a star, light up the ones that come after it on hover.

-	To fix this, we need to add a `:not` pseudo class to say when a star is clicked, please make all the stars glow in the dark, except for the ones that come after the currently clicked star, unless we are hovering over them

```css
    .stars i:hover ~ i, .rated:not(:hover) i.active ~ i {
        color: var(--pale-light);
    }
```

## Look Up
- [x] `text-shadow`
- [x] general sibling selector

## Resources
- [Buried hovers](https://css-tricks.com/little-css-stuff-newcomers-get-confused-about/#article-header-id-3)
- [Child and Sibling Selectors](https://css-tricks.com/child-and-sibling-selectors/)
- [CSS general sibling combinator (~) not working with negation pseudo-class (:not)](https://stackoverflow.com/questions/19015924/css-general-sibling-combinator-not-working-with-negation-pseudo-class-not)
- [Five star rating field with animated hover effect](https://codepen.io/blixt/pen/QyNXEp)
- [Gradient Text](https://css-tricks.com/snippets/css/gradient-text/)
- [Lars's Working Example](https://datene.github.io/star_rating/)
- [LocalStorage in JavaScript](https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36)
