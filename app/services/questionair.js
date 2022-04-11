import Service from '@ember/service';

export default class QuestionairService extends Service {
  url = '/data/questionnaire.json';
  answers;
  async getQuestions() {
    const response = await fetch(this.url);
    const { data } = await response.json();
    console.log(data);
    return data;
  }

  saveAnswer(questionId, answer){
      this.answers.push({
          questionId,
          answer
      })
  }
}
