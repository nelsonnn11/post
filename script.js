function myFunction(){
  var x = document.getElementById("states");
  var i = x.selectedIndex;
  var b = x.value;
  document.getElementById("state-heading").innerHTML = x.options[i].text;
  document.getElementById("greeting").innerHTML = "Greetings from"
  document.getElementById("postcard").style.backgroundImage = "url('img/"+ b +"@2x.jpg"
}