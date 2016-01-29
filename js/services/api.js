app.service('apiService', function(){
  var data = [
    {
      id: 1,
      title: 'Patient 0',
      background_image: 'img/patientzero.png',
      timestamp: '6/11/2015',
      description: 'The Patient 0 is an App to refine assessment skills for healthcare practice. TelHack brought together 80 of the UK best developers. A leading event bringing together 80 of the best developers, designers and industry experts from all around the UK to conceive, build and launch high impact solutions that will revolutionise healthcare education. This project was run under the NHS Healthcare Education England(HEE) Technology Enhanched Learning (Tel) programme.',
       project_url: 'http://telhack.co.uk/'
    },
    {
      id: 2,
      title: 'Smart Watch Project',
      background_image: 'https://images.unsplash.com/photo-1434493651957-4ec11beae249?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450',
      timestamp: '1/10/2015',
      description: 'This project was both a practical implementation of an Android application that aims to monitor the physical trends of an individuals nervous system with the application of a Pebble Smart Watch. This project  was developed to help aid people who experience neurodevelopmental problems.  An example of this is using the watch to monitor Attention deficit hyperactivity disorder (ADHD). From this Mobile and Watch Application a user will be able to record data and draw various conclusions.'
    },
    {
      id: 3,
      title: 'Keey',
      background_image: 'img/keeyapp.png',
      timestamp: '1/05/2015',
      description: 'Keey is a simplified digital audio workstation giving everyone everywhere of all skill levels the ability to create studio quality beats in minutes, from funky hip hop to electrical dance, the possibilities are endless. Music creation has never been so simple.Keey is a well thought of iPad app that bridges the gap in music making, especially for entry level users.',
      project_url: 'http://producthunt.com/tech/keey' 
    },
     
      {
      id: 4,
      title: 'HopperBus',
      background_image: 'img/hopperbus.jpeg',
      timestamp: '1/01/2015',
      description: 'The Hopper Bus timetable app has been beautifully designed to provide you with a stellar navigation experience. This app is essential for all UoN students & staff using any of the buses across all three campuses.Route Visualisation. Visualise your bus route stop by stop and tap on any stop to see the next bus time. Real Time Bus Departures. Acquire accurate bus timetables even in the event of delays  Full Timetable. View complete timetables across the whole year for all bus routes enabling you to plan ahead. Maps. Instant access to the official campus maps fully detailing buildings and layouts ',
      project_url: 'https://itunes.apple.com/gb/app/hopper-bus/id947241322?mt=8' 
    },

    {
      id: 5,
      title: 'Mumble',
      background_image: 'img/mumble.png',
      timestamp: '20/10/2014',
      description: 'Mumble is a free iOS and Android based mobile application which allows users to share their deepest thoughts, facts of interest, or casual musings from a completely anonymous perspective. Mumble is a geographical based social platform allowing anyone to create a post of 150 characters that is then made available to those within range. Mumbles can be tagged to landmarks or buildings, creating an outlet to express one views to those around them. Mumble is two-sided, users can reply and share the love by liking other posts within the community. ', 
    project_url:'https://play.google.com/store/apps/details?id=dise.com.mumble&hl=en_GB'
    },
  
    {
      id: 6,
      title: 'UoN Economics & Finance App',
      background_image: 'img/nefs.png',
      timestamp: '1/10/2014',
      description: 'The Economics & Finance Society at the University of Nottingham is one of the biggest of its kind. Catering for its members diverse interests , career aspirations and providing all important socials. With over 40 years of existence and thousands of members the NEFS prides itself on being Nottingham’s leading society and with the NEFS app students can stay up to date on the move without the worry of missing out. features of the app include Real time events feed. The events feed enables user’s to view and set reminders for upcoming events.Commercial awareness. Tailored articles delivered straight to your phone. Real time sports team information. Finally a simple and efficient way to check out how your sports teams are doing! This is an app designed by students for students and is guaranteed to improve the experience that the NEFS provides its members. ',
       project_url:'https://play.google.com/store/apps/details?id=com.dise.nefs&hl=en_GB'
    },

    {
      id: 7,
      title: 'UoN Week 1 Welcome App',
      background_image: 'img/weekone.png',
      timestamp: '1/9/2014',
      description: 'Welcome to the UoN Students Union Week One app. An app designed to maximise the experience delivered to you during your first week! This app is essential for all UoN students and aims to improve the week one experience of Freshers and returners alike.',
      project_url:'https://play.google.com/store/apps/details?id=com.dise.weekone&hl=en_GB'
    },
    {
      id: 8,
      title: 'Dise LTD',
      background_image: 'img/diselogo.png',
      timestamp: '1/05/2014',
      description: 'Founded a Technology Consultancy company that aims to aid small and medium size companies with their technology strategy. Pitched to a panel of 5 experienced business leaders, and won a prize fund of $25,000. Created a brick-breaker style game called Bricks for the Apple App and Google play stores. Conducted a sales campaign, which led to over 10,000 downloads in 3 weeks. Featured in over 20 news articles/App review sites & interviewed by MTV Voices and BBC Nottingham.',
      project_url:'http://www.belpernews.co.uk/news/local/video-business-bright-sparks-share-35k-1-6746125'
    },
    {
      id: 9,
      title: 'Bricks',
      background_image: 'img/bricks.png',
      timestamp: '1/03/2014',
      description: 'The objective is simple. Each level you must destroy all bricks but do it in style for those ludicrous high scores! Using creative colour combos, rack up your points whilst achieving power ups aiding your quest in the outrageously addictive task of brick breaking. Compare yourself to the competition with the integrated global leader-boards! Can you defeat your friends to be crowned the Bricks master?. There is more to quench your brick breaking thirst! Challenge yourself by completing the tons of unique in game challenges and watch your score multiply!. In this game simplicity is key. Break Bricks, rack up points, progress to the next level; Sounds easy right? It never is.',
      project_url:'https://play.google.com/store/apps/details?id=com.StephenSowole.Bricks&hl=en_GB'
    },
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