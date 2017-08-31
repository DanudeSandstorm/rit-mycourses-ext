'use strict';

//Function is always called
window.addEventListener('DOMContentLoaded', function() {
	floatSideBar();
});

//Checks for user settings
getContentData(function(bool) {
	if (bool) attachObserver();
});

//ReplaceLinks observer on content loaded
function attachObserver() {
	var observer = new MutationObserver(function(mutations) {
		if (!loadmore()) {
			replaceLinks();
		}
	});

	window.addEventListener('DOMContentLoaded', function() {
		//If more content was loaded, mutation observer will be
		//notified anyway, no need to run replaceLinks() twice
		if (!loadmore()) {
			replaceLinks();
		}
		var target = document.getElementsByClassName("d2l-twopanelselector-wrapper")[0];
		//var target = document.querySelectorAll(".d2l-twopanelselector-wrapper .d2l-box")[1];
		var config = { childList: true, subtree: true };
		observer.observe(target, config);
	}, false);
}

//Presses the loadmore button for content
function loadmore() {
	var buttons = document.querySelectorAll('.d2l-loadmore-pager:not(.d2l-hidden)');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].click();
	}
	if (buttons.length > 0) {
		return true;
	}
	return false;
}

//Replaces content links with popout content links
function replaceLinks() {
	//For each link replace with onclick event for opening as popup
	document.getElementsByClassName('d2l-datalist')[0]
	.querySelectorAll('.d2l-datalist-item-content .d2l-link:not(.d2l-hidden):not(.replaced)')
	.forEach(function(link) {
		var url = link.href.replace("viewContent", "fullscreen");
		console.log(link);
		link.removeAttribute("href");
		link.className += " replaced";
		//onclick to the links
		link.addEventListener('click', openPopup.bind(this, url));
	});

}

function floatSideBar() {
	var side = document.querySelectorAll(".d2l-box.d2l-twopanelselector-side")[0];

	//Create new surrounding div
	var div = document.createElement('div');
	div.id = "content-menu";

	while (side.firstChild) {
		try {
			div.appendChild(side.children[0]);
		} catch (err) {}
		side.removeChild(side.firstChild);
	}

	side.appendChild(div);

	var modTree = document.getElementById("ContentModuleTree");
	modTree.style.maxHeight = (window.innerHeight - 180) + 'px';

	var target = document.getElementsByClassName("d2l-twopanelselector-wrapper")[0];
	//target = document.querySelector(".d2l-twopanelselector-wrapper .d2l-box-layout");
	document.addEventListener("scroll", function(e) {
		if (target.offsetTop - window.scrollY > 36) {
			div.classList.remove("fixed");
			//modTree.style.maxHeight = (window.innerHeight - 180) + 'px';
	  	}
	  	else {
	  		div.classList.add("fixed");
	  		//modTree.style.maxHeight = (window.innerHeight - 140) + 'px';
	  	}
	});
}

function openPopup(url) {
	var popup = window.open(url, "", "menubar=no, status=no, titlebar=no");
	//Janky code due to chrome being annoying with "window.open"
	popup.moveTo(0,0);
	popup.focus();
	popup.resizeTo((window.screen.availWidth / 2), window.screen.availHeight);
	// popup.onload = function() {

	// }
}
