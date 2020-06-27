export default function () {
  this.get('/books');

  this.get('/readings');
  this.post('/readings', function (schema) {
    const attrs = this.normalizedRequestAttrs();
    const reading = schema.readings.create({
      ...attrs,
      furthestReadChapter: 0,
    });
    return reading;
  });
  this.patch('/readings');
}
