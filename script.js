var hasConfirmed = confirm("Are you ready to play?");
if (hasConfirmed) {
  var myName = prompt("What is my name");


if ( myName.length <= 2 ) {
myName = "Anon";
}
document.write("<p>Hello "+ myName );
document.write("<br>Your game is about to begin. <br> You have just arrived at a 4 way stop.</p>");
var myAnswer1 = prompt("Are you the only one waiting?");
if ( myAnswer1 === "yes" ){
document.write("<p>Proceed safely throught the intersection");
}else{
  var myAnswer2 = prompt("are you the first on here?");
  if( myAnswer2 === "yes"){
  document.write("<p>Proceed safely throught the intersection.");
}else{
}
}
}
