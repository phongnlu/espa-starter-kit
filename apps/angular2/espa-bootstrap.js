var angular2TodomvcHost = 'http://localhost:9000/';

new Promise(function (resolve, reject) {
  Promise.all([
   	ESPA.loadResource.css(angular2TodomvcHost + 'node_modules/todomvc-common/base.css'),
    ESPA.loadResource.css(angular2TodomvcHost + 'node_modules/todomvc-app-css/index.css')
  ])
  .then(function() {
    return ESPA.loadResource.js(angular2TodomvcHost + 'main.bundle.js');         
  })      
  .then(function() {
    console.log('mount - angular2 todomvc has loaded!');
    //angular1Todomvc = angular.bootstrap(document.getElementById('angular1-todomvc'), ['todomvc']);
    window.ESPA.trigger('/espa/apps/angular2/bootstrap');
  })
  .catch(function(e) {
    console.log('mount - angular2 todomvc failed to load', e); 
  }); 
    
  return resolve();
});