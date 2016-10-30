navbarSpace();

chrome.storage.sync.get("course_reduce", function(data) {
    if (data["course_reduce"]) selectACourse();
});
