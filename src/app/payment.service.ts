import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PaymentIntent} from "@stripe/stripe-js";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJiNDU1OWY2NzNhNTFhZDRlZTNiMjAiLCJyb2xlIjoiTm9uZSIsImlhdCI6MTY2NDIwODk5NCwiZXhwIjoxNjY0ODEzNzk0fQ.yGn5DJHASPwi6jpqbN9benaueBnYoVDV50O8_KeBROc";

  API_URL = 'http://192.168.56.1:8181/api/'

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token,
    'Access-Control-Allow-Origin': ''
  })

  private options = {
    headers: this.headers
  }

  constructor(private http: HttpClient) { }

  createPaymentIntent(data : {customerPaymentId?, currencyCode?, paymentMethodType?, orderDetails?, isSavedCard?,amount}):Observable<any>{
    return this.http.post<any>(`${this.API_URL}v1/payments/createpaymentintent`,data,this.options)
  }

  getCustomerPaymentMethods(data : any):Observable<any>{
    return this.http.post<any>(`${this.API_URL}v1/payments/getpaymentmethods`,data,this.options)
  }

  setupPaymentIntent(data : {customerPaymentId}):Observable<any>{
    return this.http.post<any>(`${this.API_URL}v1/payments/setuppaymentintent`,data,this.options)
  }

  confirmPaymentIntent(data : {paymentIntentId}):Observable<any>{
    return this.http.post<any>(`${this.API_URL}v1/payments/capturepaymentintent`,data,this.options)
  }

}
