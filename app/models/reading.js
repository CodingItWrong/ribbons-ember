import Model, { attr, belongsTo } from '@ember-data/model';
import classic from 'ember-classic-decorator';

@classic
export default class ReadingModel extends Model {
  @belongsTo('book') book;
  @attr('date') createdAt;
  @attr('date') completedAt;
  @attr furthestReadChapter;
  @attr complete;

  get allChaptersRead() {
    return this.furthestReadChapter >= this.book.get('numChapters');
  }

  get chapterToRead() {
    return this.furthestReadChapter + 1;
  }
}
