import angular from 'angular';

const myInterceptor = ($indicator) => {
  var pendingRequests = 0;
    return {
        request: function(config) {
        pendingRequests++;
        $indicator.show();
        return config || $q.when(config);
    },
    response: function(response) {
        if ((--pendingRequests) === 0) $indicator.hide();
        return response || $q.when(response);
    },
    responseError: function(response) {
        if ((--pendingRequests) === 0) indicator.hide();
        return $q.reject(response);
    }
}

export default angular.module('services.ajaxInterceptor', [])
.factory('myInterceptor', myInterceptor).name;

myInterceptor.$inject= ['$q','$indicator'];
