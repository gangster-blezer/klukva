document.getElementsByClassName("selected-tkan")[0].addEventListener("click",open_tkani)


function open_tkani() {
	menu('black-part-on','black-part-off');
	document.getElementsByClassName("vibor-tkani")[0].classList.add("vibor-tkani-opened");
	document.getElementsByClassName("black-part-on")[0].addEventListener("click",close)
	bodyfixed(true);
}

function menu(add,del) {
	document.getElementsByClassName(del)[0].classList.add(add);
	document.getElementsByClassName(del)[0].classList.remove(del);
}

function close() {
	document.getElementsByClassName("black-part-on")[0].removeEventListener("click",close)
	menu('black-part-off','black-part-on');
	document.getElementsByClassName("vibor-tkani")[0].classList.remove("vibor-tkani-opened");
	bodyfixed(false);
}

function bodyfixed(a){
	if(a){
		document.body.classList.add("body-fixed");
	}else{
		document.body.classList.remove("body-fixed");
	}
}

function changeSize() {
	document.getElementsByClassName("on-size-btn")[0].classList.remove("on-size-btn");
	this.classList.add("on-size-btn");
}

document.getElementsByClassName("size-btn")[0].addEventListener("click",changeSize)
document.getElementsByClassName("size-btn")[1].addEventListener("click",changeSize)