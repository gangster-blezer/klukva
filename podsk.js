function openWin(el){
  	let top = window.getComputedStyle(el).top;
  	let right = window.getComputedStyle(el).right;
  	console.log(top);
  	document.getElementsByClassName("win")[0].style.top = top;
  	document.getElementsByClassName("win")[0].style.right = right;
  	document.getElementsByClassName("win")[0].classList.remove("win-off");
  	document.getElementsByClassName("win")[0].classList.add("win-on");
  	//document.getElementsByClassName("win")[0].style.transform = "translate("+x+"px,"+y+"px)";
}