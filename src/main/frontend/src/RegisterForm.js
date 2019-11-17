import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button, Dropdown, DropdownButton} from "react-bootstrap";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import Recaptcha from 'react-recaptcha';

class App extends Component {
    constructor(props){
        super(props)
    }

    state = {
        closeAllOptionsOfSelectionForm: false,
        userName: "",
        userPassword: "",
        userRegister: false,
        restaurantRegister: false,
        deliveryAgentRegister: false,
        userPhoneNumber: "",
        userEmailID: "",
        otpVal: false,
        registerSelect: true,
        userFullName: "",
        userConfirmPassword: "",
        restaurantFullName: "",
        restaurantPrimaryEmailId: "",
        restaurantId: "",
        restaurantSecondaryEmailID: "",
        restaurantPrimaryPhoneNumber: "",
        restaurantSecondaryPhoneNumber: "",
        restaurantPassword: "",
        restaurantConfirmPassword: "",
        redirect: false,
        userOtp: "",
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        facebookUserAccessToken: "",
        facebookUserId: "",
        facebookUserEmail: "",
        facebookUserName:"",
        isReCaptchaVerified: false

    };

    verifyCallback = response => {
        if(response) {
            this.setState({
                isReCaptchaVerified: true
            })
        }
    }

    forwardToLoginForm = () => {
        this.props.history.push('/LoginForm');
    }

    forwardToErrorPage = () => {
        this.props.history.push('/errorPageForRegistration');
    }

    register() {
        debugger;
        let obj = {}
        fetch('/userRegistration',
            {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                        user_email: this.state.userEmailID,
                        user_phonenum: this.state.userPhoneNumber
                    }
                )

            }
        ).then(res => {


            if (res.status !== 200) {
                this.setState({redirect: true, userRegister: false});
            }else {
                if(this.state.isReCaptchaVerified) {
                    this.setState({redirect: true, userRegister: false, otpVal: true});
                }
                else {
                    this.setState({redirect: true, userRegister: false});
                }
            }


        })
    }

    registerOtp() {
        debugger;
        let obj = {}
        fetch('/verifyOTPandRegisterUser',
            {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                        user_email: this.state.userEmailID,
                        user_phonenum: this.state.userPhoneNumber,
                        user_password: this.state.userPassword,
                        user_otp: this.state.userOtp,
                        user_name: this.state.userFullName

                    }
                )

            }
        ).then(res => {


            if (res.status !== 200) {
                this.setState({redirect: true, userRegister: false});
                this.forwardToErrorPage();
                
            }else {
                this.setState({redirect: true, userRegister: false});
                this.forwardToSuccessPage();
                
            }

        })
    }

    forwardToSuccessPage = () => {
        this.props.history.push('/SuccessfulRegistration');
    }

    forwardToRestaurantRegistrationForm = () => {
        this.props.history.push('/RestaurantRegister')
    }

    handleUserNameChange = (event) => {
        this.setState({
            userFullName: event.target.value,
        });
    };

    handleUserEmailIdChange = (event) => {
        this.setState({
            userEmailID: event.target.value,
        });
    };

    handleUserPhoneNumberChange = (event) => {
        this.setState({
            userPhoneNumber: event.target.value,
        });
    };

    handleUserPasswordChange = (event) => {
        this.setState({
            userPassword: event.target.value,
        });
    };

    handleUserConfirmPasswordChange = (event) => {
        this.setState({
            userConfirmPassword: event.target.value,
        });
    };




    handleUserOtpChange = (event) => {
        this.setState({
            userOtp: event.target.value,
        })
    }

    closeAllOptionsOfSelectionForm = () => {
        this.setState({
            userRegister: false,
            restaurantRegister: false,
            registerSelect: false,
            deliveryAgentRegister: false
        });
    }

    userRegister = () => {
        this.setState({
            userRegister: true,
            restaurantRegister: false,
            registerSelect: false,
            deliveryAgentRegister: false

        })
    }



    goBackToHomePAge = () => {
        this.props.history.push("/")
    }

    forwardToDeliveryAgentRegistration = () => {
        this.props.history.push("/DeliveryAgentRegistration");
    }

    registerSelect = () => {
        this.setState({
            userRegister: false,
            restaurantRegister: false,
            registerSelect: true,
            deliveryAgentRegister: false
        })
    }

    render()
    {
        const responseFacebook = (response) => {
            console.log(response);
            this.state.facebookUserAccessToken = response.accessToken;
            this.state.facebookUserId = response.userID;
            console.log("User ID", this.state.facebookUserId);
            console.log("Access Token ", this.state.facebookUserAccessToken);
            let api = 'https://graph.facebook.com/v2.8/' + this.state.facebookUserId +
                '?fields=name,email&access_token=' + this.state.facebookUserAccessToken;
            fetch(api)
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData)
                    this.state.facebookUserEmail = responseData.email;
                    this.state.facebookUserName = responseData.name;
                    console.log("Inside fetch api");
                    console.log(responseData.email);
                }).then(response => {
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

                            }
                        )

                    }
                ).then(res => {

                    if (res.status !== 200) {
                        this.forwardToErrorPage();
                    } else {
                        this.forwardToSuccessPage();
                    }
                })

            })
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
                            <a className="navbar-brand " onClick={this.goBackToHomePAge}>YumDrop</a>
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
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AR">Arizona</option>
                                                <option value="AZ">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DC">Delaware</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="IA">Idaho</option>
                                                <option value="ID">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="KS">Iowa</option>
                                                <option value="KY">Kansas</option>
                                                <option value="LA">Kentucky</option>
                                                <option value="MA">Louisiana</option>
                                                <option value="MD">Maine</option>
                                                <option value="ME">Maryland</option>
                                                <option value="MI">Massachusetts</option>
                                                <option value="MN">Michigan</option>
                                                <option value="MO">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MT">Missouri</option>
                                                <option value="NC">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NH">Nevada</option>
                                                <option value="NJ">New Hampshire</option>
                                                <option value="NM">New Jersey</option>
                                                <option value="NV">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="ND">North Carolina</option>
                                                <option value="OH">North Dakota</option>
                                                <option value="OK">Ohio</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WI">West Virginia</option>
                                                <option value="WV">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
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
                                    <div className="col-md-1" >
                                        <div className="md-form">
                                            <button className="btn btn-primary btn-md"><span id="SearchBar">Search</span></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <Modal
                    show={this.state.registerSelect}
                    onHide={this.closeAllOptionsOfSelectionForm}
                    animation={false}
                    centered id="modal"
                >
                    <Modal.Header className="modelheader" id="containerModal" center>
                        <Modal.Title className="modeltitle" id="modeltitle" center>
                            <strong>Register me as a</strong>
                        </Modal.Title>
                    </Modal.Header>


                    <div className="container" id="containerSelectAccount">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form>
                                        <div className="form-group">
                                            <button  type="submit"
                                                     onClick={this.userRegister}   className="btn btn-primary btn-lg btn-block">Customer
                                            </button>
                                        </div>

                                        <div className="form-group">
                                            <button  onClick={this.forwardToRestaurantRegistrationForm}
                                                     className="btn btn-primary btn-lg btn-block">Restaurant Owner
                                            </button>
                                        </div>

                                        <div className="form-group">
                                            <button  type="submit" onClick={this.forwardToDeliveryAgentRegistration}
                                                     className="btn btn-primary btn-lg btn-block">Delivery Agent
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>


                </Modal>
                <Modal
                    show={this.state.otpVal}
                    onHide={this.closeAllOptionsOfSelectionForm}
                    animation={false}
                    centered id="modal"
                >
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form onSubmit={this.registerOtp.bind(this)}>
                                        <h2 className="text-center">Please provide 6 digit OTP</h2>
                                        <div className="form-group">
                                            <input value={this.state.userOtp}
                                                   onChange={this.handleUserOtpChange} type="text"
                                                   className="form-control" placeholder="OTP"
                                                   pattern="[a-z][A-Z]"
                                                   required="required"/>
                                        </div>

                                        <div className="form-group">
                                            <button onClick={this.registerOtp.bind(this)} type="submit"
                                                    className="btn btn-primary btn-lg btn-block login-btn">Verify
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>
                <Modal
                    show={this.state.userRegister}
                    onHide={this.closeAllOptionsOfSelectionForm}
                    animation={false}
                    id="modal"
                >
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form onSubmit={this.register.bind(this)}>
                                        <h2 className="text-center">Customer Sign Up</h2>
                                        <br/>
                                        <div className="social-btn text-center">

                                            <FacebookLogin
                                                appId="1250006828526117"
                                                callback={responseFacebook}
                                                render={renderProps => (
                                                    <button className="btn btn-primary btn-block btn-lg" onClick={renderProps.onClick}><i
                                                        className="fa fa-facebook"></i> Sign up with <b>Facebook</b> </button>
                                                )}
                                            />

                                        </div>
                                        <div className="or-seperator"><i>or</i></div>
                                        <div className="form-group">
                                            <input value={this.state.userFullName}
                                                   onChange={this.handleUserNameChange} type="text"
                                                   className="form-control" placeholder="Full Name"
                                                   title="Please enter your full name"
                                                   pattern="(?=.*[a-zA-Z]).{1,}"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.userEmailID}
                                                   onChange={this.handleUserEmailIdChange} type="text"
                                                   className="form-control" placeholder="Email ID"
                                                   title="Please enter a valid email address"
                                                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={this.state.userPassword}
                                                   onChange={this.handleUserPasswordChange} className="form-control"
                                                   id="userPassword"
                                                   placeholder="Password"
                                                   title="Password must be 8 characters or longer and contain a lower case letter, capital letter, and a special character"
                                                   pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={this.state.userConfirmPassword}
                                                   onChange={this.handleUserConfirmPasswordChange}
                                                   id="userConfirmPassword"
                                                   className="form-control" placeholder="Confirm password"
                                                   checked={this.state.userPassword === this.state.userConfirmPassword}
                                                   title="Please enter your password again"
                                                   pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   value={this.state.userPhoneNumber}
                                                   onChange={this.handleUserPhoneNumberChange}
                                                   placeholder="Phone  Number"
                                                   title="Please enter a valid phone number Ex: +X XXX-XXX-XXXX"
                                                   pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$"
                                                   required="required"/>
                                        </div>
                                        <Recaptcha
                                            sitekey="6LfA28AUAAAAAAdm39FjgIVi38BoyQoLDKTM5EJN"
                                            render="explicit"
                                            onloadCallback={this.recaptchaLoaded}
                                            verifyCallback={this.verifyCallback}

                                        />
                                        <br/>
                                        <div className="form-group">
                                            <button onClick={this.register.bind(this)} type="submit"
                                                    className="btn btn-primary btn-lg btn-block">Sign Up
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
