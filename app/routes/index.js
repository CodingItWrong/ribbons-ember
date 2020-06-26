import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service session;

  model() {
    if (this.session.get('isAuthenticated')) {
      return this.store.query('reading', {
        filter: { complete: false },
        include: 'book',
      });
    } else {
      return null;
    }
  }

  @action
  refresh() {
    super.refresh();
  }
}
