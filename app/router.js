import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('tunes', function() {
    this.resource('tune', { path: '/:tune_id' });
    this.resource('alltunes', { path: '/genres/:genre_id'});
  });

  this.resource('genres', function() {
  	this.resource('genre', { path: ':genre_id'});
  });
});

export default Router;