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

function openPopup(url) {
    chrome.runtime.sendMessage({ command: "createWindow", params: { url: url, focused: true, type: 'popup' } });
}

chrome.storage.sync.get("content_popout", function(data) {
	if (data["content_popout"]) {
		var observer = new MutationObserver(function(mutations) {
			console.log('test');
			replaceLinks();
		});

		window.addEventListener('DOMContentLoaded', function() {
			replaceLinks();
			var target = document.getElementsByClassName("d2l-body")[0];
			//var target = document.querySelectorAll(".d2l-twopanelselector-wrapper .d2l-box")[1];
			var config = { childList: true, substree: true };
			console.log(target);
			observer.observe(target, config);
		}, false);
	}
});
