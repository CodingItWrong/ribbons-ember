import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';
import classic from 'ember-classic-decorator';

@classic
export default class BookModel extends Model {
  @attr name;
  @attr singularName;
  @attr abbreviation;
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
