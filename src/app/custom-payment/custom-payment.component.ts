import {Component, OnInit, ViewChild} from '@angular/core';
import { StripeService, StripePaymentElementComponent } from 'ngx-stripe';
import {
  StripeElementsOptions,
  PaymentIntent
} from '@stripe/stripe-js';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PaymentService} from "../payment.service";

@Component({
  selector: 'app-custom-payment',
  templateUrl: './custom-payment.component.html',
  styleUrls: ['./custom-payment.component.scss']
})
export class CustomPaymentComponent implements OnInit {
  @ViewChild(StripePaymentElementComponent)
  paymentElement: StripePaymentElementComponent;
  customerPaymentId = "cus_MVm2AmUL4iy7lj"
  paymentElementForm: FormGroup;

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  paying = false;

  paymentIntentId = "pi_3Lmbv8KwQBgPaTGi0GCBjY1N"
  constructor(
    private service:PaymentService,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}


  ngOnInit() {
    this.paymentElementForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: [''],
      zipcode: [''],
      city: [''],
     // amount: [2500, [Validators.required, Validators.pattern(/d+/)]]
    });

    this.createPaymentIntent()

  }

  pay() {
    if (this.paymentElementForm.valid) {
      this.paying = true;
      this.stripeService.confirmPayment({
        elements: this.paymentElement.elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: this.paymentElementForm.get('name').value,
              email: this.paymentElementForm.get('email').value,
              address: {
                line1: this.paymentElementForm.get('address').value || '',
                postal_code: this.paymentElementForm.get('zipcode').value || '',
                city: this.paymentElementForm.get('city').value || '',
              }
            }
          }
        },
        redirect: 'if_required'
      }).subscribe(result => {
        this.paying = false;
        console.log('Result', result);
        if (result.error) {
          // Show error to your customer (e.g., insufficient funds)
          alert({ success: false, error: result.error.message });
        } else {
          // The payment has been processed!
          if (result.paymentIntent.status === 'succeeded') {
            // Show a success message to your customer
            alert({ success: true });
          }
        }
      });
    }else {
      console.log('invalid')
    }
  }

  createPaymentIntent(){
    const data= {
      amount:2,
      userId: "632b455bf673a51ad4ee3b23",
      customerPaymentId: this.customerPaymentId,
      isSavedCard:true
    }
    this.service.createPaymentIntent(data)
      .subscribe(pi => {
        console.log(pi)
        this.elementsOptions.clientSecret = pi.clientSecret;
      });
  }

  confirmPaymentIntent(){
    this.service.confirmPaymentIntent({paymentIntentId:this.paymentIntentId})
      .subscribe(res => {
        console.log(res)
      });
  }

  setupPaymentIntent(){
    this.service.setupPaymentIntent({customerPaymentId: this.customerPaymentId})
      .subscribe(res => {
        console.log(res)
      });
  }

}
