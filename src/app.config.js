
export default function routing($httpProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false,
  });
  $urlRouterProvider.otherwise('/');
  //$httpProvider.interceptors.push('myInterceptor');
}

routing.$inject = ['$httpProvider', '$urlRouterProvider', '$locationProvider'];
