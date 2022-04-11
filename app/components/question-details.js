import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class QuestionDetailsComponent extends Component {
  @tracked title = this.args.headline;
  @tracked desc = this.args.description;
}
