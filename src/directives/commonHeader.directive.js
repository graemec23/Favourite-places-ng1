import angular from 'angular';
import localStorageFactory from '../services/localStorage.service';

function commonHeaderController(localStorageFactory) {
  let vm = this;

  //vm.address = localStorageFactory.get();
  //console.log(vm.address)
  // vm.addressList = vm.address.getAddress();
}

const commonHeader = () => {
  return {
    restrict: 'EA',
    scope: {
      name: '=',
    },
    controller: 'commonHeaderController',
    controllerAs: 'ctrl',
    template: ['<header class="c-header">',
      '<div class="c-header__status-bar"></div>',
      '<div class="c-header__headline">',
      '<h1>Favourite Places</h1>',
      '</div>',
      '</header>',
    ].join(''),
    replace: true,
    bindToController: true,
  };
};

export default angular.module('directives.commonHeader', [localStorageFactory])
  .directive('commonHeader', commonHeader)
  .controller('commonHeaderController', commonHeaderController)
  .name;


commonHeaderController.$inject = ['localStorageFactory'];
