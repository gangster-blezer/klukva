//window.getComputedStyle(el).right


for (var i = 0; i <= document.getElementsByClassName("color-corp-btn").length - 1; i++) {
	document.getElementsByClassName("color-corp-btn")[i].addEventListener("click",colorcorp)
}

function colorcorp() {
	let img = window.getComputedStyle(this).backgroundImage.split("/");
	let imgid = img[img.length-1].split(".")[0];
	let panel1 = document.getElementsByClassName("panel")[0];
	panel1.style.backgroundImage = "url('img/colors/Teenager/Panels/"+imgid+".png')";
}

for (var i = 0; i <= document.getElementsByClassName("color-fasad-btn").length - 1; i++) {
	document.getElementsByClassName("color-fasad-btn")[i].addEventListener("click",colorfasad)
}

function colorfasad() {
	let img = window.getComputedStyle(this).backgroundImage.split("/");
	let imgid = img[img.length-1].split(".")[0];
	let panel1 = document.getElementsByClassName("panel")[1];
	panel1.style.backgroundImage = "url('img/colors/Teenager/Panels/"+imgid+".png')";
}