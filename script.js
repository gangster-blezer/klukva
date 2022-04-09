class anim{
	constructor(obj_class,count,on,off,target){
		this.obj_class = obj_class;
		this.count = count;
		this.on = on;
		this.off = off;
		this.target = target;
	}

	start(){
		for (var i = 0; i < this.count; i++) {
    		document.getElementsByClassName(this.obj_class)[i].classList.remove(this.off);
    		document.getElementsByClassName(this.obj_class)[i].classList.add(this.on);
    	}
	}

	visible() {
  // Все позиции элемента
  //console.log(this)
  var targetPosition = {
      top: window.pageYOffset + this.target.getBoundingClientRect().top,
      bottom: window.pageYOffset + this.target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && 
    targetPosition.top < windowPosition.bottom) {
    //console.clear();
    //console.log('Вы видите элемент');

    this.start();

  } else {
    //console.clear();
  };
};

}




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
	let phone = new anim('phone',1,"left-end2","left-start",document.getElementsByClassName('phone')[0]);
	let slider_anim = new anim('slide',3,"bottom-end","bottom-start",document.getElementsByClassName('slider')[0]); 
	let slider_black_anim = new anim('slblack',2,"bottom-end","bottom-start",document.getElementsByClassName('slider')[0]);
	let sl_arow_bk = new anim('arrow-top-sl-bk',1,"left-end2","left-start",document.getElementsByClassName('slider')[0]);
	let sl_arow_nx = new anim('arrow-top-sl-nx',1,"left-end2","left-start",document.getElementsByClassName('slider')[0]);


	let categories_menu = new anim('block',4,"proyv-end","proyv-start",document.getElementsByClassName('imgd')[0]);
	
	let zag_popular_anim = new anim('zag-pop',1,"left-end","left-start",document.getElementsByClassName('poplular-slider-track')[0]);
	//let text_popular_anim = new anim('popularinfo',1,"left-end","left-start",document.getElementsByClassName('poplular-slider-track')[0]);
	//let img_popular_anim = new anim('popular_first_img',1,"right-end","right-start",document.getElementsByClassName('poplular-slider-track')[0]);

	let about_us_anim = new anim('about-item',4,"proyv-end","proyv-start",document.getElementsByClassName('about-us')[0]);
	//let best_img_anim = new anim('best-slide',1,"left-end","left-start",document.getElementsByClassName('best-slider-track')[0]);

	let map_anim = new anim('yandexmap',1,"bottom-end","bottom-start",document.getElementsByClassName('map')[0]);
	let map_info_anim = new anim('map-info',1,"proyv-end","proyv-start",document.getElementsByClassName('map')[0]);

	let contact_us_zag_anim = new anim('contact-zag',1,"proyv-end","proyv-start",document.getElementsByClassName('contactus')[0]);
	let contact_us_img_anim = new anim('contact-img',1,"proyv-end1","proyv-start",document.getElementsByClassName('contactus')[0]);
	let contact_us_info_anim = new anim('contactus-info',1,"proyv-end2","proyv-start",document.getElementsByClassName('contactus')[0]);
	
	let video_anim = new anim('klukva-video',1,"proyv-end","proyv-start",document.getElementsByClassName('klukva-video')[0]);

	phone.visible();
	slider_anim.visible();
	slider_black_anim.visible();
	sl_arow_bk.visible();
	sl_arow_nx.visible();
	categories_menu.visible();
	zag_popular_anim.visible();
	//text_popular_anim.visible();
	//img_popular_anim.visible();
	about_us_anim.visible();
	//best_img_anim.visible();

	map_anim.visible();
	map_info_anim.visible();

	contact_us_zag_anim.visible();
	contact_us_img_anim.visible();
	contact_us_info_anim.visible();


	video_anim.visible();

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
	slider_anim.visible();
	slider_black_anim.visible();
	sl_arow_bk.visible();
	sl_arow_nx.visible();
  	categories_menu.visible();
  	zag_popular_anim.visible();
  	//text_popular_anim.visible();
  	//img_popular_anim.visible();
  	about_us_anim.visible();
  	//best_img_anim.visible();

  	map_anim.visible();
	map_info_anim.visible();

	contact_us_zag_anim.visible();
	contact_us_img_anim.visible();
	contact_us_info_anim.visible();
	
	video_anim.visible();
});

}