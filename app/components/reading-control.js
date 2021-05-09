import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class ReadingControlComponent extends Component {
  @service store;

  @action
  async markNextChapterRead() {
    const { reading } = this.args;
    const chapterCompletion = this.store.createRecord('chapterCompletion', {
      reading,
      chapter: reading.chapterToRead,
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
