import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionToDocument: function(item) {
      this.transitionToRoute('document.show', item.id);
    }
  }
});
