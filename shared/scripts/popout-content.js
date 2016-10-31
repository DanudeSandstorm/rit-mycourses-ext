'use strict';

//Function is always called
popoutContent();

function popoutContent() {
	var header_height = removeHeader();
	fixHeight(header_height);

	//Reruns fixheight whenever window is resized
	var timeoutId = 0;
	window.addEventListener('resize', function() {
		if (timeoutId){
		    clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(function() {
		    fixHeight();
		    timeoutId = 0;
		}, 200);
	}, false);
}

function removeHeader() {
	var header = document.getElementsByClassName("d2l-popup-title")[0];
	var header_height = header.offsetHeight;
	header.parentNode.removeChild(header);
	return header_height;
}

function fixHeight(header_height = 0) {
	//Readjust height of view
	var popup_body = document.getElementsByClassName('d2l-popup-body')[0];
	var popup_body_height = popup_body.offsetHeight;
	//header_height is for the first time only
	var view_height = popup_body_height + header_height;
	popup_body.style.height = view_height + "px";
	popup_body.style.overflow = "hidden";


	//TODO this might need to be refactored
	//Readjust height of fileviewer
	var content_type = ['d2l-fileviewer-rendered-pdf','d2l-documentViewer-inline'];
	content_type.forEach(function(type){
		var content_body = document.getElementsByClassName(type)[0];
		if (content_body != null) {
			content_body.style.height = view_height + "px"; 
		}
	});
}
