import Component from '@glimmer/component';

export default class QuestionairComponent extends Component {
  constructor(...args) {
    super(...args);
    console.log(this.model, 'model');
  }
}
