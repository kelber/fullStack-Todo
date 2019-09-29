import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@full-stack-todos/api-interfaces';

@Component({
  selector: 'full-stack-todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/todo');
  constructor(private http: HttpClient) {}
}
