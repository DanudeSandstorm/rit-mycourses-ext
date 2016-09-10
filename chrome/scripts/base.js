'use strict';

function navbarSpace() {
    var navbar = document.getElementsByClassName("d2l-navbar-container")[0];
    if (navbar != null) {
        navbar.style.borderTop = "0";
    }
}

function selectACourse() {
    var button = document.querySelectorAll(".d2l-minibar .d2l-menuflyout-opener")[0];
    var datalist = ".d2l-menuflyout-contents .d2l-datalist";

    button.addEventListener('click',
        waitForCourses(function() {
            var courses = document.querySelectorAll(datalist + " > .d2l-datalist-item");
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
        })
    );

    //Wait for the elements to load
    function waitForCourses(callBack) {
        window.setTimeout(function() {
            if (document.querySelectorAll(datalist).length) {
                callBack();
            }
            else {
                waitForCourses(callBack);
            }
        }, 200);
    }
}

function hideCourses(courses) {

    courses.forEach(function(course) {
        course.style.display = 'none';
    });

    //Create showmore button
}

function showCourses(courses) {

    courses.forEach(function(course) {
        course.style.display = 'block';
    });

    //create hide button
}

navbarSpace();

selectACourse();

