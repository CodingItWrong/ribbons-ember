import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

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
