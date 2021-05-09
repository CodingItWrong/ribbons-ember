import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class ReadingNotStartedComponent extends Component {
  @service router;

  @action
  goToNewReadings() {
    this.router.transitionTo('readings.new');
  }
}
