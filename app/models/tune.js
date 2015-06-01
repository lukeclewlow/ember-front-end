import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr('string'),
  title: DS.attr('string'),
  link: DS.attr('string'),
  blog: DS.attr('string')
});