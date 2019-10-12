import React, { Component } from "react";
import App from "./App";
import ReactDOM from 'react-dom';
import {Button, Modal} from "react-bootstrap";

/***const LoginPage = (props) => {
    console.log(props)
    return (
        <div>
            <p> vnfijgbfo</p>
        </div>
    )
}***/
class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            selectLogin: false,
            userLoginOptionSelected: false,
            restaurantLoginOptionSelected: false,
            deliveryAgentLoginOptionSelected: false
        }
    }
    getTitle() {
        if (this.state.UserLogin) {
            return "User Login";
        } else if (this.state.RestaurantLogin) {
            return "Restaurant Login";
        } else if (this.state.DeliveryLogin) {
            return "Delivery Login";
        }
    }

    userLoginSelection = () => {
        this.setState({
            userLoginOptionSelected: true,
            selectLogin: false,
            restaurantLoginOptionSelected: false,
            deliveryAgentLoginOptionSelected: false
        });
    };
    selectLogin = () => {
        this.setState({ SelectLogin: true });
    };


    render() {
        return (
            <div>
               <p>fndvnfdvkm i</p>
            </div>
        );
    }
}


export default LoginPage;