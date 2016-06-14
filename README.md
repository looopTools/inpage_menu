# inpage_menu
A JavaScript/CSS library for adding internal page navigation with smooth scrool.

## STATUS

- Still in developmenet, needs further testing
- We are looking at providing it via a CDN solution

## Requriements

- [JQuery](https://jquery.com/)
- [Font Awesome](fontawesome.io/)

## Usage

Download the newest zip from releases and stored in your webproject.
Include the javascript file `inpage_menu.js` and if you want to use our style
include `inpage_menu.css`.

To generate the menu place a tag on your webpage `div` or `a` does not matter,
on the following form: `<div id="anchor_SECTION_ID" name="SECTION_NAME"></div>`
or `<a id="anchor_SECTION_ID" name="SECTION NAME"></a>`

And place a div on your page with the following structure `<div id="inpage_menu"></div>`

Then `inpage_menu.js` will iterated through your page registring all anchor links and adding
these to the `div#inpage_menu`.

## Examples
We provide a few examples in the example folder.

## Test
We test __inpage_menu__ by writing simple HTML page and testing if the functionality behaves as expected.

## Works with
The library have been tested in live environmenets with:

- Jekyll
- AngularJS
- Ruby On Rails
