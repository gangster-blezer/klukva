class anim{
	constructor(obj_class,count,on,off){
		this.obj_class = obj_class;
		this.count = count;
		this.on = on;
		this.off = off;
	}

	set(){
		for (var i = 0; i < this.count; i++) {
    		document.getElementsByClassName(this.obj_class)[i].classList.add(this.off);
    	}
	}

	start(){
		for (var i = 0; i < this.count; i++) {
    		document.getElementsByClassName(this.obj_class)[i].classList.remove(this.off);
    		document.getElementsByClassName(this.obj_class)[i].classList.add(this.on);
    	}
	}
}


let categories_menu = new anim('block',4,"proyv-on","proyv-off");

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

	categories_menu.set();

	/*document.getElementsByClassName('block')[0].classList.add("proyv-off");
	document.getElementsByClassName('block')[1].classList.add("proyv-off");
	document.getElementsByClassName('block')[2].classList.add("proyv-off");
	document.getElementsByClassName('block')[3].classList.add("proyv-off");*/

	var element = document.getElementsByClassName('items')[0];

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    console.clear();
    console.log('Вы видите элемент');

    categories_menu.start();

  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);

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

};

/*document.getElementsByClassName('desing-project')[0].addEventListener("mouseover", function( event ) {
	document.getElementsByClassName('desing-project')[0].classList.add("desing-project-on");
	document.getElementsByClassName('desing-project')[0].classList.remove("desing-project-off");
}); */

function changeClass(obj,add,del){
	document.getElementsByClassName(obj)[0].classList.add(add);
	document.getElementsByClassName(obj)[0].classList.remove(del);
}

