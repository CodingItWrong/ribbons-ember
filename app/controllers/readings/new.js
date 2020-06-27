import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ReadingsNewController extends Controller {
  @service router;

  @action
  goHome() {
    this.router.transitionTo('index');
  }
}
