// import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './components/home';
import './scss/main.scss';
console.log('loaded');

angular.module('app', [uirouter, home])
  .config(routing)
  .constant('API_KEY', {
    'addressIoKey': 'ad7EtfI_ykalB3ZBs5C91Q1024',
    'addressIoUrl': 'https://api.getAddress.io/v2/uk/',
  });
