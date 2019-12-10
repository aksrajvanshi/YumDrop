import React, { Component } from "react";
import "./App.css";
import './LoginFormCSS.css';
import './DeliveryAgentLoginFormCSS.css';
import './DeliveryAgentLoginErrorPage';
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button, Dropdown, DropdownButton} from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {connect} from "react-redux";

class App extends Component {
    state = {

        loginSelect: true,
        closeAllOptionsOfSelectionForm: false,
        redirect: false,
        forgotPasswordSelect: false,
        emailSelectForgotPassword: false,

        deliveryAgentLoginOptionSelected: true,
        deliveryAgentEmail:"",
        deliveryAgentPassword:"",
        deliveryAgentOtp: ""

    };



    deliveryAgentLogin = () => { debugger;
        fetch('/deliveryAgentLoginDataForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                deliveryAgentEmail: this.state.deliveryAgentEmail,
                deliveryAgentPassword: this.state.deliveryAgentPassword
            }),
        }).then(res => {

            if (res.status !== 200) {
                this.setState({redirect: true, deliveryAgentLoginOptionSelected: false});
                this.forwardToDeliveryAgentLoginErrorPage();
            }else {
                this.setState({redirect: true, deliveryAgentLoginOptionSelected: false});
                this.props.setUser(this.state.deliveryAgentEmail);
                this.forwardToDeliveryAgentDashboard();
            }
        })
    }

    passwordChange  = () => { debugger;
        fetch('/setNewUserPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: this.state.userEmail,
                temporaryPassword: this.state.userTemporaryPassword,
                newPassword: this.state.userPassword
            }),
        }).then(res => {


            if (res.status !== 200) {
                this.setState({redirect: true, userRegister: false});
                this.forwardToLoginErrorPage();

            }else {
                this.setState({redirect: true, userRegister: false, emailSelectForgotPassword: false, forgotPasswordSelect: true});
                this.forwardToSuccessfullyChangedPasswordPage();

            }


        })

    }

    forgotPasswordAPI = () => { debugger;
        fetch('/forgotUserPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: this.state.userEmail
            }),
        }).then(res => {


            if (res.status !== 200) {
                this.setState({redirect: true, userRegister: false});
                this.forwardToLoginErrorPage();

            }else {
                this.setState({redirect: true, userRegister: false, emailSelectForgotPassword: false, forgotPasswordSelect: true});

            }


        })

    }

    forwardToDeliveryAgentLoginErrorPage = () => {
        this.props.history.push("/deliveryAgentLoginErrorPAge")
    }

    forwardToSuccessfullyChangedPasswordPage = () => {
        this.props.history.push("/successfullyChangedPasswordPage");
    }


    loginSelect = () => {
        this.setState({
            userLoginOption: false,
            loginSelect: true,
            restaurantLoginOption: false,
            deliveryAgentLoginOptionSelected: false
        });
    };


    forwardToDeliveryAgentRegistration = () => {
        this.props.history.push('/DeliveryAgentRegistration')
    }

    forwardToDeliveryAgentLoginForm = () => {
        this.props.history.push('/DeliveryAgentLoginForm')
    }

    forwardToDeliveryAgentDashboard = () => {
        this.props.history.push('/DeliveryAgentDashboard')
    }

    forwardToDeliveryAgentOTPpage = () => {
        this.props.history.push('/DeliveryAgentOTPpage')
    }

    forwardToDeliveryAgentOTPResetPassword = () => {
        this.props.history.push('/DeliveryAgentOTPResetPassword')
    }

    handleDeliveryAgentLoginOptionSelected  = () => {
        this.setState({ loginSelect: false, selectLoginOption:false, restaurantLoginOption: false, deliveryAgentLoginOptionSelected: true  });
    }


    closeAllOptionsOfSelectionForm= () => {
        this.goBackToHomePage();
        this.setState({ userLoginOption: false, loginSelect:false, restaurantLoginOption: false, deliveryAgentLoginOptionSelected: false, forgotPasswordSelect: false, emailSelectForgotPassword: false  });
    }

    handleForgotPasswordChange = () => {
        this.setState({userLoginOption: false, loginSelect:false, restaurantLoginOption: false, deliveryAgentLoginOptionSelected: false, emailSelectForgotPassword: true  });
    }


    handleDeliveryAgentPasswordChange = (event) => {
        this.setState({
            deliveryAgentPassword: event.target.value,
        });
    };

    handleDeliveryAgentEmailChange = (event) => {
        this.setState({
            deliveryAgentEmail: event.target.value,
        });
    };

    goBackToHomePage = () => {
        this.props.history.push("/")
    }

    render() {

        return( <div className="App">
            <header>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"/>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"/>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>
                <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"/>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"/>
                <nav className=" navbar navbar-expand-lg navbar-dark ">
                    <div className="container">
                        <a className="navbar-brand " href="#" onClick={this.goBackToHomePage}>YumDrop</a>
                        <div className="collapse navbar-collapse" id="navBarLinks">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.loginSelect}><i
                                        className="fa fa-fw fa-user"/>Login</a>
                                </li>
                                <li className="nav-item" id="SignUpID">
                                    <a className="nav-link" onClick={this.forwardToRegister}>Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="view rgba-black-light">
                <br/><br/><br/>
                <div className="">
                    <li>
                        <p id="para"> Are you hungry?</p>
                    </li>
                    <ul className="list-unstyled">
                        <br/><br/><br/><br/>
                        <li>
                            <div className="form-row" data-wow-delay="0.4s">
                                <div className="col-md-5" id="firstbar">
                                    <div className="md-form">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Bloomington, Indiana</option>
                                            <option>Indianapolis, Indiana</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="md-form">
                                        <input type="text"
                                               placeholder="Search for food, cuisines, restaurants here.."
                                               id="form5" className="form-control validate"/>

                                    </div>
                                </div>
                                <div className="col-md-1" id="buttonOrder">
                                    <div className="md-form">
                                        <button className="btn btn-lg btn-danger">Search</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


            <Modal
                show={this.state.emailSelectForgotPassword}
                onHide={this.closeAllOptionsOfSelectionForm}
                animation={false}
                centered id="modal"
            >
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="login-form">
                                <form onSubmit={this.forgotPasswordAPI.bind(this)}>
                                    <h2 className="text-center">Enter your Email ID</h2>
                                    <div className="form-group">
                                        <input value={this.state.userEmail}
                                               onChange={this.handleUserEmailIDChange} type="text"
                                               className="form-control" placeholder="username / email ID"
                                               pattern="[a-z][A-Z]"
                                               required="required"/>
                                    </div>

                                    <div className="form-group">
                                        <button onClick={this.forgotPasswordAPI.bind(this)} type="submit"
                                                className="btn btn-primary btn-lg btn-block login-btn">Submit
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </Modal>


            <Modal
                show={this.state.forgotPasswordSelect}
                onHide={this.closeAllOptionsOfSelectionForm}
                animation={false}
                centered id="modal"
            >
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="login-form">
                                <form onSubmit={this.passwordChange.bind(this)}>
                                    <h2 className="text-center">Change Password</h2>

                                    <div className="form-group">
                                        <input value={this.state.userTemporaryPassword}
                                               onChange={this.handleUserTemporaryPassword} type="text"
                                               className="form-control" placeholder="Username"
                                               pattern="[a-z][A-Z]"
                                               required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <input value={this.state.userPassword}
                                               onChange={this.handleUserPasswordChange} type="password"
                                               className="form-control" placeholder="Password"
                                               pattern="[a-z][A-Z]"
                                               required="required"/>
                                    </div>

                                    <div className="form-group">
                                        <button onClick={this.passwordChange.bind(this)} type="submit"
                                                className="btn btn-primary btn-lg btn-block login-btn">Login
                                        </button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
            <Modal
                show={this.state.deliveryAgentLoginOptionSelected}
                onHide={this.closeAllOptionsOfSelectionForm}
                animation={false}
                centered id="deliveryAgentLoginFormModal"
            >
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="login-form">
                                <form onSubmit={this.deliveryAgentLogin.bind(this)}>
                                    <h2 className="text-center"><strong><b>Delivery Agent Login</b></strong></h2>
                                    <div className="or-seperator"><i><b></b></i></div>
                                    <div className="form-group">
                                        <input value={this.state.deliveryAgentEmail}
                                               onChange={this.handleDeliveryAgentEmailChange} type="text"
                                               id="inputuserLoginFormModalContainer"
                                               className="form-control" placeholder="Email"
                                               pattern="[a-z][A-Z]"
                                               required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <input value={this.state.deliveryAgentPassword}
                                               id="inputuserLoginFormModalContainer"
                                               onChange={this.handleDeliveryAgentPasswordChange} type="password"
                                               className="form-control" placeholder="Password"
                                               pattern="[a-z][A-Z]"
                                               required="required"/>
                                    </div>
                                    <div className="col-md-12 offset-7 form-group">
                                        <a href="#" onClick={this.handleForgotPasswordChange}>Forgot Password?</a>
                                    </div>

                                    <div className="form-group">
                                        <button onClick={this.deliveryAgentLogin.bind(this)} type="submit"
                                                className="btn btn-primary btn-lg btn-block login-btn">Login
                                        </button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </Modal>


            <div className="how-section1">
                <div className="row">
                    <div className="col-md-6 how-img">
                        <img src="https://previews.123rf.com/images/juliasart/juliasart1708/juliasart170800074/83585916-colorful-cafe-isometric-restaurant-building-cartoon-vector-icon-flat-isometric-design-.jpg"
                             className="rounded-circle img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h4>Local favorites</h4>
                        <h4 className="subheading">Satisfy any craving with delivery from popular neighborhood restaurants and chains. Reorder go-tos or find something new.</h4>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Delivery to your doorstep</h4>
                        <h4 className="subheading">Get great food delivered or save time and money and preorder for pick up. Either way, order tracking and updates keep you in the know.</h4>

                    </div>
                    <div className="col-md-6 how-img">
                        <img src="https://cdn4.vectorstock.com/i/1000x1000/05/13/man-holding-pizza-box-and-courier-bag-vector-17210513.jpg"
                             className="rounded-circle img-fluid" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 how-img">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/37/04/food-delivery-icon-image-vector-16143704.jpg"
                             className="rounded-circle img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h4>Pickup or delivery from restaurants near you</h4>

                        <p className="text-muted">Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave, and order online or through the YumDrop app. Find great meals fast with lots of local menus. Enjoy eating the convenient way with places that deliver to your door..</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Easy Pay</h4>
                        <p className="text-muted">Pay for food with one click of a button.
                            Multiple payment options. Choose a payment method that works best for you</p>
                    </div>
                    <div className="col-md-6 how-img">
                        <img src="https://www.trzcacak.rs/myfile/full/377-3774169_payment-channel-payment-channel-payment-channel-payment-bank.png"
                             className="rounded-circle img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>);
    }
}


const mapStateToProps = (state)=>{
    return {
        deliveryAgentEmail: state.userId
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUser(evt){
            dispatch({type: "setUserId", userId: evt});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);