angular.module('starter', ['ionic'])

.controller('MainController',function($scope){
  $scope.justice = 5;

  $scope.questions = ['Have you heard of Docusign?','Have you heard of Periscope?',
  'Do you use notation programs such as Evernote or Google Keep?'];

  $scope.answers = ['','',''];

  $scope.values = ['Yes','No'];

  $scope.rangeQuestion = ['From 1 - 10, how in touch with technology are you?'];

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
