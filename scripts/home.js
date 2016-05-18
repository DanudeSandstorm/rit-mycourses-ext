'use strict';

function removeContent() {

	var boxes = document.querySelectorAll(".d2l-homepage .d2l-box .d2l-box-layout")[0].children;
	boxes = [].slice.call(boxes);
	boxes.forEach(function(box) {
		console.log(box);
		var widget = box.getElementsByClassName("d2l-widget")[0];
		widget.parentNode.removeChild(widget);
	});
}

removeContent();
