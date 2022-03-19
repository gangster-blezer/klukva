dataInfo = [["","",""],["Шкаф компактный","Арт. 12345679","24 000"],["Шкаф компактный(new)","Арт. 228228228","32 000"]];

function openWin(el){
  	let top = window.getComputedStyle(el).top;
  	let right = window.getComputedStyle(el).right;
  	let id = el.getAttribute("data_id");
  	open = el.getAttribute("opened");
  	console.log(id);

  	if(open=="true"){
  		el.setAttribute("opened", "false");
  		let win = document.querySelector('div[data_w_id="'+id+'"]');
  		win.classList.add("win-off");
  		win.classList.remove("win-on");
  		win.remove();
  	}else{
  		el.setAttribute("opened", "true")
  		createWin(id,right,top,"teenager_first");
  	}
}


/*document.getElementsByClassName("plus")[0].addEventListener('mouseover', function() {
	openWin(this);
});

document.querySelector('div[data_w_id="'+1+'"]').addEventListener('mouseleave', function() {
	console.log("наведение");
	openWin(this);
}); */



function createWin(id,x,y,contaner){
	model = dataInfo[id];
	cont = document.getElementById(contaner);
	width = cont.offsetWidth;
	height = cont.offsetHeight;
	let win = document.createElement('div');
	win.className = "win win-off";
	win.classList.add("win-on");
	win.classList.remove("win-off");
	win.setAttribute("data_w_id", id);
	cont.append(win);
	let info = document.createElement('div');
	info.className = "info-win";
	win.append(info);
	let title = document.createElement('div');
	title.className = "zag10";
	title.innerHTML = model[0];
	info.append(title);

	let articul = document.createElement('div');
	articul.className = "articul-win";
	articul.innerHTML = model[1];
	info.append(articul);

	let win_price_cart = document.createElement('div');
	win_price_cart.className = "win-price-cart";
	info.append(win_price_cart);

	let price = document.createElement('div');
	price.className = "price-win";
	price.innerHTML = model[2] + "<span class='rub-win'>₽</span>";
	win_price_cart.append(price);

	let cart = document.createElement('div');
	cart.className = "cart-buy-win";
	win_price_cart.append(cart);

	win.style.top = (y.split("p")[0] * 100/height)+"%";
  	win.style.right = (x.split("p")[0] * 100/width)+"%";
  	console.log(y);
  	win.style.transform = "translate(100%,-100%)";

}

