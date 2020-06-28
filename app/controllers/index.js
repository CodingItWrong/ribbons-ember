import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service router;

  get hasMultipleReadings() {
    return this.model.length > 1;
  }
}
