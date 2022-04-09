var open = false;

document.getElementsByClassName("testopen")[0].addEventListener('click', function(){
    if(!open){
        document.getElementsByClassName("testopenimg")[0].setAttribute("src","img/teenager-modul/slanec-metal/items/opened/CC51R.png");
        this.classList.add("elips-btn-on");
        open = true;
    }else{
        document.getElementsByClassName("testopenimg")[0].setAttribute("src","img/teenager-modul/slanec-metal/items/CC51R.png");
        this.classList.remove("elips-btn-on");
        open = false;
    }

});

var open1 = false;

document.getElementsByClassName("testopen")[1].addEventListener('click', function(){
    if(!open1){
        document.getElementsByClassName("testopenimg")[1].setAttribute("src","img/teenager-modul/slanec-metal/items/opened/MC25.png");
        this.classList.add("elips-btn-on");
        open1 = true;
    }else{
        document.getElementsByClassName("testopenimg")[1].setAttribute("src","img/teenager-modul/slanec-metal/items/MC25.png");
        this.classList.remove("elips-btn-on");
        open1 = false;
    }

});

var open2 = false;

document.getElementsByClassName("testopen")[2].addEventListener('click', function(){
    if(!open2){
        document.getElementsByClassName("testopenimg")[2].setAttribute("src","img/teenager-modul/slanec-metal/items/opened/MC536R.png");
        this.classList.add("elips-btn-on");
        open2 = true;
    }else{
        document.getElementsByClassName("testopenimg")[2].setAttribute("src","img/teenager-modul/slanec-metal/items/MC536R.png");
        this.classList.remove("elips-btn-on");
        open2 = false;
    }

});

var open3 = false;

document.getElementsByClassName("testopen")[3].addEventListener('click', function(){
    if(!open3){
        document.getElementsByClassName("testopenimg")[3].setAttribute("src","img/teenager-modul/scroll-slider/opened/3.png");
        this.classList.add("elips-btn-on");
        open3 = true;
    }else{
        document.getElementsByClassName("testopenimg")[3].setAttribute("src","img/teenager-modul/scroll-slider/3.png");
        this.classList.remove("elips-btn-on");
        open3 = false;
    }

});