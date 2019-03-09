import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  age: DS.attr('number'),
  job: DS.attr('string'),
  imgurl: DS.attr('string'),
  stats: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  publish: DS.attr('boolean')
});
