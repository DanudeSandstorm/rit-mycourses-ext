function getLoginData(callback) {
	chrome.storage.sync.get('auto_login', function(data) {
		return callback(data["auto_login"]);
	});
};
