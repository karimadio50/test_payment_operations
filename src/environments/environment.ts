// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};
export function stripePaymentGateway() {
  let strikeCheckout:any = null;
  if(!window.document.getElementById('stripe-script')) {
    const scr = window.document.createElement("script");
    scr.id = "stripe-script";
    scr.type = "text/javascript";
    scr.src = "https://checkout.stripe.com/checkout.js";

    scr.onload = () => {
      strikeCheckout = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51Kt9oKKwQBgPaTGiO8h5ArjCukzpIcNANZNzVQLq2ra6aqAKfmphXsLKHz2qo0sn4PxVmcli2M507yFAKDKQUnLb00egDqeXSz',
        locale: 'auto',
        token: function (token: any) {
          alert('Payment via stripe successfull!');
        }
      });
    }

    window.document.body.appendChild(scr);
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
