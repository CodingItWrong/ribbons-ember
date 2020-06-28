import { module, test } from 'qunit';
import {
  visit,
  click,
  // eslint-disable-next-line no-unused-vars
  pauseTest,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

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

    await click('[data-test-book="1"] button');

    assert.dom('[data-test-next-chapter]').hasText('Ruth 1');

    await click('[data-test-read-button]');
    assert.dom('[data-test-next-chapter]').hasText('Ruth 2');

    await click('[data-test-read-button]');
    await click('[data-test-read-button]');
    await click('[data-test-read-button]');
    assert.dom('[data-test-finished]').hasText('Ruth');
  });
});
