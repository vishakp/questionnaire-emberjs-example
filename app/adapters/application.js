import RESTAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = 'data';
  buildURL(...args) {
    return `${super.buildURL(...args).json}`;
  }
}
