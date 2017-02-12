import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import commonHeader from '../../directives/commonHeader.directive';
import addAddress from '../../directives/addAddresses.directive';
import addressList from '../../directives/listAddresses.directive';


export default angular.module('app.home', [uirouter, commonHeader, addAddress, addressList])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
