function menu(add,del) {
	document.getElementsByClassName(del)[0].classList.add(add);
	document.getElementsByClassName(del)[0].classList.remove(del);
	bodyfixed(true);
}

function changeClass(obj,add,del){
	document.getElementsByClassName(obj)[0].classList.add(add);
	document.getElementsByClassName(obj)[0].classList.remove(del);
}

function bodyfixed(a){
	if(a){
		document.body.classList.add("body-fixed");
	}else{
		document.body.classList.remove("body-fixed");
	}
}

document.getElementsByClassName("phone")[0].addEventListener("click", phone);
document.getElementById("des-proj-btn").addEventListener("click", desing);
document.getElementById("contactus").addEventListener("click", contactus);

function phone(){
	menu('black-part-on','black-part-off');
	changeClass('back-call-window','window-on','window-off');
}

document.getElementsByClassName("close-window")[0].addEventListener("click", close);
document.getElementsByClassName("close-window")[1].addEventListener("click", close);
document.getElementsByClassName("close-window")[2].addEventListener("click", close);

function close(){
	menu('black-part-off','black-part-on');
	menu('window-off','window-on');
	bodyfixed(false);
}


function desing(){
	menu('black-part-on','black-part-off');
	changeClass('desing-project-window','window-on','window-off');
}

function contactus(){
	menu('black-part-on','black-part-off');
	changeClass('contactus-window','window-on','window-off');
}

document.getElementById("catalog").addEventListener('mouseover', function() {
	document.getElementsByClassName("catalog-block")[0].classList.add("catalog-block-on");
	document.getElementById("catalog").classList.add("catalog-act");
});

document.getElementsByClassName("catalog-block")[0].addEventListener('mouseleave', function() {
	document.getElementsByClassName("catalog-block")[0].classList.remove("catalog-block-on");
	document.getElementById("catalog").classList.remove("catalog-act");
});

document.getElementById("phoneinp").addEventListener('input', function() {
	let phoneNum = document.getElementById("phoneinp").value;
	let inpPos = document.getElementById("phoneinp").selectionStart;
	document.getElementById("phoneinp").value = phoneNum.replace("6", "");
	document.getElementById("phoneinp").value = phoneNum.replace("_", "6");
		
});


function numberMask(){

}


