import EmberRouter from '@ember/routing/router';
import config from 'ribbons/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('readings', function () {
    this.route('new');
  });
});
