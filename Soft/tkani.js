document.getElementsByClassName("selected-tkan")[0].addEventListener("click",open_tkani)


function open_tkani() {
	menu('black-part-on','black-part-off');
	document.getElementsByClassName("vibor-tkani")[0].classList.add("vibor-tkani-opened");
	document.getElementsByClassName("black-part-on")[0].addEventListener("click",close)
}

function menu(add,del) {
	document.getElementsByClassName(del)[0].classList.add(add);
	document.getElementsByClassName(del)[0].classList.remove(del);
}

function close() {
	document.getElementsByClassName("black-part-on")[0].removeEventListener("click",close)
	menu('black-part-off','black-part-on');
	document.getElementsByClassName("vibor-tkani")[0].classList.remove("vibor-tkani-opened");
}