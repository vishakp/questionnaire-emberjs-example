import Model, { attr } from '@ember-data/model';

export default class QuestionModel extends Model {
  @attr question_type;
  @attr identifier;
  @attr headline;
  @attr description;
  @attr required;
  @attr multiple;
  @attr choices;
}
