// JavaScript Document


//SELF INVOKING ANONYMOUS FUNCTION
(function(){
	//code here
})();

/*
	BENEFITS:
	1. It runs immediately runs on page load
	2. Variables are local and NOT apart of the window object.
*/


//ANOTHER EXAMPLE
$("element").on("event", function(){
	//code here
});
/*
	HOW IT WORKS:
	1. When the element event is triggered, run the function immdiately,
	thus - running the code.
*/