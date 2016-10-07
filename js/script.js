var Foods = Backbone.Model.extend({
	defaults: {
		title: '',
		calories: '',
		completed: false
	},
	initialize: function() {
		this.on('change', function() {
			console.log('Values for this model have changed');
		});
	}
});

var FoodCollection = Backbone.Collection.extend({
	model: Foods
});

var Food1 = new Foods({
	title: 'test'
});
console.log(Food1);

var search = function() {

	var appID = '60d9a1fe';
	var appKey = '3e5d99c2a199ab64d2349eaa8a920471';
	var searchTerm = "hamburger"
	var nutriURL = 'https://api.nutritionix.com/v1_1/search/{' + searchTerm + '}';

	var parameters = {
		phrase: 'taco',
		appId: appID,
		appKey: appKey,
		results: '0:10',
		fields: 'item_name,brand_name,item_id,brand_id'
	}
	var settings = {
		url: nutriURL,
		data: parameters,
		cache: true,
		dataType: 'json',
		callback: 'cb',
	};
	$.ajax(settings).done(function(results){
		console.log(results);
	})
};
search();

var View = Backbone.View.extend({

	tagName: 'li',
	todoTpl: _.template("Example template"),
	events: {

	},
	render: function() {
		this.$el.html('test')
	},
});

var Foodview = new View();
console.log(Foodview.el);

