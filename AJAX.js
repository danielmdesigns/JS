//AJAX Tutorial

// Step #1 - Create XML HTTP Request Object (Tells server to get ready)
// Step #2 - Create a callback function
// Step #3 - Open a request
// Step #4 - Send request

//#1
var xhr = new XMLHttpRequest();
//#2
//creating a callback
xhr.onreadystatechange = function() {
  //add conditional statement to make sure we've received data from srvr
  if(xhr.readyState === 4){
    //add contintional statement to test server is OK
    if(xhr.status === 200){
      //get #sidebar div and set HTML inside to the servers response
      document.getElementById('sidebar').innerHTML = xhr.responseText;
    } else {
      //else code here
    }
  }
};
//#3
xhr.open('GET', 'sidebar.html');
//#4
xhr.send();
