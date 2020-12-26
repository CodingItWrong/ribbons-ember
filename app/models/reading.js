import Model, { attr, belongsTo } from '@ember-data/model';
import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';

@classic
export default class ReadingModel extends Model {
  @belongsTo('book') book;
  @attr('date') createdAt;
  @attr('date') completedAt;
  @attr furthestReadChapter;
  @attr complete;

  @computed('book.numChapters', 'furthestReadChapter')
  get allChaptersRead() {
    return this.furthestReadChapter >= this.book.get('numChapters');
  }

  @computed('furthestReadChapter')
  get chapterToRead() {
    return this.furthestReadChapter + 1;
  }
}
