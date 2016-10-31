'use strict';

//Function is always called
removeContent();

//Removes the top widgets from each column on the home page
function removeContent() {
    var widgets,
        boxes;

    //Grabs the two columns on the home page
    boxes = document.querySelectorAll(".d2l-homepage .d2l-box .d2l-box-layout")[0].children;
    
    //Grabs first column's first widget
    widgets = getWidgets(boxes[0]);

    //Grabs the widget header to place on the next box before removing
    var header = widgets[0].getElementsByClassName("d2l-widget-header")[0];
    widgets[1].insertBefore(header, widgets[1].firstChild);
    removeElement(widgets[0]);

    //Grabs the second column's first widget
    widgets = getWidgets(boxes[1]);
    removeElement(widgets[0]);

    //removes "role" word
    var role = boxes[0].getElementsByClassName("d2l-select-container")[0];
    var role_parent = role.parentElement.parentElement;
    removeElement(role.parentElement);
    role_parent.insertBefore(role, role_parent.firstChild);

}


function getWidgets(node) {
    return node.getElementsByClassName("d2l-widget");
}

function removeElement(element) {
    element.parentNode.removeChild(element);
}
