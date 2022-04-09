class SuperSlider{
  constructor(trackClass,slideClass,mrg,anim,sliderDots,ActiveDot){
    this.track = document.querySelector("."+trackClass);
    this.slideClass = slideClass;
    this.mrg = mrg;
    this.slides = document.getElementsByClassName(slideClass);
    this.slideWidth = document.querySelector("."+slideClass).offsetWidth;
    console.log(this.slideWidth)
    this.slideWidthnew = Number(getComputedStyle(document.querySelector("."+slideClass)).width.split("px")[0])
    
    this.slidesCount = document.getElementsByClassName(slideClass).length;
    //this.track.style.width = 
    let firstSlide = this.slides[0].cloneNode(true);
    let lastSlide = this.slides[this.slidesCount-1].cloneNode(true);
    this.track.prepend(lastSlide);
    this.track.append(firstSlide);
    this.sliderDots = document.getElementsByClassName(sliderDots);
    this.activeDot = ActiveDot;
    this.top_coord = this.track.getBoundingClientRect().top;
    
    if (mrg=="full"){
      this.slideMargin = window.innerWidth - document.querySelector("."+slideClass).offsetWidth;
    }else{
      this.slideMargin = Number(getComputedStyle(document.querySelector("."+slideClass)).marginRight.split("px")[0]);
    }
    
    //this.track.style.width = (this.slideWidth + this.slideMargin) * (this.slidesCount+2)+"px";
    console.log(this.slideWidth + this.slideMargin)
    this.num_slide = 0;
    this.anim = anim;
    this.setSlide(1);
    window.addEventListener('resize', this.resizeEv);
    this.track.addEventListener('pointerdown', this.swipeStart);
    //this.track.addEventListener('mouseleave', this.swipeEnd);
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

      if(this.sliderDots!="false"){
        //this.sliderDots[n-1].classList.add(this.activeDot);
      }


      let tran = -this.getSlidePath(n);
      this.track.style.transform = "translateX("+tran+"px)";
      this.num_slide = n;
      
      this.track.addEventListener('transitionend', this.transformEnd);
  }

  resizeEv = () => {
    this.slideWidth = document.querySelector("."+this.slideClass).offsetWidth;
    

    if (this.mrg=="full"){
      this.slideMargin = window.innerWidth - document.querySelector("."+this.slideClass).offsetWidth;
    }else{
      this.slideMargin = Number(getComputedStyle(document.querySelector("."+this.slideClass)).marginRight.split("px")[0]);
    }
    //this.track.style.width = (this.slideWidth + this.slideMargin) * (this.slidesCount+2)+"px";
    this.setSlide(this.num_slide);
    console.log("установлен по идее")
  } 

  transformEnd = () => {
    console.log("end anim" + this.num_slide);
    this.track.addEventListener('pointerdown', this.swipeStart);
    this.track.removeEventListener('transitionend', this.transformEnd);
    if(this.num_slide==0){
      this.track.classList.remove(this.anim);
      this.track.style.transform = "translateX("+-this.getSlidePath(this.slidesCount)+"px)";
      this.num_slide=this.slidesCount;
    }else if(this.num_slide==this.slidesCount+1){
      this.track.classList.remove(this.anim);
      this.track.style.transform = "translateX("+-this.getSlidePath(1)+"px)";
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
    this.track.addEventListener('pointermove', this.swipeAction);

    this.track.addEventListener('pointerup', this.swipeEnd);

  }


  swipeAction = () => {
    

    let evt = event.type.search('touch') !== -1 ? event.touches[0] : event;

    this.posY2 = this.posY1 - evt.clientY;
    this.posY1 = evt.clientY;
    this.posX2 = this.posX1 - evt.clientX;
    this.posX1 = evt.clientX;
      
    this.a = Number(this.a) + Number(this.posX2);
    this.track.style.transform = "translateX("+(-this.a)+"px)";
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
    
  }
}

