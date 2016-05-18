'use strict';

function onPageLoad(event)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    	console.log(tabs[0].url);
    	if (matchRuleShort(tabs[0].url, "https://mycourses.rit.edu/d2l/home/*")){
    		chrome.tabs.sendMessage(tabs[0].id, {message: "ritNavbar"});
    	}
    });
}

//Short code
function matchRuleShort(str, rule) {
  return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
}
//http://stackoverflow.com/questions/26246601/wildcard-string-comparison-in-javascript
//Explanation code
function matchRuleExpl(str, rule) {
  // "."  => Find a single character, except newline or line terminator
  // ".*" => Matches any string that contains zero or more characters
  rule = rule.split("*").join(".*");

  // "^"  => Matches any string with the following at the beginning of it
  // "$"  => Matches any string with that in front at the end of it
  rule = "^" + rule + "$"

  //Create a regular expression object for matching string
  var regex = new RegExp(rule);

  //Returns true if it finds a match, otherwise it returns false
  return regex.test(str);
}

document.addEventListener("DOMContentLoaded", onPageLoad, true);
