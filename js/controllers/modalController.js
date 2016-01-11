'use strict'

app.controller('modalController', ['$scope', '$stateParams', '$state', 'apiService',function(scope, stateParams, state, api){
  var reqId = stateParams.id;
  scope.vm = {};
  api.getProject(reqId).then(function(data){
    console.log("data is: ",data);
    scope.vm = data;
    scope.$apply();
  }).catch(function(){
    alert("sorry this project doesn't exist");
    state.go('home');
  })
}]);