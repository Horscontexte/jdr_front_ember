import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | personnage/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:personnage/show');
    assert.ok(route);
  });
});
