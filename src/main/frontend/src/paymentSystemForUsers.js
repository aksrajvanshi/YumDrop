import React, {Component} from "react";
import ReactDom from "react-dom";
import StripeCheckout from "react-stripe-checkout";

class paymentSystemForUsers extends Component{
    state = {
        totalPrice: 100,
        restaurantName: ""
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="rounded-circle">
                        <h4>{this.state.restaurantName}</h4>
                        <h5>{this.state.totalPrice}</h5>
                <p>Hey</p>
                <StripeCheckout stripeKey="pk_live_qksmj6ho2DblvlfR5PNKgzea00zC51Ydfw"
                amount={this.state.totalPrice}
                                token={handleToken}
                name={this.state.restaurantName}

                />
                    </div>
                </div>
            </div>
        );
    }
}

function handleToken(token){
    console.log(token)
}

export default paymentSystemForUsers