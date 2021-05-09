import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class AppToolbarComponent extends Component {
  @service session;

  @action
  logOut() {
    this.session.invalidate();
  }
}
