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


function setMobSl(j){
	k=0;
	document.getElementsByClassName("pop-sl-itm-on")[0].classList.remove("pop-sl-itm-on");
	while (k < 5) {
			if(document.getElementsByClassName("popular")[k].classList.item(1)==null){
				document.getElementsByClassName("popular")[k].classList.add("popular-off");	

			}
			k++;
		}
		document.getElementsByClassName("pop-sl-itm")[j].classList.add("pop-sl-itm-on");
		document.getElementsByClassName("popular")[j].classList.remove("popular-off");
		//setTimeout(() => document.getElementsByClassName("popular")[j]., 1);
}