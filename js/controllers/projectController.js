'use strict'

app.controller('projectsController', ['$scope', 'apiService', function(scope, api){
  scope.vm = {};
  api.getProjects().then(function(data){
    scope.vm.projects = data;
    scope.$apply();
  });
}]);