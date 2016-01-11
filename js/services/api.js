app.service('apiService', function(){
  var data = [
    {
      id: 1,
      title: 'Pebble Watch Project',
      background_image: 'https://images.unsplash.com/photo-1434493651957-4ec11beae249?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450',
      timestamp: '1/08/2015',
      description: 'This project was both a practical implementation of an Android application that aims to monitor the physical trends of an individual’s nervous system with the application of a Pebble Smart Watch. This report details the design and implementation of a minimum viable product (mvp) of the Android app focuses on some of the difficult aspects such as designing and implementing the visual monitor. In the end, we concluded that the mvp was a great start and that it was effective way to monitor nervous system issues. Further work will include finishing the implementation of all requirements and further testing with users.' 
    },
    {
      id: 2,
      title: 'Dise LTD',
      background_image: 'img/diselogo.png',
      timestamp: '1/05/2014',
      description: 'Founded a Technology Consultancy company that aims to aid small and medium size companies with their technology strategy. Pitched to a panel of 5 experienced business leaders, and won a prize fund of $25,000. Created a brick-breaker style game called Bricks for the Apple App and Google play stores. Conducted a sales campaign, which led to over 10,000 downloads in 3 weeks. Featured in over 20 news articles/App review sites & interviewed by MTV Voices and BBC Nottingham.' 
    },
    {
      id: 3,
      title: 'Bricks',
      background_image: 'img/bricks.png',
      timestamp: '01/01/2014',
      description: 'The objective is simple. Each level you must destroy all bricks but do it in style for those ludicrous high scores! Using creative colour combos, rack up your points whilst achieving power ups aiding your quest in the outrageously addictive task of brick breaking. Compare yourself to the competition with the integrated global leader-boards! Can you defeat your friends to be crowned the Bricks master?. There is more to quench your brick breaking thirst! Challenge yourself by completing the tons of unique in game challenges and watch your score multiply!. In this game simplicity is key. Break Bricks, rack up points, progress to the next level; Sounds easy right? It never is.' 
    },
    {
      id: 4,
      title: 'Mumble',
      background_image: 'img/mumble.png',
      timestamp: '20/10/2014',
      description: 'Mumble is a free iOS and Android based mobile application which allows users to share their deepest thoughts, facts of interest, or casual musings from a completely anonymous perspective. Mumble is a geographical based social platform allowing anyone to create a post of 150 characters that is then made available to those within range. Mumbles can be tagged to landmarks or buildings, creating an outlet to express one views to those around them. Mumble is two-sided, users can reply and share the love by liking other posts within the community. ' 
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