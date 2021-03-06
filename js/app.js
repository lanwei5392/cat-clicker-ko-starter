var Cat = function() {
	
	this.name = ko.observable('Tabby');
	this.clickCount = ko.observable(0);
	this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	this.nicknames = ko.observableArray(['Tab', 'T-Bone', 'Mr. T', 'Catty Cat']);

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

var ViewModel = function() {

	this.currentCat = ko.observable(new Cat());

	var self = this;
	
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() +1);
	};
};

ko.applyBindings(new ViewModel());