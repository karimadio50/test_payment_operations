import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPaymentComponent } from './custom-payment/custom-payment.component';
import { SimplePaymentComponent } from './simple-payment/simple-payment.component';
import {HttpClientModule} from "@angular/common/http";
import { NgxStripeModule } from 'ngx-stripe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    CustomPaymentComponent,
    SimplePaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NgxStripeModule.forRoot('pk_test_51Kt9oKKwQBgPaTGiO8h5ArjCukzpIcNANZNzVQLq2ra6aqAKfmphXsLKHz2qo0sn4PxVmcli2M507yFAKDKQUnLb00egDqeXSz'),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
