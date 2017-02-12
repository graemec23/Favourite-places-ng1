import angular from 'angular';
import postCodeApi from '../services/postcodeLookup.service';

function addAddressController(postCodeApi) {
  let vm = this;
  vm.showSelectDropdown = false;
  vm.showEditField = false;
  vm.selectedAddress;
  
  vm.addPlace = () => {
    postCodeApi.getAddress(vm.searchPostcode).then((data) => {
      vm.addressList = data;
      vm.showSelectDropdown = true;
    });
  }

  vm.updateDate = () => {
    
    if (vm.selectedAddress !== null) {
      vm.line1 = vm.selectedAddress.split(',')[0].trim();
      vm.line2 = vm.selectedAddress.split(',')[1].trim();
      vm.line3 = vm.selectedAddress.split(',')[2].trim();
      vm.line4 = vm.selectedAddress.split(',')[3].trim();
      vm.locality = vm.selectedAddress.split(',')[4].trim();
      vm.city = vm.selectedAddress.split(',')[5];
      vm.county = vm.selectedAddress.split(',')[6];
    }
  }
  
  vm.saveAddress = () => {
    
  }
}

const addAddress = () => {
  return {
    restrict: 'EA',
    scope: {
      name: '=',
    },
    controller: 'addAddressController',
    controllerAs: 'ctrl',
    template: ['<form class="c-form">',
      '<div class="o-layout">',
      '<div class="o-layout__item u-1/2">',
      '<fieldset class="c-form__group">',
      '<input class="c-form__input u-margin-bottom" type="text" ng-model="ctrl.searchPostcode" required />',
      '<button class="c-btn c-btn--primary o-layout--right" ng-click="ctrl.addPlace()">Search Address</button>',
      '</fieldset>',
      '</div>',
      '<div class="o-layout__item u-1/2" ng-show="ctrl.showSelectDropdown">',
      '<fieldset class="c-form__group">',
      '<select class="c-form__input u-margin-bottom" name="addresses" ng-model="ctrl.selectedAddress" ng-options="label for label in ctrl.addressList" ng-change="ctrl.updateDate()"><option value="">-- Select a address ---</option></select>',
      '<button class="c-btn c-btn--primary" ng-click="ctrl.addPlace()">Add Place</button>',
      '</fieldset>',
      '</div>',
      '</div>',
    ].join(''),
    replace: true,
    bindToController: true,
  };
};

export default angular.module('directives.addAddress', [postCodeApi])
  .directive('addAddress', addAddress)
  .controller('addAddressController', addAddressController)
  .name;


addAddressController.$inject = ['postCodeApi'];
