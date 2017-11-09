import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DefaultRouteComponent } from './components/default-route.component';

export let routes = [ 	
  { path: 'angular2', component: TodoListComponent, pathMatch: 'full' },
  { path: 'angular2/:status', component: TodoListComponent },
  { path: '**', component: DefaultRouteComponent, pathMatch: 'full' }
];
