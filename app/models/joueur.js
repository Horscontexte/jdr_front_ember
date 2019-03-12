import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  imgurl: DS.attr('string'),
  job: DS.attr('string'),
  nation: DS.attr('string'),
  from: DS.attr('string'),
  pm: DS.attr('number'),
  pv: DS.attr('number'),
  stats: DS.attr(),
  ecole: DS.attr('string'),
  diplome: DS.attr('string'),
  sm: DS.attr('number'),
  comp: DS.attr(),
  arme: DS.attr('string'),
  publish: DS.attr('boolean'),
});
