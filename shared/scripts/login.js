'use strict';

//Will either "auto-login" or focus on the login button
var button = document.getElementById("ritloginbutton");

//Checks for user settings
getLoginData(function(bool) {
	bool ? button.click() : button.focus();
});
