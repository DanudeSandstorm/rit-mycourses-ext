'use strict';

function ritNavbar() {
	//Reduces height of navbar
	var rit_navbar = document.querySelectorAll(".d2l-navbar-container .d2l-box-layout > .d2l-box");
	var mylibrary = rit_navbar[0].querySelectorAll(".d2l-box.d2l-box-h")[1];
	
	var class_navbar = rit_navbar[3].querySelector(".d2l-box-layout");
	class_navbar.appendChild(mylibrary);

	rit_navbar[0].parentNode.removeChild(rit_navbar[0]);

	//Removes unnessisary portion of class title
	var class_title = document.getElementsByClassName("d2l-navbar-title")[0];
	class_title.innerHTML = class_title.innerHTML.replace(/ *\([^)]*\) */g, "").trim();

}

ritNavbar();
