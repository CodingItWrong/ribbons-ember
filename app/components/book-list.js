import Component from '@glimmer/component';
import { action } from '@ember/object';
import { sort } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class BookListComponent extends Component {
  @service store;

  sortProperties = Object.freeze(['numericId:asc']);

  @sort('args.books', 'sortProperties')
  sortedBooks;

  @action
  async startReading(book) {
    const reading = this.store.createRecord('reading', { book });
    await reading.save();
    this.args.onChoose();
  }
}
