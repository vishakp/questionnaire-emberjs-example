import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuestionairRoute extends Route {
  @service('questionair') qs;

  async modal() {
    const { questions } = await this.qs.getQuestions();
    return questions;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
  }
}
