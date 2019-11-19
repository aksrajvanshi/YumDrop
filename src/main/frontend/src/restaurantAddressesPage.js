import React, { Component } from "react";
import {connect} from 'react-redux';
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

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    forwardToRestaurantDashboard = () => {
        this.props.history.push('/RestaurantDashboard');
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
    let currentComponent = this;
    fetch('/getRestaurantDataForDashboard', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify({
        restaurantId: currentComponent.props.restaurantId
        }),
        }).then(function(response) {
           return response.json();
        }).then(function(data) {
             const userName = data.userName;
            currentComponent.setState({
        restaurantName: data.restaurantName,
        restaurantAddress: data.restaurantAddress
    });
})
}


    render() {
        let trying = this.state.data;
        if(this.props.restaurantId === null) {
            this.props.history.push('/')
        }
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
                            <a className="navbar-brand " href="#" onClick={this.forwardToRestaurantDashboard}>YumDrop</a>
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
                                        <a className="nav-link" onClick={this.signOut}>Sign Out</a>
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
                                </a><a className="list-group-item " href="#" onClick={this.goBacktToMyRestaurantSettings}><i
                                className="fe-icon-user text-muted" ></i>Profile Settings</a><a
                                className="list-group-item active" href="#"><i className="fe-icon-map-pin text-muted"></i>Addresses</a>
                                <a className="list-group-item" href="#" onClick={this.forwardToResetPassword}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div><i className="fe-icon-heart mr-1 text-muted"></i>
                                            <div className="d-inline-block font-weight-medium text-uppercase">Reset Password
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
                                    <label htmlFor="account-fn">Name</label>
                                    <input className="form-control" type="text" id="account-fn"
                                           placeholder={this.state.restaurantName}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="account-ln">Address</label>
                                    <input className="form-control" type="text" id="account-ln" placeholder={this.state.restaurantAddress}
                                           required=""/>
                                </div>
                            </div>



                            <div className="col-12">
                                <hr className="mt-2 mb-3"/>
                                <div className="d-flex flex-wrap justify-content-between align-items-center">

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

const mapStateToProps = (state) => {
    return {
        restaurantId: state.userId
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserSettingsPageAddresses);