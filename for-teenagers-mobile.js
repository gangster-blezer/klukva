document.getElementsByClassName("pop-sl-itm")[0].addEventListener('click', function(){
		setMobSl(0);
});

document.getElementsByClassName("pop-sl-itm")[1].addEventListener('click', function(){
		setMobSl(1);
});

document.getElementsByClassName("pop-sl-itm")[2].addEventListener('click', function(){
		setMobSl(2);
});

document.getElementsByClassName("pop-sl-itm")[3].addEventListener('click', function(){
		setMobSl(3);
});

document.getElementsByClassName("pop-sl-itm")[4].addEventListener('click', function(){
		setMobSl(4);
});

document.getElementsByClassName("pop-sl-itm")[5].addEventListener('click', function(){
	setMobSl(5);
});

document.getElementsByClassName("pop-sl-itm")[6].addEventListener('click', function(){
	setMobSl(6);
});


function setMobSl(j){
		document.getElementsByClassName("pop-sl-itm-on")[0].classList.remove("pop-sl-itm-on");
		document.getElementsByClassName("setkaitem-on")[0].classList.remove("setkaitem-on");
		document.getElementsByClassName("pop-sl-itm")[j].classList.add("pop-sl-itm-on");
		document.getElementsByClassName("setkaitm")[j].classList.add("setkaitem-on");
}