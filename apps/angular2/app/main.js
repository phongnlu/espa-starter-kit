import 'core-js/client/shim';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'node-uuid';
import 'localStorage';
import 'rxjs';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './main.module';

if (window.ESPA) {
	window.ESPA.on('/espa/apps/angular2/bootstrap', function() {
		console.log('/espa/apps/angular2/bootstrap callback');
		let container = document.getElementById('angular2');
  	container.innerHTML = '<todo-app></todo-app>';    
		platformBrowserDynamic().bootstrapModule(MainModule);
	});
} else {
	platformBrowserDynamic().bootstrapModule(MainModule);
}
