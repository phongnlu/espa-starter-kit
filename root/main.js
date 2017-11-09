import { init } from 'espa';

let angular1 = new window.ESPA.ChildApp("angular1", "http://localhost:8080/espa-bootstrap.js", "0.0.1", true, 'angular1');
window.ESPA.registerApp(angular1);

let angular2 = new window.ESPA.ChildApp("angular2", "http://localhost:9000/espa-bootstrap.js", "0.0.1", false, 'angular2');
window.ESPA.registerApp(angular2);

let react = new window.ESPA.ChildApp("react", "http://localhost:9999/espa-bootstrap.js", "0.0.1", false, 'react');
window.ESPA.registerApp(react);

//start ESPA
init();