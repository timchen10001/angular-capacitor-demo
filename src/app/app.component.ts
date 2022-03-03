import { Component, OnInit } from '@angular/core';
import Echo from '@@ios/custom-plugins/echo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-capacitor-demo';

  ngOnInit() {}

  async onSwiftEcho() {
    const { value } = await Echo.echo({ value: 'Hello World!' });

    console.log('Response from native:', value);
  }
}
