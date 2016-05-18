'use strict';

//http://stackoverflow.com/questions/26246601/wildcard-string-comparison-in-javascript
function matchRule(str, rule) {
  return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (matchRule(sender.tab.url, "https://mycourses.rit.edu/d2l/home/*")){
    	sendResponse({script: "ritNavbar"});
    }
});
