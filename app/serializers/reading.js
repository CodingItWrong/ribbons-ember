import ApplicationSerializer from './application';

const attributeToOmit = ['furthestReadChapter'];

export default class ReadingSerializer extends ApplicationSerializer {
  serializeAttribute(snapshot, json, key, attributes) {
    const include = !attributeToOmit.includes(attributes.name);
    if (include) {
      super.serializeAttribute(snapshot, json, key, attributes);
    }
  }
}
