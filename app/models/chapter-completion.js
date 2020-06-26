import Model, { attr, belongsTo } from '@ember-data/model';

export default class ChapterCompletionModel extends Model {
  @belongsTo('reading') reading;
  @attr chapter;
  @attr('date') createdAt;
}
