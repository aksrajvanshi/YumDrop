import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import DeliveryAgentLoginForm from "./DeliveryAgentLoginForm";
import {connect} from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button, Dropdown, DropdownButton} from "react-bootstrap";
import { isMobilePhone, isEmail } from "validator";
import { GoogleLogin } from 'react-google-login';
import DeliveryAgentOTPpage from "./DeliveryAgentOTPpage";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Recaptcha from 'react-recaptcha';

class App extends Component {
    constructor(props){
        super(props)
    }

    state = {

        closeAllOptionsOfSelectionForm: false,
        deliveryAgentRegister: true,
        deliveryAgentEmail:"",
        deliveryAgentName:"",
        deliveryAgentPhonenum:"",
        deliveryAgentPassword:"",
        deliveryAgentConfirmPassword:"",
        deliveryAgentOtp: "",
        deliveryAgentOtpVal: false,
        isReCaptchaVerified: false

    };

    forwardToDeliveryAgentLoginForm = () => {
        this.props.history.push('/DeliveryAgentLoginForm');
    }


    forwardToDeliveryAgentOTPpage = () => {
        this.props.history.push({
                pathname : '/DeliveryAgentOTPpage',
                state :{
                    name : this.state.userName
                }
            }
        );

    }

    forwardToErrorPageForDeliveryAgentRegistration = () => {
        this.props.history.push('/ErrorPageForDeliveryAgentRegistration');
    }


    registerDeliveryAgent() {
        debugger;
        let obj = {}
        fetch('/deliveryAgentRegistration',
            {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({

                        deliveryAgent_email: this.state.deliveryAgentEmail,
                        deliveryAgent_phonenum: this.state.deliveryAgentPhonenum

                    }
                )

            }
        ).then(res => {

            if (res.status !== 200) {
                this.setState({redirect: false, deliveryAgentRegister: false});
                this.forwardToErrorPageforDeliveryAgentRegistration();

            }else {
                if(this.state.isReCaptchaVerified) {
                    this.setState({redirect: false, deliveryAgentRegister: false, deliveryAgentOtpVal: true});
                }
                else {
                    this.setState({redirect: false, deliveryAgentRegister: false});
                    this.forwardToErrorPageforDeliveryAgentRegistration();
                }
            }

        })

    }

    verifyCallback = response => {
        if(response) {
            this.setState({
                isReCaptchaVerified: true
            })
        }
    }

    deliveryAgentRegisterOtp() {
        debugger;
        let obj = {}
        fetch('/verifyOTPandRegisterDeliveryAgent',
            {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                        deliveryAgent_email: this.state.deliveryAgentEmail,
                        deliveryAgent_phonenum: this.state.deliveryAgentPhonenum,
                        deliveryAgent_password: this.state.deliveryAgentPassword,
                        deliveryAgent_otp: this.state.deliveryAgentOtp,
                        deliveryAgent_name: this.state.deliveryAgentName

                    }
                )

            }
        ).then(res => {
            if (res.status !== 200) {
                this.setState({redirect: true, deliveryAgentRegister: false});
                this.forwardToErrorPageForDeliveryAgentRegistration();

            }else {
                this.setState({redirect: true, deliveryAgentRegister: false});
                this.forwardToSuccessPage();

            }
        })
    }

    forwardToSuccessPage = () => {
        this.props.history.push('/SuccessfulRegistration');
    }


    registerSelect = () => {
        this.setState({
            userRegister: false,
            registerSelect: true,
            restaurantRegister: false,
            deliveryAgentRegister: false
        });
    };


    closeAllOptionsOfSelectionForm = () => {
        this.goBackToHomePage();
        this.setState({
            userRegister: false,
            restaurantRegister: false,
            registerSelect: false,
            deliveryAgentRegister: false
        });
    }

    goBackToHomePage = () => {
        this.props.history.push("/")
    }

    getTitle()
    {
        if (this.state.userLoginOption) {
            return "User Login";
        } else if (this.state.restaurantLoginOption) {
            return "Restaurant Login";
        } else if (this.state.deliveryAgentLoginOption) {
            return "Delivery Agent Login";
        }
    }
    userRegister = () => {
        this.setState({
            userRegister: true,
            registerSelect: false,
            restaurantRegister: false,
            deliveryAgentRegister: false
        });
    };
    restaurantRegister = () => {
        this.setState({
            userRegister: false,
            registerSelect: false,
            restaurantRegister: true,
            deliveryAgentRegister: false
        });
    };

    handleDeliveryAgentOtpChange = (event) => {
        this.setState({
            deliveryAgentOtp: event.target.value,
        })
    }

    handleDeliveryAgentEmail = (event) => {
        this.setState({
            deliveryAgentEmail: event.target.value,
        })
    }
    handleDeliveryAgentName = (event) => {
        this.setState({
            deliveryAgentName: event.target.value,
        })
    }

    handleDeliveryAgentPhonenum = (event) => {
        this.setState({
            deliveryAgentPhonenum: event.target.value,
        })
    }

    handleDeliveryAgentPassword = (event) => {
        this.setState({
            deliveryAgentPassword: event.target.value,
        })
    }
    handleDeliveryAgentConfirmPassword = (event) => {
        this.setState({
            deliveryAgentConfirmPassword: event.target.value,
        })
    }



    deliveryAgentRegister = () => {
        this.setState({
            userRegister: false,
            registerSelect: false,
            restaurantRegister: false,
            deliveryAgentRegister: true
        });
    };

    render()
    {
        const responseFacebook = (response) => {
            this.state.facebookUserAccessToken = response.accessToken;
            this.state.facebookUserId = response.userID;
            let api = 'https://graph.facebook.com/v2.8/' + this.state.facebookUserId +
                '?fields=name,email&access_token=' + this.state.facebookUserAccessToken;
            fetch(api)
                .then((responses) => responses.json())
                .then( (responseData) => {
                    this.state.facebookUserEmail= responseData.email;
                    this.state.facebookUserName= responseData.name;
                }).then( (res) => {

                fetch('/facebookUserRegistration',
                    {
                        method: 'POST',
                        redirect: 'follow',
                        headers: {
                            "Content-Type": "application/json",
                            'Access-Control-Allow-Origin': '*'
                        },
                        body: JSON.stringify({
                            fbUserEmail: this.state.facebookUserEmail,
                            fbUserID: this.state.facebookUserId,
                            fbUserAccessToken: this.state.facebookUserAccessToken,
                            fbUserName: this.state.facebookUserName

                        })
                    }
                ).then(res => {

                    if (res.status !== 200) {
                        this.forwardToErrorPage();
                    }else {
                        this.forwardToSuccessPage();
                    }
                })
            });
        }

        return (
            <div className="App">
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"
                          id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                          id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"/>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                          id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
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
                                        <a className="nav-link" onClick={this.forwardToLoginForm}><i
                                            className="fa fa-fw fa-user"/>Login</a>
                                    </li>
                                    <li className="nav-item" id="SignUpID">
                                        <a className="nav-link" onClick={this.registerSelect}>Sign Up</a>
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
                            <p id="para">Are you hungry?</p>
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
                                            <button className="btn btn-lg btn-danger">Order</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <Modal
                    show={this.state.deliveryAgentOtpVal}
                    onHide={this.closeAllOptionsOfSelectionForm}
                    animation={false}
                    centered id="restaurantRegister"
                >
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form onSubmit={this.deliveryAgentRegisterOtp.bind(this)}>
                                        <h2 className="text-center">Please provide 6 digit OTP</h2>
                                        <div className="form-group">
                                            <input value={this.state.deliveryAgentOtp}
                                                   onChange={this.handleDeliveryAgentOtpChange} type="text"
                                                   className="form-control" placeholder="OTP"
                                                   pattern="[a-z][A-Z]"
                                                   id="textBoxRegisterRestaurant"
                                                   required="required"/>
                                        </div>

                                        <div className="form-group">
                                            <button onClick={this.deliveryAgentRegisterOtp.bind(this)} type="submit"
                                                    className="btn btn-primary btn-lg btn-block login-btn">Sign Up
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>


                <Modal
                    show={this.state.deliveryAgentRegister}
                    onHide={this.closeAllOptionsOfSelectionForm}
                    animation={false}
                    centered id="restaurantRegister"
                >

                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form onSubmit={this.registerDeliveryAgent.bind(this)}>
                                        <h2 className="text-center">Delivery Agent Sign Up</h2>

                                        <div className="form-group">
                                            <input value={this.state.deliveryAgentName}
                                                   onChange={this.handleDeliveryAgentName} type="text"
                                                   className="form-control" placeholder="Full Name"
                                                   title="Please enter your full name"
                                                   id="textBoxRegisterRestaurant"
                                                   pattern="(?=.*[a-zA-Z]).{1,}"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.deliveryAgentEmail}
                                                   onChange={this.handleDeliveryAgentEmail} type="text"
                                                   className="form-control" placeholder="Email ID"
                                                   title="Please enter a valid email address"
                                                   id="textBoxRegisterRestaurant"
                                                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                   required="required"/>
                                        </div>

                                        <div className="form-group">
                                            <input type="password" value={this.state.deliveryAgentPassword}
                                                   onChange={this.handleDeliveryAgentPassword} className="form-control"
                                                   id="textBoxRegisterRestaurant"
                                                   placeholder="Password"
                                                   title="Password must be 8 characters or longer and contain a lower case letter, capital letter, and a special character"
                                                   pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={this.state.deliveryAgentConfirmPassword}
                                                   onChange={this.handleDeliveryAgentConfirmPassword}
                                                   id="textBoxRegisterRestaurant"
                                                   className="form-control" placeholder="Confirm password"
                                                   checked={this.state.deliveryAgentPassword === this.state.deliveryAgentConfirmPassword}
                                                   title="Please enter your password again"
                                                   pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   value={this.state.deliveryAgentPhonenum}
                                                   onChange={this.handleDeliveryAgentPhonenum}
                                                   id="textBoxRegisterRestaurant"
                                                   placeholder="Phone  Number"

                                                   pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                        <Recaptcha
                                            sitekey="6LfA28AUAAAAAAdm39FjgIVi38BoyQoLDKTM5EJN"
                                            render="explicit"
                                            onloadCallback={this.recaptchaLoaded}
                                            verifyCallback={this.verifyCallback}

                                        />
                                        </div>
                                        <div className="form-group">
                                            <button onClick={this.registerDeliveryAgent.bind(this)} type="submit"
                                                    className="btn btn-primary btn-lg btn-block login-btn">Sign Up
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>


                <br/><br/><br/><br/>
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
                            <img src="https://cdn.clipart.email/3a7d43627822f0b19af9bd540aebd827_food-delivery-man-clipart-clipartxtras_170-155.jpeg"
                                 className="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 how-img">
                            <img src="https://activmeals.com/images/step3.png"
                                 className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4>Pickup or delivery from restaurants near you</h4>

                            <h4 className="subheading">Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave, and order online or through the YumDrop app. Find great meals fast with lots of local menus. Enjoy eating the convenient way with places that deliver to your door..</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Easy Pay</h4>
                            <h4 className="subheading">Pay for food with one click of a button.
                                Multiple payment options. </h4>
                        </div>
                        <div className="col-md-6 how-img">
                            <img src="https://www.trzcacak.rs/myfile/full/377-3774169_payment-channel-payment-channel-payment-channel-payment-bank.png"
                                 className="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;