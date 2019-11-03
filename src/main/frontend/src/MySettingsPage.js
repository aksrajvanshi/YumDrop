import React, { Component } from "react";
import './MySettingsPage.css';

class MySettingsPage extends Component{
    state = {
        data: [],
        userName: "",
        userEmailId:  "",
        userPhoneNumber: ""
    }
     returnToLoginDahboard = () => {
    this.props.history.push('/errorPageForRegistration');
    }
    forwardToMyCurrentLocation = () => {
        this.props.history.push('/MyCurrentLocation');
    }

    componentDidMount () {
        fetch('/getUserDetails')
            .then(res => res.json()
            ).then(data => {
            this.setState({userName: data.userName, userEmailId: data.userEmailId, userPhoneNumber: data.userPhoneNumber})
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
                                            <a className="cart-button">
                                                <svg className="cart-svg " width="16 " height="16 " viewBox="0 0 16 16 ">
                                                    <path
                                                        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 "
                                                        fill="#fff "></path>
                                                </svg>
                                                My Cart
                                            </a>
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
                                            <div><i className="fe-icon-shopping-bag mr-1 text-muted"></i>
                                                <div className="d-inline-block font-weight-medium text-uppercase">Orders
                                                    List
                                                </div>
                                            </div>

                                        </div>
                                    </a><a className="list-group-item active" href="#"><i
                                    className="fe-icon-user text-muted"></i>Profile Settings</a><a
                                    className="list-group-item" href="#"><i className="fe-icon-map-pin text-muted"></i>Addresses</a>
                                    <a className="list-group-item" href="#">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div><i className="fe-icon-heart mr-1 text-muted"></i>
                                                <div className="d-inline-block font-weight-medium text-uppercase">My
                                                    Cart
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
                                        <label htmlFor="account-fn">First Name</label>
                                        <input className="form-control" type="text" id="account-fn"
                                               placeholder={this.state.userName}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account-ln">Last Name</label>
                                        <input className="form-control" type="text" id="account-ln" placeholder={this.state.userName}
                                               required=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account-email">E-mail Address</label>
                                        <input className="form-control" type="email" id="account-email" placeholder={this.state.userEmailId}
                                                disabled=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account-phone">Phone Number</label>
                                        <input className="form-control" type="text" id="account-phone" placeholder={this.state.userPhoneNumber}
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
                                            <button className="btn btn-style-1 btn-primary" type="button" data-toast=""
                                                    data-toast-position="topRight" data-toast-type="success"
                                                    data-toast-icon="fe-icon-check-circle" data-toast-title="Success!"
                                                    data-toast-message="Your profile updated successfuly.">Update
                                                Profile
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

export default MySettingsPage;