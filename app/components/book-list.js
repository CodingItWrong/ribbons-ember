import Component from '@glimmer/component';
import sortBy from 'lodash/sortBy';

export default class BookListComponent extends Component {
  get sortedBooks() {
    return sortBy(this.args.books.toArray(), ['numericId']);
  }
}
