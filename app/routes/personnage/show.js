import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.log('YO', this.store.findRecord('personnage', params.personnage_id))
    console.log('yo2', params)
    return this.store.findRecord('personnage', params.personnage_id);
  }
});
