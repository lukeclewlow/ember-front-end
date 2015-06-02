import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('tune', { genre_id: params.genre_id });
  }
});