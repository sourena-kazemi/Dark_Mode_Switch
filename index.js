var dark_mode = false;
var root = document.querySelector(":root")
var checkbox_item = document.getElementsByClassName("checkbox__item")[0];
var checkbox_logo = document.getElementsByTagName("img")[0];
var title = document.getElementsByClassName("header__title")[0];

function checkbox(){
switch (dark_mode){
	case false:{
		dark_mode=true;
		root.style.setProperty("--bgc","#383838");
		root.style.setProperty("--tc","#FFFFFF");
		root.style.setProperty("--cc","#E2E2E2");
		root.style.setProperty("--cic","#555555");
		checkbox_item.style.left="60px";
		checkbox_logo.src="images/icons8-crescent-moon-100.svg";
		title.innerHTML="Dark Mode";
		break;
	}

	case true:{
		dark_mode=false;
		root.style.setProperty("--bgc","#F6F6F6");
		root.style.setProperty("--tc","#000000");
		root.style.setProperty("--cc","#555555");
		root.style.setProperty("--cic","#E2E2E2");
		checkbox_item.style.left="0";
		checkbox_logo.src="images/icons8-summer-100.svg";
		title.innerHTML="Light Mode";
		break;
	}
}
}