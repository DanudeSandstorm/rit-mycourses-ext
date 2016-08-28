'use strict';

chrome.storage.sync.get('auto_login', function(data) {

	var button = document.getElementById("ritloginbutton");

	data["auto_login"] ? button.click() : button.focus();
});
