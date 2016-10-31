function getReduceData(callback) {
    chrome.storage.sync.get("course_reduce", function(data) {
        return callback(data["course_reduce"]);
    });
};
