import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class BookModel extends Model {
  @attr name;
  @attr singularName;
  @attr numChapters;
  @attr('date') lastReadAt;

  @computed('id')
  get numericId() {
    return Number(this.id);
  }

  get nameForChapter() {
    return this.singularName || this.name;
  }
}
