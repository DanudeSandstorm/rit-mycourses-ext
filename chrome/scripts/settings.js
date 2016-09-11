//TODO replace this with checking each toggle in form
var options = ['auto-login', 'course-reduce'];

document.addEventListener('DOMContentLoaded', function() {

	options.forEach(function(option) {
		var input = document.getElementById(option);

		option = option.replace("-", "_");

		chrome.storage.sync.get(option, function(data) {
			data[option] ? input.checked = data[option] : input.checked = false;
		});

		input.addEventListener('change', function() {
			var obj = {};
			obj[option] = input.checked;
			chrome.storage.sync.set(obj);
		});
	});

});
