//TODO replace this with checking each toggle in form
var options = [ 
	{name: 'auto-login', text: 'Auto Login'}, 
	{name: 'course-reduce', text: 'Reduce Course List'}
];

document.addEventListener('DOMContentLoaded', function() {

	var options_form = document.getElementById("options");

	options.forEach(function(option) {

		var name = option.name;
		var input = createCheckBox(option);

		name = name.replace("-", "_");

		chrome.storage.sync.get(name, function(data) {
			data[name] ? input.checked = data[name] : input.checked = false;
		});

		input.addEventListener('change', function() {
			var obj = {};
			obj[name] = input.checked;
			chrome.storage.sync.set(obj);
		});
	});

	function createCheckBox(option) {
		var label = document.createElement('label');
		var input = document.createElement('input');

		input.id = option.name;
		input.name = option.name;
		input.type = 'checkbox';

		label.appendChild(input);
		label.appendChild(document.createTextNode(option.text))
		options_form.appendChild(label);
		options_form.appendChild(document.createElement('br'));

		return input;
	}

});

