//CREATE NEW ELEMENTS
//create new element
const h1 = document.createElement("h1");
//modify text
h1.innerHTML = "Hello Daniel!";
//append it to the body
document.body.appendChild(h1);
//remove it fromt he body
//document.body.removeChild(h1);



//SET CLASS && IDs
//set class attribute
//h1.setAttribute("class", "hello"); //adds a class of hello
h1.className = "hello";
//h1.className = "classA"; //add a class of classA
h1.classList.add("classA"); //add another class of classA
//h1.classList.remove("classB"); //removes hello class

//set an id attribute
h1.setAttribute("id","hello-world1");
h1.id = "hello-world2"; //same thing as above, shorter


//CHECK INPUT ELEMENTS
const radio = document.getElementById("myInput");
radio.checked = false;

//for example--
//input.checked = true;
//input.checked = false;
//input.setAttribute("checked", "");
//input.setAttribute("checked");

const check = document.createElement("input");
//check.type = "checkbox";
check.setAttribute("type", "checkbox");
document.body.appendChild(check);
check.checked = true;



//FINDING ELEMENTS ON THE PAGE
document.getElementById(id);
element.childNodes[index];
element.firstChild === element.childNodes[i];
element.lastChild === element.childNodes[element.childNodes.length-1];
element.getElementsByTagName(tagName);
element.getElementsByClassName(className)[0];
element.querySelector(query);
element.querySelectorAll(query);

