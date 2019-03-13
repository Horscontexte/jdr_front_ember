import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | joueur/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:joueur/index');
    assert.ok(controller);
  });
});
