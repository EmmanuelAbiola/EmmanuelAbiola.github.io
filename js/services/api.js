app.service('apiService', function(){
  var data = [
    {
      id: 1,
      title: 'SporkWatch',
      background_image: 'https://images.unsplash.com/photo-1434493651957-4ec11beae249?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450',
      timestamp: '08/01/06',
      description: 'Lorem ipsum dolor sit amet, at simul molestie salutatus vix. Usu ex corpora disputando. Id justo adolescens per. Te mea enim liberavisse, vim  ad reque disputationi, vim et adhuc suscipit. Fierent praesent complectitur pro et.  Ex quo denique constituto disputando, in lorem malis duo, eu putent docendi vis. Falli electram pri ea. No eum oratio deseruisse delicatissimi, has equidem percipit an. Enim inciderint mediocritatem ad mel.' 
    },
    {
      id: 2,
      title: 'SparkNotts',
      background_image: 'https://images.unsplash.com/photo-1434493651957-4ec11beae249?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450',
      timestamp: '9/05/06',
      description: 'Lorem ipsum dolor sit amet, at simul molestie salutatus vix. Usu ex corpora disputando. Id justo adolescens per. Te mea enim liberavisse, vim  ad reque disputationi, vim et adhuc suscipit. Fierent praesent complectitur pro et.  Ex quo denique constituto disputando, in lorem malis duo, eu putent docendi vis. Falli electram pri ea. No eum oratio deseruisse delicatissimi, has equidem percipit an. Enim inciderint mediocritatem ad mel.' 
    },
    {
      id: 3,
      title: 'SporkWatch',
      background_image: 'https://images.unsplash.com/photo-1434493651957-4ec11beae249?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450',
      timestamp: '08/01/06',
      description: 'Lorem ipsum dolor sit amet, at simul molestie salutatus vix. Usu ex corpora disputando. Id justo adolescens per. Te mea enim liberavisse, vim  ad reque disputationi, vim et adhuc suscipit. Fierent praesent complectitur pro et.  Ex quo denique constituto disputando, in lorem malis duo, eu putent docendi vis. Falli electram pri ea. No eum oratio deseruisse delicatissimi, has equidem percipit an. Enim inciderint mediocritatem ad mel.' 
    }
  ];

  this.getProjects = function(){
    return new Promise(function(resolve, reject){
      resolve(data);
    });
  }

  this.getProject = function(id){
    return new Promise(function(resolve, reject){
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === Number(id)) {
          return resolve(data[i]);
          break;
        }
      };
      reject();
    });
  }
})