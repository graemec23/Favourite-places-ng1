export default class HomeController {
  constructor(postCodeApi) {
    this.name = 'pixies';
    this.address = postCodeApi;
    this.addressList = this.address.getAddress();
  }
  changeName() {
    this.name = 'angular-tips'
    console.log('addresses', this.addressList);
  }
}

HomeController.$inject = ['postCodeApi'];
