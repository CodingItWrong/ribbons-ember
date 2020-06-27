import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ReadingControlComponent extends Component {
  @service store;

  get chapterToRead() {
    return this.args.reading.furthestReadChapter + 1;
  }

  @action
  async markNextChapterRead() {
    const { reading } = this.args;
    const chapterCompletion = this.store.createRecord('chapterCompletion', {
      reading,
      chapter: this.chapterToRead,
    });
    await chapterCompletion.save();
    await reading.reload();
  }

  @action
  async markComplete() {
    const { reading, onComplete } = this.args;
    reading.complete = true;
    await reading.save();
    onComplete();
  }
}
