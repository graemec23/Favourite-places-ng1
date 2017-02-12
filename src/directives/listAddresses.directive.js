import angular from 'angular';
import localStorageFactory from '../services/localStorage.service';

function addressListController() {
  let vm = this;
  // vm.address = localStorageFactory.get();
  // console.log(vm.address)
  // vm.addressList = vm.address.getAddress();
}

const addressList = () => {
  return {
    restrict: 'EA',
    scope: {
      name: '=',
    },
    controller: 'addressListController',
    controllerAs: 'ctrl',
    template: ['',
      '<ul class="c-addressList" ng-repeat="c in ctrl.address">',
      '<li ng-show="c.line1.length">{{c.line1 }}</li>',
      '<li ng-show="c.line2.length">{{c.line2 }}</li>',
      '<li ng-show="c.line3.length">{{c.line3 }}</li>',
      '<li ng-show="c.line4.length">{{c.line4 }}</li>',
      '<li ng-show="c.locality.length">{{c.locality }}</li>',
      '<li>{{c.city}}</li>',
      '<li>{{c.county}}</li>',
      '</ul>',
    ].join(''),
    bindToController: true,
  };
};

export default angular.module('directives.addressList', [localStorageFactory])
  .directive('addressList', addressList)
  .controller('addressListController', addressListController)
  .name;


addressListController.$inject = ['localStorageFactory'];
