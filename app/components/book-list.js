import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';

export default class BookListComponent extends Component {
  sortProperties = Object.freeze(['numericId:asc']);

  @sort('args.books', 'sortProperties')
  sortedBooks;
}
