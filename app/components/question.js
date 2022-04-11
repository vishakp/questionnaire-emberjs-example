import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class QuestionComponent extends Component {
    @service questionair;

    @tracked questionDetails = {
        headline: this.args.question.headline,
        description: this.args.question.description,
    };

    @tracked questionType = this.args.question.question_type;
    @tracked multiAnswer = this.args.question.multiple;

    @tracked answer = null;

    constructor(...args) {
        super(...args);
    }

    @action
    saveAnswer($event) {
        this.args.next($event);
        this.service.saveAnswer(this.args.question.identifier, this.answer);
    }

    @action
    setAnswer(answer) {
        this.answer = answer;
    }
}
