var reactTodomvcHost = 'http://localhost:9999/';

new Promise(function (resolve, reject) {
    Promise.all([
     	ESPA.loadResource.css(reactTodomvcHost + 'node_modules/todomvc-common/base.css'),
      ESPA.loadResource.css(reactTodomvcHost + 'node_modules/todomvc-app-css/index.css')
    ])
    .then(function() {
      return ESPA.loadResource.js(reactTodomvcHost + 'node_modules/todomvc-common/base.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(reactTodomvcHost + 'node_modules/react/dist/react-with-addons.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(reactTodomvcHost + 'node_modules/classnames/index.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(reactTodomvcHost + 'node_modules/react/dist/JSXTransformer.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(reactTodomvcHost + 'node_modules/director/build/director.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(reactTodomvcHost + 'js/utils.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(reactTodomvcHost + 'js/todoModel.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(reactTodomvcHost + 'js/todoItem.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(reactTodomvcHost + 'js/footer.js');         
    })
    .then(function() {
      return ESPA.loadResource.js(reactTodomvcHost + 'js/app.js');         
    })
    .then(function() {
      console.log('mount - react todomvc has loaded!');
      window.ESPA.trigger('/espa/apps/react/bootstrap');
    })
    .catch(function(e) {
      console.log('mount - react todomvc failed to load', e); 
    }); 

    return resolve();
  });