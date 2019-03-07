import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | joueur/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:joueur/show');
    assert.ok(route);
  });
});
