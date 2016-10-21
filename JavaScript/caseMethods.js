// JavaScript Document

var sillyString = "HeLlO ThErE, hOw aRe YoU dOiNg?";
var lowerString = sillyString.toLowerCase();
var firstChar = lowerString[0];
var firstCharUpperCase = firstChar.toUpperCase();
var restOfString = lowerString.slice(1);
var concatString = firstCharUpperCase + restOfString;
console.log(concatString);

var crazyString = "HeLlO ThErE, hOw aRe YoU dOiNg?";
var newCrazyString = crazyString[0].toUpperCase() + crazyString.slice(1).toLowerCase();
console.log(newCrazyString);