import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@woodplansearch/api-interfaces';

@Component({
  selector: 'woodplansearch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
