'use strict'

app.directive('bgFluct', function(){
  var _ = {};
  _.scope = {
    data: "=ngData"
  }
  _.link = function(scope, elem, attr) {

    // if there is no image provided use pp.png the default
    scope.$watch('data', function(newVal, oldVal){
     // console.log("newVal is ", newVal)
      if(newVal && newVal.background_image){
        elem.css(
          {
            'background': 'url('+newVal.background_image+')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
          })
        }
    });
  }
  return _;
})