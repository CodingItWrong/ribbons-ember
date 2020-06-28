import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ReadingNotStartedComponent extends Component {
  @service router;

  @action
  goToNewReadings() {
    this.router.transitionTo('readings.new');
  }
}
