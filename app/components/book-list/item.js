import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookListItemComponent extends Component {
  @service store;

  @action
  async startReading() {
    const { book } = this.args;
    const reading = this.store.createRecord('reading', { book });
    await reading.save();
    this.args.onChoose();
  }
}
