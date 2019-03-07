import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | lieu/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:lieu/index');
    assert.ok(route);
  });
});
