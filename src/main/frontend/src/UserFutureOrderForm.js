// Form for user to allow for 3 maximum advance orders within 3 maximum days

import React, { Component } from "react";

class UserFutureOrderForm extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        return (
            <div>
                <p>Allow user to input and collect data for "future_user_orders" table (order_id,user_email,future_order_1_time,restaurant_1_id,order_1_contents,...) </p>
            </div>
        );
    }
}

export default UserFutureOrderForm;