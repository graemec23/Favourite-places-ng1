import angular from 'angular';
import removeSpaces from './removeSpaces.filter';

export default angular.module('app.filters', [])
  .filter({ removeSpaces })
  .name;
