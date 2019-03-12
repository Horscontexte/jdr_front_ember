import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionToLieu: function(item) {
      this.transitionToRoute('lieu.show', item.id);
    }
  }
});
