import { click, visit } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import { module, test } from 'qunit';

module('Acceptance | reading books', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it allows tracking readings', async function (assert) {
    this.server.create('book', {
      id: 1,
      name: 'Ruth',
      numChapters: 4,
    });

    await authenticateSession({ access_token: 'ABC123' });

    await visit('/');

    await click('[data-test-start-a-book-button]');

    await click('[data-test-book="1"]');

    assert.dom('[data-test-next-chapter]').hasText('Ruth 1');

    await click('[data-test-read-button]');
    assert.dom('[data-test-next-chapter]').hasText('Ruth 2');

    await click('[data-test-read-button]');
    await click('[data-test-read-button]');
    await click('[data-test-read-button]');
    assert.dom('[data-test-finished]').hasText('Ruth');

    await click('[data-test-mark-complete-button]');
    assert.dom('[data-test-no-readings]').exists();
  });
});
