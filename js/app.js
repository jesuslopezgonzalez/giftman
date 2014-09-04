App = Ember.Application.create();

App.Router.map(function() {
	this.routes('pato');
  // put your routes here
});

App.PatoRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
