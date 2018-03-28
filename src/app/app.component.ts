import { Component } from '@angular/core';

@Component({
  selector: 'nts-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-rxjs-tasks';

  mainMenuLinks = [
    {text: 'Dashboard', url: '/'},
    {text: 'RxJS examples', url: '/rxjs-examples'},
    {text: 'About', url: '/about'},
  ];
}
