app.directive('projectItem', function(){
  var _ = {};
  _.scope = {
    data: "=ngData"
  }
  _.templateUrl = '../../partials/projectItem.html'
  _.link = function(scope, elem, attr) {
    scope.vm = scope.data
  }

  return _;
});