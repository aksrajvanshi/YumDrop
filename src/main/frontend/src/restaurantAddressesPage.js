import React, { Component } from "react";
import './MySettingsPage.css';

class UserSettingsPageAddresses extends Component{
    state = {
        data: [],
        restaurantName: "",
        restaurantEmailId:  "",
        restaurantPhoneNumber: "",
        restaurantState: "",
        restaurantCity: "",
        restaurantArea: "",
        restaurantAddress: ""
    }
    returnToLoginDahboard = () => {
        this.props.history.push('/errorPageForRegistration');
    }
    forwardToMyCurrentLocation = () => {
        this.props.history.push('/MyCurrentRestaurantLocation');
    }

    forwardToAddAddress = () => {
        this.props.history.push('/MyCurrentRestaurantLocation');
    }
    goBacktToMyRestaurantSettings = () => {
        this.props.history.push('/RestaurantSettingsPage');
    }
    forwardToResetPassword = () => {
        this.props.history.push('/RestaurantResetPassword');
    }


    componentDidMount () {
        fetch('/getRestaurantDetails')
            .then(res => res.json()
            ).then(data => {
            this.setState({restaurantCity: data.restaurantCity, restaurantArea: data.restaurantArea, restaurantAddress: data.restaurantAddress, restaurantState: data.restaurantState})
        })}


    render() {
        let trying = this.state.data;
        console.log(trying);
        console.log(this.state.trying);
        console.log("hey trying to run this");
        return (
            <div>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#">YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="upper-links dropdown"><a className="links" onClick={this.returnToLoginDahboard}
                                    >Home</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="profile-links"
                                            >My Account</a></li>
                                            <li className="profile-li"><a>My Orders</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="cart largenav col-sm-2">

                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

               <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 pb-5">

                        <div className="author-card pb-3">
                            <div className="author-card-cover"
                            >
                            </div>
                            <div className="author-card-profile">
                                <div className="author-card-avatar"><img
                                    src="https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg" />
                                </div>

                            </div>
                        </div>
                        <div className="wizard">
                            <nav className="list-group list-group-flush">
                                <a className="list-group-item" href="#">
                                    <div className="d-flex justify-content-between align-items-center">

                                    </div>
                                </a><a className="list-group-item " href="#"><i
                                className="fe-icon-user text-muted" onClick={this.goBacktToMyRestaurantSettings}></i>Profile Settings</a><a
                                className="list-group-item active" href="#" active><i className="fe-icon-map-pin text-muted"></i>Addresses</a>
                                <a className="list-group-item" href="#">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div><i className="fe-icon-heart mr-1 text-muted"></i>
                                            <div className="d-inline-block font-weight-medium text-uppercase" onClick={this.forwardToResetPassword}>Reset Password
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </nav>
                        </div>
                    </div>

                    <div className="col-lg-8 pb-5">
                        <form className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="account-fn">Address</label>
                                    <input className="form-control" type="text" id="account-fn"
                                           placeholder={this.state.userAddress}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="account-ln">City</label>
                                    <input className="form-control" type="text" id="account-ln" placeholder={this.state.userCity}
                                           required=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="account-email">Area</label>
                                    <input className="form-control" type="email" id="account-email" placeholder={this.state.userArea}
                                           disabled=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="account-phone">State</label>
                                    <input className="form-control" type="text" id="account-phone" placeholder={this.state.userState}
                                           required=""/>
                                </div>
                            </div>

                            <div className="col-12">
                                <hr className="mt-2 mb-3"/>
                                <div className="d-flex flex-wrap justify-content-between align-items-center">
                                    <div className="custom-control custom-checkbox d-block">
                                        <input className="custom-control-input" type="checkbox"
                                               id="subscribe_me" checked=""/>

                                    </div>
                                    <button onClick={this.forwardToAddAddress} className="btn btn-style-1 btn-primary" type="button" data-toast=""
                                            data-toast-position="topRight" data-toast-type="success"
                                            data-toast-icon="fe-icon-check-circle" data-toast-title="Success!"
                                            data-toast-message="Your profile updated successfuly.">Add Address
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }

}

export default UserSettingsPageAddresses;