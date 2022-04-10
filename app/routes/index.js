import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  @service router;

  beforeModel() {
    this.router.transitionTo('questionair');
  }
}
