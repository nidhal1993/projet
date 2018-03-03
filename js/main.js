function myFunction() {
 alert("bonjour");
}
function myFunction() {
 var person = prompt("Please enter your name", "Harry Potter");
 document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }


var imagenumber=1;


function carousel(){
	if (imagenumber>4){imagenumber=1;}
	$('#test-image').attr('src',"resources/img"+imagenumber+".jpg");
	imagenumber++;
	setTimeout(carousel,2000);
}