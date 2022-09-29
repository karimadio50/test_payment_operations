import { Component, OnInit } from '@angular/core';
import {stripePaymentGateway} from "../../environments/environment";

@Component({
  selector: 'app-simple-payment',
  templateUrl: './simple-payment.component.html',
  styleUrls: ['./simple-payment.component.scss']
})
export class SimplePaymentComponent implements OnInit {
  strikeCheckout:any = null;

  ngOnInit() {
    stripePaymentGateway();
  }

  checkout(amount) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Kt9oKKwQBgPaTGiO8h5ArjCukzpIcNANZNzVQLq2ra6aqAKfmphXsLKHz2qo0sn4PxVmcli2M507yFAKDKQUnLb00egDqeXSz',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }

}
