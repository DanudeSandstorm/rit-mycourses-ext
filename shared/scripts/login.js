'use strict';

//Checks for user settings
//Will either "auto-login" or focus on the login button
getLoginData(function(bool) {
    var button = document.querySelector(".btn-hold .btn.m-btn");
    console.log(button);
	bool ? button.click() : button.focus();
});
