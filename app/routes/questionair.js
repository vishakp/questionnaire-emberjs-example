import Route from '@ember/routing/route';
import fetch from 'fetch';
export default class QuestionairRoute extends Route {
  async model() {
    const url = '/data/questionnaire.json';
    const response = await fetch(url);
    const { questionnaire } = await response.json();
    console.log(questionnaire);
    return questionnaire;
  }
}
