var angular1TodomvcHost = 'http://localhost:8080/';

new Promise(function (resolve, reject) {
    Promise.all([
     	ESPA.loadResource.css(angular1TodomvcHost + 'node_modules/todomvc-common/base.css'),
      ESPA.loadResource.css(angular1TodomvcHost + 'node_modules/todomvc-app-css/index.css')
    ])
    .then(function() {
      return ESPA.loadResource.js(angular1TodomvcHost + 'node_modules/angular/angular.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(angular1TodomvcHost + 'node_modules/angular-route/angular-route.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(angular1TodomvcHost + 'node_modules/angular-resource/angular-resource.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(angular1TodomvcHost + 'js/app.js');         
    })      
    .then(function() {
      return Promise.all([
        ESPA.loadResource.js(angular1TodomvcHost + 'js/controllers/todoCtrl.js'),
        ESPA.loadResource.js(angular1TodomvcHost + 'js/services/todoStorage.js'),
        ESPA.loadResource.js(angular1TodomvcHost + 'js/directives/todoFocus.js'),
        ESPA.loadResource.js(angular1TodomvcHost + 'js/directives/todoEscape.js')
      ])
    })
    .then(function() {
      console.log('mount - angular1 todomvc has loaded!');
      window.ESPA.on('/espa/apps/angular1/bootstrap', function() {
				console.log('/espa/apps/angular1/bootstrap callback');
				let container = document.getElementById('angular1');
    		container.innerHTML = '<div id="angular1-todomvc"><ng-view></ng-view></div>';    
				angular1Todomvc = angular.bootstrap(document.getElementById('angular1-todomvc'), ['todomvc']);
			});      
      window.ESPA.trigger('/espa/apps/angular1/bootstrap');
    })
    .catch(function(e) {
      console.log('mount - angular1 todomvc failed to load', e); 
    }); 

    return resolve();
  });