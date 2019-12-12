import React from "react"
import StripeCheckout from "react-stripe-checkout";

class tryStripeCheckout extends React.Component{
    state = {
        totalPrice: 1,
        restaurantName: "mai"
    }
    handleTokenAPI = (token) => {
        console.log("Insdie this");
        console.log(token.email);
        console.log("Later");
        console.log(token.card.brand);
        console.log(token.card.country);
        console.log(token.card.cvc_check);
        console.log(token.card.exp_month);
        console.log(token.card.exp_year);
        console.log(token.card.funding);
        console.log(token.card.last4);
        this.setState({
            email: token.email,
            brand: token.card.brand,
            country: token.country,
            cvc_check: token.card.cvc_check,
            exp_month: token.card.exp_month,
            funding: token.card.funding,
            last4: token.card.last4
        })
        console.log("End")
        this.sendCardDetailsForPayment();
    }
    render() {
        return(
            <div>
                <StripeCheckout stripeKey="pk_live_qksmj6ho2DblvlfR5PNKgzea00zC51Ydfw"
                                amount={this.state.totalPrice}
                                token={this.handleTokenAPI}
                                name={this.state.restaurantName}


                />
            </div>
        )
    }

}
export default tryStripeCheckout