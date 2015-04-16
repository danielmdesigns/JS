//change imgID on line 5
//change imgNameA on line 8
//change LinkA and LinkB on lines 10 and 12

/* IMG Redirect */
$('#imgID').click(function () {
  filename = $(this).attr('src').replace( /^.*?([^\/]+)\..+?$/, '$1' );
  if(filename == "imgNameA"){
    window.location.href = "/LinkA.php";
  }else{
    window.location.href = "/LinkB.php";
  }
});