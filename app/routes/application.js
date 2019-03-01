import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    console.log('YO',this.store.findAll('personnage') )
    return this.store.findAll('personnage');
  }
});
