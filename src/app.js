// import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

// import interceptor from './services/ajaxInterceptor.factory';
import routing from './app.config';
import home from './components/home';

import './scss/main.scss';
import config from './config';

angular.module('app', [uirouter, home])
  .config(routing)
  .constant('API_KEY', {
    'addressIoKey': config.addressIoKey,
    'addressIoUrl': config.addressIoUrl,
  });
