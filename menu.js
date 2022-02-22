function menu(add,del) {
	document.getElementsByClassName(del)[0].classList.add(add);
	document.getElementsByClassName(del)[0].classList.remove(del);
}

document.getElementsByClassName("phone")[0].addEventListener("click", phone);

function phone(){
	menu('black-part-on','black-part-off');
	menu('back-call-window-on','back-call-window-off')
}

document.getElementsByClassName("close-window")[0].addEventListener("click", close);

function close(){
	menu('black-part-off','black-part-on');
	menu('back-call-window-off','back-call-window-on')
}

