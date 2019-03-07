import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  imgurl: DS.attr('string'),
  description: DS.attr('string'),
  found: DS.attr('string'),
  publish: DS.attr('boolean')
});
