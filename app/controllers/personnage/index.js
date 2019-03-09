import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionToPersonnage: function(item) {
      this.transitionToRoute('personnage.show', item.id);
    }
  }
});
