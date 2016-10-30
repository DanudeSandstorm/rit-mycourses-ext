'use strict';
var button = document.getElementById("ritloginbutton");

getLoginData(function(bool) {
	bool ? button.click() : button.focus();
});
