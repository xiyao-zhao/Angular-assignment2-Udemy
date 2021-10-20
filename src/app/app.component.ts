import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    userName = "";
    // clickable = false;

    onAddUserName() {
        this.userName = "";
        // this.clickable = false;
    }

    // onInputUserName() {
    //     this.clickable = true;
    // }

}
