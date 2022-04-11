import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class QuestionComponent extends Component {
  @service('questionair') qs;

  @tracked questionDetails = {
    headline: this.args.question.headline,
    description: this.args.question.description,
  };

  @tracked questionType = this.args.question.question_type;
  @tracked multiAnswer = this.args.question.multiple;

  @tracked answer = null;
  @tracked showError = false;

  constructor(...args) {
    super(...args);
  }

  @action
  saveAnswer(event) {
    event.preventDefault();
    if (this.args.question.required && !this.answer) {
      this.showError = true;
      return;
    } else if (this.answer) {
      this.qs.saveAnswer(this.args.question.identifier, this.answer);
    }
    this.args.next(event);
  }

  @action
  setAnswer(answer = null) {
    this.showError = false;
    this.answer = answer;
  }
}
