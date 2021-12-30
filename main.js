canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
window.addEventListener("keydown", my_keydown);
// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image; 
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if ((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet Key";
		console.log("alphabet Key");
	}

	else if (keyPressed >=48 && keyPressed<=57){
			numberkey();
			document.getElementById("d1").innerHTML="You pressed Number26 Key";
		}
		//write a code to check the type of key pressed

	else {
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}

	if (keyPressed >=17 && keyPressed<=18 || keyPressed<=27) {
		specialkey();
		document.getElementById("d1").innerHTML="You pressed special  Key";
		console.log("alphabet Key");
	}

}

function aplhabetkey()
{
	//upload respective image with the message. 
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
