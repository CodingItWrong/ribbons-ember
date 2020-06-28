export default function () {
  this.get('/books');

  this.get('/readings');
  this.get('/readings/:id');
  this.post('/readings', function (schema) {
    const attrs = this.normalizedRequestAttrs();
    const reading = schema.readings.create({
      ...attrs,
      furthestReadChapter: 0,
    });
    return reading;
  });
  this.patch('/readings');

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
