window.onload = function(){
	
	let start = Date.now();
	let tmr = setInterval(function() {
	  // сколько времени прошло с начала анимации?
	  let timePassed = Date.now() - start;

	  if (timePassed >= 2000) {
 	   	clearInterval(tmr); // закончить анимацию через 2 секунды
	  	document.getElementsByClassName('desing-project')[0].classList.add("desing-project-off");
		document.getElementsByClassName('desing-project')[0].classList.remove("desing-project-on");
	    return;
	  }
	  

	}, 10);

	window.addEventListener('scroll', function() {
		if(pageYOffset>100){
			//scrollAnim();
		}
	});

	//document.getElementsByClassName('slider')[0].classList.add("bottom-on");
	document.getElementsByClassName('slide')[0].classList.add("bottom-off");
	document.getElementsByClassName('slide')[1].classList.add("bottom-off");
	document.getElementsByClassName('slide')[2].classList.add("bottom-off");

	document.getElementsByClassName('sl-left')[0].classList.add("bottom-off");
	document.getElementsByClassName('sl-right')[0].classList.add("bottom-off");

	let sl = setTimeout(remove, 1000);

	function remove(){
		document.getElementsByClassName('slide')[0].classList.remove("bottom-on");
		document.getElementsByClassName('slide')[1].classList.remove("bottom-on");
		document.getElementsByClassName('slide')[2].classList.remove("bottom-on");

		document.getElementsByClassName('slide')[0].classList.remove("bottom-off");
		document.getElementsByClassName('slide')[1].classList.remove("bottom-off");
		document.getElementsByClassName('slide')[2].classList.remove("bottom-off");

		document.getElementsByClassName('desing-project')[0].classList.add("desing-project-on");
		document.getElementsByClassName('desing-project')[0].classList.remove("desing-project-off");

		document.getElementById("back").classList.add("left-off");
		document.getElementById("next").classList.add("left-off");

		document.getElementById("back").classList.remove("left-on");
		document.getElementById("next").classList.remove("left-on");

		document.getElementsByClassName('phone')[0].classList.add("left-off");
		document.getElementsByClassName('phone')[0].classList.remove("left-on");

	}

	//document.getElementsByClassName('sliderview')[0].setAttribute("style", "transform: translateX(-"+tr+"px);");

};

/*document.getElementsByClassName('desing-project')[0].addEventListener("mouseover", function( event ) {
	document.getElementsByClassName('desing-project')[0].classList.add("desing-project-on");
	document.getElementsByClassName('desing-project')[0].classList.remove("desing-project-off");
}); */

function changeClass(obj,add,del){
	document.getElementsByClassName(obj)[0].classList.add(add);
	document.getElementsByClassName(obj)[0].classList.remove(del);
}

function scrollAnim(){
	document.getElementsByClassName('itemzag')[0].classList.add("proyv-off");
	document.getElementsByClassName('itemzag')[0].classList.remove("proyv-on");
}