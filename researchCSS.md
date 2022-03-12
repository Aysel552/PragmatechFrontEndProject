### Topics which i need to improve:

## Position definition and types
* What is position itself?
* The position property defines the type of positioning method used for an element ( static,relative,fixed,absolute or sticky). 
* Elements are then positioned using the top, bottom, left and right properties. These properties won't work unless the position property us set first. These properties work differently depending on the position value.

## Static Position:
* HTML elements are positioned static by default.
*  <b>Static </b> positioned elements <b> are not affected </b> by the top, bottom, left, and right properties.
* An element with position: static; <b> is not positioned in any special way </b>; it is  <b>always positioned according to the normal flow of the page: </b>

```
Example of Static Positioning:

<!DOCTYPE html>
<html>
<head>
<style>
div.static {
  position: static;
  border: 3px solid #73AD21;
}
</style>
</head>
<body>

<h2>position: static;</h2>

<p>An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:</p>

<div class="static">
This div element has position: static;
</div>

</body>
</html>

```

## Relative Position:
* An element with position: relative; is positioned <b> relative to its normal position </b>
* Setting the top,right,bottom and left properties of a relatively-positioned element will cause it to be adjusted (adapt) away from its normal position.
* Other content will not be adjusted to fit into any gap left by the element

```
Example of Relative Positioning:

<!DOCTYPE html>
<html>
<head>
<style>
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
</style>
</head>
<body>

<h2>position: relative;</h2>

<p>An element with position: relative; is positioned relative to its normal position:</p>

<div class="relative">
This div element has position: relative;
</div>

</body>
</html>

```

## Absolute Positioning:

*  An element with position: absolute; <b> is positioned relative to the nearest positioned ancestor </b>
*  However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
* Note: Absolute positioned elements are removed from the normal flow, and can overlap elements.


```
Example of Absolute Positioning:

<!DOCTYPE html>
<html>
<head>
<style>
div.relative {
  position: relative;
  width: 400px;
  height: 200px;
  border: 3px solid #73AD21;
} 

div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}
</style>
</head>
<body>

<h2>position: absolute;</h2>

<p>An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed):</p>

<div class="relative">This div element has position: relative;
  <div class="absolute">This div element has position: absolute;</div>
</div>

</body>
</html>



```
## Fixed Positioning:
* An element with <b> position: fixed; </b> <b> is positioned relative to the viewport </b>, which means it <b> always stays in the same place even if the page is scrolled. </b>
* The top, right, bottom, and left properties are used to position the element.
* A fixed element does not leave a gap in the page where it would normally have been located.
* Notice the fixed element in the lower-right corner of the page.

```
Example of Fixed Positioning:

<!DOCTYPE html>
<html>
<head>
<style>
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
</style>
</head>
<body>

<h2>position: fixed;</h2>

<p>An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled:</p>

<div class="fixed">
This div element has position: fixed;
</div>

</body>
</html>

```

