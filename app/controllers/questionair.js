import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class QuestionairController extends Controller {
    init() {
        super.init(...arguments);
        
    }


    @action
    next(event) {
        event.preventDefault();
        this.reveal();

    }

    reveal() {
        let reveals = document.querySelectorAll(".reveal");
        const container = document.getElementById("questionair");
        container.scrollTop += window.innerHeight;
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
}
