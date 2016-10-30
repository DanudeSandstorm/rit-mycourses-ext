function getLoginData(bool) {
	chrome.storage.sync.get('auto_login', function(data) {
		return bool(data["auto_login"]);
	});
};
