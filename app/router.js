import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lieu', function() {
    this.route('show', {path: '/:lieu_id'});
  });
  this.route('document', function() {
    this.route('show', {path: '/:document_id'});
  });
  this.route('joueur', function() {
    this.route('show', {path: '/:joueur_id'});
  });
  this.route('personnage', function() {
    this.route('show', {path: '/:personnage_id'});
  });
  this.route('help', {path: '/'});
});

export default Router;
