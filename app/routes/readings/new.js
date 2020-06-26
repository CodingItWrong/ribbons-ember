import Route from '@ember/routing/route';

export default class ReadingsNewRoute extends Route {
  model() {
    return this.store.findAll('book');
  }
}
