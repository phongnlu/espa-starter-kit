import { init } from 'espa';

let angular1 = new window.ESPA.ChildApp("angular2", "http://127.0.0.1:9000/espa-bootstrap.js", "0.0.1", true, 'angular2');
window.ESPA.registerApp(angular1);

//start ESPA
init();