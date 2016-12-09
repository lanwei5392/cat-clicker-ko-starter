var ViewModel = function() {
	
	this.name = ko.observable('Tabby');
	this.clickCount = ko.observable(0);
	this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');


	this.incrementCounter = function() {
		this.clickCount(this.clickCount() +1);
	};

	this.title = ko.computed(function() {

		var title;
		var	clicks = this.clickCount();
		if (clicks < 10) {
			title = "Newbone";
		} else if (clicks < 20) {
			title = "Infant";
		} else if (clicks < 30) {
			title = "Child";
		} else if (clicks < 40) {
			title = "Teen";
		} else if (clicks < 50) {
			title = "Adult";
		} else {
			title = "Ninja";
		}
		return title;
	}, this);

};

ko.applyBindings(new ViewModel());