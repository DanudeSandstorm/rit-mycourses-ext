'use strict';

//Checks for user settings
getReduceData(function(bool) {
    if (bool) selectACourse();
});

//Reduces select a course list to currently enrolled courses
function selectACourse() {
    var course_menu = document.querySelector(".d2l-navigation-s-course-menu");
    var button = course_menu.querySelector(".d2l-dropdown-opener");

    button.addEventListener('click',
        waitForCourses.bind(this, function() {
            var currSemester = 0,
                prevCourses = [];

            //Selector for list of class items
            var courses = course_menu.querySelectorAll(".d2l-datalist-item");

            //Determines the current semester
            for (var i = 0; i < courses.length; i++) {
                var title = courses[0].querySelector(".d2l-datalist-item-content").title;
                var semester = title.substr(title.length - 4);

                if (!isNaN(semester) && semester > currSemester) currSemester = semester;
            }

            //Splits the current from the previous courses
            courses.forEach(function(course) {
                //Ignores pinned courses
                if (course.classList.contains("vui-selected")) return;

                var title = course.querySelector(".d2l-datalist-item-content").title;;
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
            console.log(course_menu);
            (course_menu.querySelectorAll(".d2l-datalist-item").length)
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
