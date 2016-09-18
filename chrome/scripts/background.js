'use strict';

//http://stackoverflow.com/questions/26246601/wildcard-string-comparison-in-javascript
function matchRule(str, rule) {
    return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //Different checks for commands
        switch (request.command) {
            case 'createWindow':
                chrome.windows.create(request.params);
                break;
            case 'createTab':
                chrome.tabs.create(request.params);
                break;
            case 'default':
                break;
        }
    }
); 

// Using url parsing to determine response
// * Needs "tabs"
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if (!matchRule(sender.tab.url, "https://mycourses.rit.edu/d2l/home")){
//      sendResponse({script: "ritNavbar"});
//     }
// });

// Intercept request and perform different operation
// * Needs "webRequest", "webRequestBlocking"
// chrome.webRequest.onBeforeRequest.addListener(function(details) {
//  var url = details.url.replace("viewContent", "fullscreen");
//  chrome.windows.create({url:[url], focused: true, type: "panel"});
//  console.log(url);
//  return {cancel: true};
// },
// {urls: ["https://mycourses.rit.edu/d2l/le/content/*/viewContent/*"]});
