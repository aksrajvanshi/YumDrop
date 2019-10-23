import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import {connect} from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button, Dropdown, DropdownButton} from "react-bootstrap";
import { isMobilePhone, isEmail } from "validator";

const mapDispatchToProps = (dispatch)=> {
    return {
        setTest(evt){
            dispatch({type: "SET_TEST", newTest: evt.target.value});
        }
    }
}
const mapStateToProps = (state)=>{
    return {
        test: state.testRed.test,
        test2: state.testRed.test2
    }
}

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
        userOtp: ""
    };

    forwardToLoginForm = () => {
        this.props.history.push('/LoginForm');
    }

    forwardToOTPpage = () => {
        this.props.history.push({
                pathname : '/OTPpage',
                state :{
                    name : this.state.userName
                }
            }
        );

    }

    forwardToErrorPage = () => {
        this.props.history.push('/errorPageForRegistration');
    }


    registerRestaurant() {
        debugger;
        let obj = {}
            fetch('/restaurantRegistration',
                {
                    method: 'POST',
                    redirect: 'follow',
                    headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        restaurantFullName: this.state.restaurantFullName,
                        restaurantPrimaryEmailId: this.state.restaurantPrimaryEmailId,
                        restaurantId: this.state.restaurantId,
                        restaurantSecondaryEmailID: this.state.restaurantSecondaryEmailID,
                        restaurantPrimaryPhoneNumber: this.state.restaurantPrimaryPhoneNumber,
                        restaurantSecondaryPhoneNumber: this.state.restaurantSecondaryPhoneNumber,
                        restaurantPassword: this.state.restaurantPassword,
                        restaurantConfirmPassword: this.state.restaurantConfirmPassword,
                        }
                    )

                }
            ).then(res => {


                if (res.status !== 200) {
                    this.setState({redirect: true, userRegister: false});
                    this.forwardToErrorPage();
                    alert("Hey going to login page");
                }else {
                    this.setState({redirect: true, userRegister: false, otpVal:true});
                    alert("Hey going to otp page");
                }


            })

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
                alert("Hey going to login page");
            }else {
                this.setState({redirect: true, userRegister: false, otpVal:true});
                alert("Hey going to otp page");
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
                alert("Hey going to login page");
            }else {
                this.setState({redirect: true, userRegister: false});
                this.forwardToSuccessPage();
                alert("Hey going to Success page");
            }


        })
    }

    forwardToSuccessPage = () => {
        this.props.history.push('/SuccessfulRegistration');
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

        handleRestaurantFullName = (event) => {
            this.setState({
                restaurantFullName: event.target.value,
            });
        };

        handleRestaurantPrimaryEmailId = (event) => {
            this.setState({
                restaurantPrimaryEmailId: event.target.value,
            })
        }

        handleRestaurantId = (event) => {
            this.setState({
                restaurantId: event.target.value,
            })
        }

        handleRestaurantSecondaryEmailID = (event) => {
            this.setState({
                restaurantSecondaryEmailID: event.target.value,
            })
        }

        handleRestaurantPrimaryPhoneNumber = (event) => {
            this.setState({
                restaurantPrimaryPhoneNumber: event.target.value,
            })
        }

    handleUserOtpChange = (event) => {
        this.setState({
            userOtp: event.target.value,
        })
    }
        handlerestaurantSecondaryPhoneNumber = (event) => {
            this.setState({
                restaurantSecondaryPhoneNumber: event.target.value,
            })
        }

        handleRestaurantPassword = (event) => {
            this.setState({
                restaurantPassword: event.target.value,
            })
        }

        handleRestaurantConfirmPassword = (event) => {
            this.setState({
                restaurantConfirmPassword: event.target.value,
            })
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
            this.setState({
                userRegister: false,
                restaurantRegister: false,
                registerSelect: false,
                deliveryAgentRegister: false
            });
        }
        forwardToLogin = () => {
            this.props.history.push('/Login');
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

        deliveryAgentRegister = () => {
            this.setState({
                userRegister: false,
                registerSelect: false,
                restaurantRegister: false,
                deliveryAgentRegister: true
            });
        };

        userPasswordConfirmation = () => {
            var password = document.getElementById("userPassword");
            var confirmPassword = document.getElementById("userConfirmPassword");
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity("Passwords must match");
            }
            else {
                confirmPassword.setCustomValidity("");
            }
        }

        restaurantPhoneNumberAndPasswordConfirmation = () => {
            var password = document.getElementById("restaurantPassword");
            var confirmPassword = document.getElementById("restaurantConfirmPassword");
            var primePhone = document.getElementById("primaryPhoneNumber");
            var secondPhone = document.getElementById("secondaryPhoneNumber");
            if (primePhone.value === secondPhone.value){
                secondPhone.setCustomValidity("Phone numbers cannot match");
            }
            else {
                secondPhone.setCustomValidity("");
            }
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity("Passwords must match");
            }
            else {
                confirmPassword.setCustomValidity("");
            }
        }

        render()
        {
            const {country, region} = this.state;
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
                                <a className="navbar-brand " href="#">YumDrop</a>
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
                        show={this.state.registerSelect}
                        onHide={this.closeAllOptionsOfSelectionForm}
                        animation={false}
                        centered id="modal"
                    >
                        <Modal.Header className="modelheader" id="containerModal">
                            <Modal.Title className="modeltitle" id="modeltitle">
                                <strong>Select Account Type</strong>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body id="CheckSelection">
                            <Button id="UserID" onClick={this.userRegister}>
                                <strong>USER</strong>
                            </Button>{" "}
                            <br/>
                            <Button id="RestaurantId" onClick={this.restaurantRegister}>
                                <strong>RESTAURANT</strong>
                            </Button>{" "}
                            <br/>
                            <Button id="DeliveryId" onClick={this.deliveryAgentRegister}>
                                <strong>DELIVERY</strong>
                            </Button>
                        </Modal.Body>
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
                                            <h2 className="text-center">User Sign Up</h2>
                                            <div className="social-btn text-center">
                                                <a href="#" className="btn btn-primary btn-block btn-lg"><i
                                                    className="fa fa-facebook"></i> Sign up with <b>Facebook</b></a>
                                                <a href="#" className="btn btn-danger btn-block btn-lg"><i
                                                    className="fa fa-google"></i> Sign up with <b>Google</b></a>
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
                                            <div className="form-group">
                                                <button onClick={this.userPasswordConfirmation} type="submit"
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
                        show={this.state.restaurantRegister}
                        onHide={this.closeAllOptionsOfSelectionForm}
                        animation={false}
                        id="modal"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="main">
                                    <div className="login-form">
                                        <form onSubmit={this.registerRestaurant.bind(this)}>
                                            <h2 className="text-center">Restaurant Sign Up</h2>
                                            <div className="form-group">
                                                <input value={this.state.restaurantFullName}
                                                       onChange={this.handleRestaurantFullName} type="text"
                                                       className="form-control" placeholder="Restaurant Name"
                                                       title="Please enter the restaurant name"
                                                       pattern="(?=.*[a-zA-Z]).{1,}"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.restaurantId}
                                                       onChange={this.handleRestaurantId} type="text"
                                                       className="form-control" placeholder="Restaurant User name / ID"
                                                       title="Please enter a user name or ID"
                                                       pattern="(?=.*[a-zA-Z]).{1,}"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.restaurantPrimaryEmailId}
                                                       onChange={this.handleRestaurantPrimaryEmailId} type="text"
                                                       className="form-control" placeholder="Primary Email ID"
                                                       title="Please enter a valid email address"
                                                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" value={this.state.restaurantPassword}
                                                       onChange={this.handleRestaurantPassword} className="form-control"
                                                       id="restaurantPassword"
                                                       placeholder="Password" 
                                                       title="Password must be 8 characters or longer and contain a lower case letter, capital letter, and a special character"
                                                       pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" value={this.state.restaurantConfirmPassword}
                                                       onChange={this.handleRestaurantConfirmPassword}
                                                       id="restaurantConfirmPassword"
                                                       className="form-control" placeholder="Confirm password"
                                                       checked={this.state.restaurantPassword === this.state.restaurantConfirmPassword}
                                                       title="Please enter your password again"
                                                       pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       id="primaryPhoneNumber"
                                                       value={this.state.restaurantPrimaryPhoneNumber}
                                                       onChange={this.handleRestaurantPrimaryPhoneNumber}
                                                       placeholder="Primary Phone Number" 
                                                       title="Please enter a valid phone number Ex: +X XXX-XXX-XXXX"
                                                       pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       id="secondaryPhoneNumber"
                                                       value={this.state.restaurantSecondaryPhoneNumber}
                                                       onChange={this.handlerestaurantSecondaryPhoneNumber}
                                                       placeholder="Secondary Phone Number" 
                                                       title="Please enter another valid phone number Ex: +X XXX-XXX-XXXX"
                                                       pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <button onClick={this.restaurantPhoneNumberAndPasswordConfirmation} type="submit"
                                                        className="btn btn-primary btn-lg btn-block login-btn">Sign Up
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
                                    Multiple payment options. </p>
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

export default connect(mapStateToProps,mapDispatchToProps)(App);