'use strict';

function navbarSpace() {
    var navbar = document.getElementsByClassName("d2l-navbar-container")[0];
    if (navbar != null) {
        navbar.style.borderTop = "0";
    }
}

function selectACourse() {
    var button = document.querySelectorAll(".d2l-minibar .d2l-menuflyout-opener")[0];

    button.addEventListener('click',
        waitForCourses(function() {
            var courses = document.querySelectorAll(".d2l-menuflyout-contents .d2l-datalist > .d2l-datalist-item");
            var currSemester = 0,
                currCourses = [],
                prevCourses = [];

            //Determines the current semester
            for (var i = 0; i < courses.length; i++) {
                var title = courses[i].children[0].title;
                var semester = title.substr(title.length - 4);

                if (!isNaN(semester)) {
                    if (semester > currSemester) currSemester = semester;
                }
            }

            //Splits the current from the previous courses
            courses.forEach(function(course) {
                //Ignores pinned courses
                if (course.classList.contains("vui-selected")) return;

                var title = course.children[0].title;
                var semester = title.substr(title.length - 4);

                if (isNaN(semester)) return;
                semester == currSemester ? currCourses.push(course) : prevCourses.push(course);
            });

            hideCourses(prevCourses);

            removeClassSearchButton();

        })
    );

    //Wait for the elements to load
    function waitForCourses(callBack) {
        window.setTimeout(function() {
            if (document.querySelectorAll(".d2l-menuflyout-contents .d2l-datalist").length) {
                callBack();
            }
            else {
                waitForCourses(callBack);
            }
        }, 200);
    }
}

function removeClassSearchButton() {
    var courseSelector = document.getElementById("courseSelectorId");
    var parent = courseSelector.children[1];
    removeElement(parent.getElementsByClassName("vui-link")[0]);

    function removeElement(element) {
        element.parentNode.removeChild(element);
    }
}

function hideCourses(courses) {

    courses.forEach(function(course) {
        course.style.display = 'none';
    });

    //Create showmore button
    var courseSelector = document.getElementById("courseSelectorId");
    var parent = courseSelector.children[1];
    var button = document.createElement("a");
    button.appendChild(document.createTextNode("Show All Classes"));
    button.role = "button";
    button.classList.add("vui-button", "d2l-button", "d2l-loadmore-pager");
    courseSelector.appendChild(button);
}

function showCourses(courses) {

    courses.forEach(function(course) {
        course.style.display = 'block';
    });

    //create hide button
}

navbarSpace();

selectACourse();

