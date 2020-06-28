export default function () {
  this.get('/books');

  this.post('/readings', function (schema) {
    const attrs = this.normalizedRequestAttrs();
    const reading = schema.readings.create({
      ...attrs,
      furthestReadChapter: 0,
      complete: false,
    });
    return reading;
  });
  this.get('/readings', function (schema) {
    return schema.readings.where({ complete: false });
  });
  this.get('/readings/:id');
  this.patch('/readings/:id');

  this.post('/chapter-completions', function (schema) {
    const attrs = this.normalizedRequestAttrs();

    const { readingId } = attrs;
    const reading = schema.readings.find(readingId);
    reading.update({
      furthestReadChapter: reading.furthestReadChapter + 1,
    });

    const chapterCompletion = schema.chapterCompletions.create(attrs);
    return chapterCompletion;
  });
}
