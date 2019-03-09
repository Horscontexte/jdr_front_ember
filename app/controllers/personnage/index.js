import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionTo: function(item) {
      this.transitionToRoute('personnage.show', item.id);
    }
  }
});
