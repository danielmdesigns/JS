// JavaScript Document
$("button").on("click", alertMessage);
function alertMessage(){
	"use strict";
	var message = "This button does not do anything yet.";
	alert(message);
}

$(".animsition").animsition({
	inClass: "fade-in-right-lg",
	outClass: "fade-out-left-lg",
	linkElement: "nav a",
	inDuration: 700,
	outDuration: 500
});
//var pageAnimationProperties = {
//	inClass: "fade-in-right-lg",
//	outClass: "fade-out-right-lg"
//};