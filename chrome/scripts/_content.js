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
			var target = document.getElementsByClassName("d2l-twopanelselector-wrapper")[0];
			//var target = document.querySelectorAll(".d2l-twopanelselector-wrapper .d2l-box")[1];
			var config = { childList: true, subtree: true };
			console.log(target);
			observer.observe(target, config);
		}, false);
	}
});
