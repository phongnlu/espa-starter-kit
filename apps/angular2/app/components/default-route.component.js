import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'redirect',
  template: ''
})
export class DefaultRouteComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    //window.location.href = 'http://127.0.0.1:8888/' + window.location.hash;
    //window.location.replace('http://127.0.0.1:8888/' + window.location.hash);
    window.ESPA.route('angular1', '', true);
  }
}