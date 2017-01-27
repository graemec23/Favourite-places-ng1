import angular from 'angular';

class LocalStorageFactory {
  
  set(key, value) {
    localStorage.setItem(key, value);
  }
  
  get() {
  
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null ){
      return undefined
    }
    return JSON.parse(serializedState)
  
  } catch (err) {
    returned undefined
  }


  }
  
  clearAll() {
    localStorage.clear();
  }  
}

export default angular.module('services.localStorageFactory', [])
  .service('localStorageFactory', LocalStorageFactory)
  .name;
