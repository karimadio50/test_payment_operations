import { Component } from '@angular/core';
import {loadStripe} from '@stripe/stripe-js';
let stripe =  loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
