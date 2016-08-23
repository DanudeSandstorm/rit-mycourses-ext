'use strict';

//Removes the top widgets from each column on the home page
function removeContent() {
	var widgets;

	//Grabs the two columns on the home page
	var boxes = document.querySelectorAll(".d2l-homepage .d2l-box .d2l-box-layout")[0].children;
	
	//Grabs first column's first widget
	widgets = getWidgets(boxes[0]);
	//Grabs the widget header to place on the next box before removing
	var header = widgets[0].getElementsByClassName("d2l-widget-header")[0];
	widgets[1].insertBefore(header, widgets[1].firstChild);
	removeWidget(widgets[0]);

	//Grabs the second column's first widget
	widgets = getWidgets(boxes[1]);
	removeWidget(widgets[0]);

	function getWidgets(node){
		return node.getElementsByClassName("d2l-widget");
	}

	function removeWidget(widget){
		widget.parentNode.removeChild(widget);
	}
}

removeContent();
