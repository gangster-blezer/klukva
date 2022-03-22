class SuperSlider{
  constructor(trackClass,slideClass,mrg,anim){
    //this.track = document.getElementsByClassName(trackClass)[0];
    this.track = document.querySelector("."+trackClass);
    this.slideClass = slideClass;
    this.mrg = mrg;
    this.slides = document.getElementsByClassName(slideClass);
    this.slideWidth = document.querySelector("."+slideClass).offsetWidth;
    this.slidesCount = document.getElementsByClassName(slideClass).length;
    let firstSlide = this.slides[0].cloneNode(true);
    let lastSlide = this.slides[this.slidesCount-1].cloneNode(true);
    this.track.prepend(lastSlide);
    this.track.append(firstSlide);
    
    if (mrg=="full"){
      this.slideMargin = window.innerWidth - document.querySelector("."+slideClass).offsetWidth;
    }else{
      this.slideMargin = mrg;
    }
    
    this.num_slide = 0;
    this.anim = anim;
    this.setSlide(1);
    window.addEventListener('resize', this.resizeEv);
    this.track.addEventListener('mousedown', this.swipeStart);
    this.track.addEventListener('pointerdown', this.swipeStart);
    this.track.addEventListener('mouseleave', this.swipeEnd);
    
    //(document.querySelector("."+trackClass).offsetWidth - this.slideWidth)/5;
    //console.log((document.querySelector("."+trackClass).offsetWidth - (5*this.slideWidth)))
  }

  getSlidePath(num){
    return num*(this.slideWidth + this.slideMargin);
  }

  getTrX(obj){
    let tr = window.getComputedStyle(obj).transform.split(",")[4];
    
    if(tr==undefined){
      return 0;
    }else {
      return tr;
    }
     
  }

  setSlide(n,anim){
      this.track.classList.add(this.anim);
      
      if(n=="next"){
        n = this.num_slide+1;
      }else if(n=="back"){
        n = this.num_slide-1;
      } 

      if(this.posFinal!=0){
        this.track.removeEventListener('mousedown', this.swipeStart);
        this.track.removeEventListener('pointerdown', this.swipeStart);
      }

      

      let tran = -this.getSlidePath(n);
      this.track.setAttribute("style", "transform: translateX("+tran+"px);");
      this.num_slide = n;
      console.log("начало анимации")
      this.track.addEventListener('transitionend', this.transformEnd);
  }

  resizeEv = () => {
    this.slideWidth = document.querySelector("."+this.slideClass).offsetWidth;
    this.setSlide(this.num_slide);

    if (this.mrg=="full"){
      this.slideMargin = window.innerWidth - document.querySelector("."+this.slideClass).offsetWidth;
    }else{
      this.slideMargin = this.mrg;
    }
  } 

  transformEnd = () => {
    console.log("end anim" + this.num_slide);
    this.track.addEventListener('mousedown', this.swipeStart);
    this.track.addEventListener('pointerdown', this.swipeStart);
    this.track.removeEventListener('transitionend', this.transformEnd);
    if(this.num_slide==0){
      this.track.classList.remove(this.anim);
      this.track.setAttribute("style", "transform: translateX("+-this.getSlidePath(this.slidesCount)+"px);");
      this.num_slide=this.slidesCount;
    }else if(this.num_slide==this.slidesCount+1){
      this.track.classList.remove(this.anim);
      this.track.setAttribute("style", "transform: translateX("+-this.getSlidePath(1)+"px);");
      this.num_slide=1;
    }
  }

  swipeStart = () => {
    let evt = event.type.search('touch') !== -1 ? event.touches[0] : event;
    this.start_time = Date.now();
    this.track.classList.remove(this.anim);
    this.a = Math.abs(this.getTrX(this.track));
    this.posInit = this.posX1 = evt.clientX;
    this.posYInit = this.posY1 = evt.clientY;
    console.log("startswp");
    this.track.addEventListener('mousemove', this.swipeAction);
    this.track.addEventListener('pointermove', this.swipeAction);

    this.track.addEventListener('mouseup', this.swipeEnd);
    this.track.addEventListener('pointerup', this.swipeEnd);

  }


  swipeAction = () => {
    

    let evt = event.type.search('touch') !== -1 ? event.touches[0] : event;

    this.posY2 = this.posY1 - evt.clientY;
    this.posY1 = evt.clientY;
    this.posX2 = this.posX1 - evt.clientX;
    console.log("move");
    this.posX1 = evt.clientX;
      
    this.a = Number(this.a) + Number(this.posX2);
    this.track.setAttribute("style", "transform: translateX("+(-this.a)+"px);");
  }

  swipeEnd = () => {
    this.end_time = Date.now();
    this.time = this.end_time - this.start_time;

    this.posFinal = this.posInit - this.posX1;
    this.posYFinal = Math.abs(this.posYInit - this.posY1);
    this.speed_x = this.posFinal/this.time;
    
    //console.log(popularSlider.getTrX(document.getElementsByClassName("poplular-slider-track")[0]));
    
    if((this.posFinal > (this.slideWidth+this.slideMargin)/2)||this.speed_x > 0.5){
      this.setSlide(this.num_slide+1);
    }else if((this.posFinal < -(this.slideWidth+this.slideMargin)/2)||this.speed_x < -0.5){
        this.setSlide(this.num_slide-1);
    }else{
      this.setSlide(this.num_slide);
    }

    this.track.removeEventListener('mousemove', this.swipeAction);
    this.track.removeEventListener('mouseup', this.swipeEnd);
    
    this.track.removeEventListener('pointermove', this.swipeAction);
    this.track.removeEventListener('pointerup', this.swipeEnd);
  }

  mouseOutSlider = () => {
    console.log("моус");
  }
}



//var popularSlider = new SuperSlider("poplular-slider-track","popular","full","trans");
//console.log(popularSlider.GetEvent);

