import { click, visit } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import { module, test } from 'qunit';

module('Acceptance | reading multiple books', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it allows reading multiple books at once', async function (assert) {
    this.server.create('book', {
      id: 1,
      name: 'Ruth',
      numChapters: 4,
    });
    this.server.create('book', {
      id: 2,
      name: 'Philippians',
      numChapters: 4,
    });

    await authenticateSession({ access_token: 'ABC123' });

    await visit('/');

    await click('[data-test-start-a-book-button]');
    await click('[data-test-book="1"]');
    await click('[data-test-start-another-book-button]');
    await click('[data-test-book="2"]');

    assert.dom('[data-test-reading="1"]').hasText('Ruth 1');
    assert.dom('[data-test-reading="2"]').hasText('Philippians 1');

    await click('[data-test-read-button="2"]');
    assert.dom('[data-test-reading="2"]').hasText('Philippians 2');

    await click('[data-test-read-button="2"]');
    await click('[data-test-read-button="2"]');
    await click('[data-test-read-button="2"]');
    assert.dom('[data-test-reading="2"]').hasText('Philippians');

    await click('[data-test-complete-button="2"]');
    assert.dom('[data-test-reading="2"]').doesNotExist();
  });
});
