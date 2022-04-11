import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class QuestionComponent extends Component {
  @tracked questionDetails = {
    headline: this.args.question.headline,
    description: this.args.question.description,
  };

  @tracked questionType = this.args.question.question_type;
  @tracked multiAnswer = this.args.question.multiple;

  constructor(...args) {
    super(...args);
  }
}
