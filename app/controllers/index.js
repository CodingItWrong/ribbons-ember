import Controller from '@ember/controller';

export default class IndexController extends Controller {
  get hasMultipleReadings() {
    return this.model.length > 1;
  }
}
