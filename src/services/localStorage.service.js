import angular from 'angular';

class LocalStorageFactory {

  set(key, value) {
    localStorage.setItem(key, value);
  }

  get(){
    try {
      const serializedState = localStorage.getItem('addresses');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }

  clearAll() {
    localStorage.clear();
  }
}

export default angular.module('services.localStorageFactory', [])
.service('localStorageFactory', LocalStorageFactory).name;
