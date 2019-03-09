import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  histoire: DS.attr('string'),
  climat: DS.attr('string'),
  howto: DS.attr('string'),
  imgurl: DS.attr('string'),
  hotstop: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  publish: DS.attr('boolean'),
});
