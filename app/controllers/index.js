import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service router;

  get hasMultipleReadings() {
    return this.model.length > 1;
  }

  @action
  goToNewReadings() {
    this.router.transitionTo('readings.new');
  }
}
