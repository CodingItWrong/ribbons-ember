import Model, { attr, belongsTo } from '@ember-data/model';
import classic from 'ember-classic-decorator';

@classic
export default class ChapterCompletionModel extends Model {
  @belongsTo('reading') reading;
  @attr chapter;
  @attr('date') createdAt;
}
