// function openPopup(url) {
//     chrome.runtime.sendMessage({ command: "createWindow", params: { url: url, focused: true, type: 'popup' } });
// }

function getContentData(callback) {
	chrome.storage.sync.get("content_popout", function(data) {
		return callback(data["content_popout"]);
	});
};
