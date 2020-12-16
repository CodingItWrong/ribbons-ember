import JSONAPIAdapter from '@ember-data/adapter/json-api';
// eslint-disable-next-line ember/no-mixins
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { computed } from '@ember/object';
import ENV from '../config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter.extend(
  DataAdapterMixin,
) {
  host = ENV.apiHost;

  // TODO: remove this @computed decorator once we are migrated off Ember-Paper.
  // Ember-Paper causes an "attempted to update" error upon login, preventing
  // us from testing that this computed property really works without the
  // decorator. It did not work in the past.
  @computed('session.{isAuthenticated,data.authenticated.access_token}')
  get headers() {
    let headers = {};

    if (this.session.isAuthenticated) {
      const authHeader = `Bearer ${this.session.data.authenticated.access_token}`;
      headers['Authorization'] = authHeader;
    }

    return headers;
  }
}
