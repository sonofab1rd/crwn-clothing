import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const pubilshableKey = 'pk_test_SZ45w2IetjuHJeBfb9A5JjZ600i3wR6Q62';
    return (
        <StripeCheckout
            lable = 'Pay Now'
            name = 'CRWN Clothing'
            billingAddress
            shippingAddress
            image = ''
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {pubilshableKey}
        />
    )
}

export default StripeCheckoutButton;