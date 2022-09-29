import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomPaymentComponent} from "./custom-payment/custom-payment.component";
import {SimplePaymentComponent} from "./simple-payment/simple-payment.component";

const routes: Routes = [
  {path:'payment',component:CustomPaymentComponent},
  {path:'simple-payment',component:SimplePaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
