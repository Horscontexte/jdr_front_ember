import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionToJoueur: function(item) {
      console.log("ITEM", item)
      this.transitionToRoute('joueur.show', item.id);

    }
  }
});
