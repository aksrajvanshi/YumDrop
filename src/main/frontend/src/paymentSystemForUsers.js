import React, {Component} from "react";
import ReactDom from "react-dom";
import StripeCheckout from "react-stripe-checkout";

class paymentSystemForUsers extends Component{

    render() {
        return (
            <div>
                <p>Hey</p>
                <StripeCheckout stripeKey="pk_test_HnnOsWXZcwhVNx0NaIPxHTeQ00x2wI68WY"/>
            </div>
        );
    }
}

export default paymentSystemForUsers