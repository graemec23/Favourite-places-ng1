import angular from 'angular';

// let URL = this.key.addressIoUrl + postCode + '?api-key=' + this.key.addressIoKey;


class PostCodeAPi {
  constructor(API_KEY) {
    this.key = API_KEY;
  }
  
  getAddress(postCode) {
    let URL = 'http://localhost:3000/api/v1/addresses';
    return fetch(URL)
    .then(r => r.json())
    .then(data => {
      console.log('addresses', data.Addresses)
      return data.Addresses
    })
    .catch(err => console.log('error', err));
  }
}


export default angular.module('services.postCodeApi', [])
  .service('postCodeApi', PostCodeAPi)
  .name;

PostCodeAPi.$inject = ['API_KEY'];
