import Component from '@glimmer/component';
import {action} from '@ember/object';

export default class FreeTextComponent extends Component {
    constructor(...args) {
        super(...args);
      }
    
      @action
      setAnswer(event){
          event.preventDefault();
        this.args.output(event.target.value)
      }
}
