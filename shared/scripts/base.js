'use strict';

function navbarSpace() {
    var navbar = document.getElementsByClassName("d2l-navbar-container")[0];
    if (navbar != null) {
        navbar.style.borderTop = "0";
    }
}

function selectACourse() {
    var button = document.getElementsByClassName("d2l-menuflyout-opener")[0];

    button.addEventListener('click',
        waitForCourses.bind(this, function() {
            var currSemester = 0,
                prevCourses = [];

            //Selector for list of class items
            var courses = document.getElementsByClassName("d2l-menuflyout-contents")[0]
                                .querySelectorAll(".d2l-datalist > .d2l-datalist-item");

            //Determines the current semester
            for (var i = 0; i < courses.length; i++) {
                var title = courses[i].children[0].title;
                var semester = title.substr(title.length - 4);

                if (!isNaN(semester) && semester > currSemester) currSemester = semester;
            }

            //Splits the current from the previous courses
            courses.forEach(function(course) {
                //Ignores pinned courses
                if (course.classList.contains("vui-selected")) return;

                var title = course.children[0].title;
                var semester = title.substr(title.length - 4);

                if (isNaN(semester) || semester != currSemester) prevCourses.push(course);
            });

            //Hides previous courses
            hideCourses(prevCourses);

        })
    );

    //Wait for the elements to load
    function waitForCourses(callBack) {
        window.setTimeout(function() {
            (document.querySelectorAll(".d2l-menuflyout-contents .d2l-datalist").length)
                ? callBack()
                : waitForCourses(callBack);
        }, 200);
    }
}

function coursesToggleButton(text, toggleFunction) {
    var courseSelector = document.getElementById("courseSelectorId");
    var parent = courseSelector.children[1];

    //Remove current button
    removeElement(parent.children[0]);

    var button = document.createElement("a");
    button.appendChild(document.createTextNode(text));
    button.role = "button";
    button.classList.add("vui-button", "d2l-button", "d2l-loadmore-pager");
    button.addEventListener("click", toggleFunction);
    parent.appendChild(button);

    function removeElement(element) {
        element.parentNode.removeChild(element);
    }
}

function hideCourses(courses) {

    courses.forEach(function(course) {
        course.style.display = 'none';
    });

    //Create showmore button
    coursesToggleButton("Show All Courses", showCourses.bind(this, courses));
}

function showCourses(courses) {

    courses.forEach(function(course) {
        course.style.display = 'block';
    });

    //create hide button
    coursesToggleButton("Hide Courses", hideCourses.bind(this, courses));
}
