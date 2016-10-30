'use strict';

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