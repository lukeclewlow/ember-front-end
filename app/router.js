import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
});

export default Router.map(function() {
  this.resource('tunes', function() {
    this.resource('tune', { path: '/:tune_id' });
  });
  this.route('tunes', function() {});
});