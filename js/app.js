App = Ember.Application.create();


var gifts =[
	{ 
		id: '1',
  		title: "spiderCAT",
  		url: "https://33.media.tumblr.com/71bce2e6e351d5b6efe6b78da1cf6620/tumblr_nb0qjc7Fit1tv4atfo1_500.gif",
  		tags:""
  	},
  	{
  		id: '2',
  		title: "no es mi problema",
  		url: "http://i.imgur.com/uBopKev.gif",
  		tags:""
  	}
];

App.Router.map(function(){
	this.route('about');
	this.resource('gifts',function() {
		this.resource('gift',{path: ':gift_id'});
	});
});

//Definimos el modelo a devolver para la ruta posts. Convención de nombres
App.GiftsRoute = Ember.Route.extend({
  model: function() {
    return gifts;
  }
});

App.GiftRoute = Ember.Route.extend({
  model: function(params) {
    return gifts.findBy('id', params.gift_id);
  }
});

///CONTROLLER

App.GiftController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
    	this.set('isEditing', true);
    },
	doneEditing: function() {
    	this.set('isEditing', false);
    }
  }
});