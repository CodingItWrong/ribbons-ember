import Model, { attr } from '@ember-data/model';
import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';

@classic
export default class BookModel extends Model {
  @attr name;
  @attr singularName;
  @attr numChapters;
  @attr('date') lastReadAt;

  @computed('id')
  get numericId() {
    return Number(this.id);
  }

  @computed('singularName', 'name')
  get nameForChapter() {
    return this.singularName || this.name;
  }
}
