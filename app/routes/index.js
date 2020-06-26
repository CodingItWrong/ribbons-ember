import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  model() {
    return this.store.query('reading', {
      filter: { complete: false },
      include: 'book',
    });
  }

  @action
  refresh() {
    super.refresh();
  }
}
