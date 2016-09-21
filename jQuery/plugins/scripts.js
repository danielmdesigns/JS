// JavaScript Document
//$("button").on("click", alertMessage);
//function alertMessage(){
//	"use strict";
//	var message = "This button does not do anything yet.";
//	alert(message);
//	return false;
//}

$(".js-notice").on("click", function(){
	"use strict";
	$(".notification").show();
	return false;
});

$(".animsition").animsition({
	inClass: "fade-in-right-lg",
	outClass: "fade-out-left-lg",
	linkElement: "nav a",
	inDuration: 700,
	outDuration: 500
});