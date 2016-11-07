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
		loadmore();
		replaceLinks();
	});

	window.addEventListener('DOMContentLoaded', function() {
		loadmore();
		replaceLinks();
		var target = document.getElementsByClassName("d2l-twopanelselector-wrapper")[0];
		//var target = document.querySelectorAll(".d2l-twopanelselector-wrapper .d2l-box")[1];
		var config = { childList: true, subtree: true };
		observer.observe(target, config);
	}, false);
}

function loadmore() {
	var buttons = document.querySelectorAll('.d2l-loadmore-pager:not(.d2l-hidden)');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].click();
	}
}

//Replaces content links with popout content links
function replaceLinks() {
	//For each link replace with onclick event \
	//that fires create window message
	document.getElementsByClassName('d2l-datalist')[0]
	.querySelectorAll('.d2l-datalist-item-content .vui-link-main')
	.forEach(function(link) {
		var url = link.href.replace("viewContent", "fullscreen");
		link.removeAttribute("href");

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

	var target = document.getElementsByClassName("d2l-twopanelselector-wrapper")[0];
	//target = document.querySelector(".d2l-twopanelselector-wrapper .d2l-box-layout");
	document.addEventListener("scroll", function(e) {
		if (target.offsetTop - window.scrollY > 36) {
			div.classList.remove("fixed");
	  	} 
	  	else {
	  		div.classList.add("fixed");
	  	}  
	});
}
