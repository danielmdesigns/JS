var roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function(){
  if(roomRequest.readyState === 4){
    //console.log(typeof roomRequest.responseText);
    var rooms = JSON.parse(roomRequest.responseText);
    //will hold <li> for each employee
    var statusHTML = '<ul class="rooms">';
    //how many times the loop will run
    for (var i=0; i<rooms.length; i+=1){
      //if they're in, give them a <li> & class of "in"
      if(rooms[i].inoffice === true){
        statusHTML += '<li class="in">';
      //if not, give them a <li> & class of "out"
      } else {
        statusHTML += '<li class="out">';
      }
      //add that persons name
      statusHTML += rooms[i].name;
      //& close the <li> tag
      statusHTML += '</li>';
    }
    //close out the <ul>
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
roomRequest.open('GET', 'data/rooms.json');
roomRequest.send();
