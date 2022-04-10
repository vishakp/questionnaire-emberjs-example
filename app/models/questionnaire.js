import Model, { attr } from '@ember-data/model';

export default class QuestionnaireModel extends Model {
  @attr id;
  @attr identifier;
  @attr name;
  @attr questions;
  @attr description;
  @attr category_name_hyphenated;
}
