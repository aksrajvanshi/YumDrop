import React, {Component} from "react";

import StripeCheckout from "react-stripe-checkout";
import {connect} from "react-redux";


const mapStateToProps = (state)=>{
    return {
        userEmailId: state.userId
    }
}
function handleToken(token){
    console.log(token)
}
class paymentSystemForUsers extends Component{
    state = {
        totalPrice: 100,
        restaurantName: ""
    }

    render() {
        return (
            <div> <div className="col-lg-8 pb-5">
                <form className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="account-fn">Item Name</label>
                            <input className="form-control" type="text" id="account-fn"
                                   placeholder={this.state.itemName}/>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label htmlFor="account-email">Quantity</label>
                            <input className="form-control" type="email" id="account-email" placeholder={this.state.userEmailId}
                                   disabled=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group" id="RemoveButton">
                            <button className="delete btn btn-danger" title="Delete" data-toggle="tooltip"><i
                                className="material-icons">Remove</i></button>
                        </div>
                    </div></form>
                <div className="container">
                    <div className="rounded-circle">
                        <p>{this.props.userEmailId}</p>
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
            </div></div>
        );
    }
}



export default  connect(mapStateToProps) (paymentSystemForUsers);