import {applyPropertiesValidators} from '../helpers';

const RESPONSE_SCHEMA_SYMBOL = Symbol('responseSchema');

export default
class BaseCommand {
  constructor (requestSchema, responseSchema, values) {
    this[RESPONSE_SCHEMA_SYMBOL] = responseSchema;

    if (requestSchema) {
      applyPropertiesValidators(this, requestSchema, values);
    }
  }

  getCommandName () {
    return this.constructor.name;
  }

  createResponse (payload) {
    const response = new function () {
    }();

    if (this[RESPONSE_SCHEMA_SYMBOL]) {
      applyPropertiesValidators(response, this[RESPONSE_SCHEMA_SYMBOL], payload);
    }

    return response;
  }
}
