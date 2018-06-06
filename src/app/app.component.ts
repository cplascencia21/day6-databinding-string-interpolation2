import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <p>The sum is: {{ first + second }}</p>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  first = 21;

  second = 36;

  checkLargest() {
    return Math.max(this.first, this.second);
  }

}
