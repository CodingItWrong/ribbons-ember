import Model, { attr } from '@ember-data/model';
import classic from 'ember-classic-decorator';

@classic
export default class BookModel extends Model {
  @attr name;
  @attr singularName;
  @attr numChapters;
  @attr('date') lastReadAt;

  get numericId() {
    return Number(this.id);
  }

  get nameForChapter() {
    return this.singularName || this.name;
  }
}
