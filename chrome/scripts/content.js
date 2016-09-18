'use strict';

//Replaces content links with popout content links
function replaceLinks(openType) {
	//For each link replace with onclick event \
	//that fires create window message
	document.getElementsByClassName('d2l-datalist')[0]
	.querySelectorAll('.d2l-datalist-item-content .vui-link-main')
	.forEach(function(link) {
		var url = link.href.replace("viewContent", "fullscreen");
		link.removeAttribute("href");

		//onclick to the links
		link.addEventListener('click', openType.bind(this, url));
	});

}

function openPopup(url) {
    chrome.runtime.sendMessage({ command: "createWindow", params: { url: url, focused: true, type: 'popup' } });
}

function openTab(url) {
	chrome.runtime.sendMessage({ command: "createTab", params: {url: url, active: false}});
}

chrome.storage.sync.get("content_popout", function(data) {
	if (data["content_popout"]) replaceLinks(openPopup);
});

chrome.storage.sync.get("content_tab", function(data) {
	if (data["content_tab"]) replaceLinks(openTab);
});
