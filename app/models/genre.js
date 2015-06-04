import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	tunes: DS.hasMany('tune', { async: true } )
});
