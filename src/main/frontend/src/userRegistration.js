import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import {connect} from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button, Dropdown, DropdownButton} from "react-bootstrap";

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
        userPhoneNumber: "",
        userEmailID: "",
        otpVal: false,
        registerSelect: true,
        userFullName: "",
        userConfirmPassword: "",
        redirect: false,
        userOtp: "",
        userRegister: true
    };


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
                this.forwardToErrorPage();
            }else {
                this.setState({redirect: true, userRegister: false, otpVal:true});
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

    forwardToRegisterPage = () => {
        this.props.history.push('/RegisterForm');
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
            registerSelect: false,
            restaurantRegister: false,
            deliveryAgentRegister: false
        });
    };


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
                                        <a className="nav-link" onClick={this.forwardToRegisterPage}>Sign Up</a>
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
                                                   pattern="[a-z][A-Z]"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.userEmailID}
                                                   onChange={this.handleUserEmailIdChange} type="text"
                                                   className="form-control" placeholder="Email ID"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={this.state.userPassword}
                                                   onChange={this.handleUserPasswordChange} className="form-control"
                                                   placeholder="Password" required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={this.state.userConfirmPassword}
                                                   onChange={this.handleUserConfirmPasswordChange}
                                                   className="form-control" placeholder="Confirm password"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   value={this.state.userPhoneNumber}
                                                   onChange={this.handleUserPhoneNumberChange}
                                                   placeholder="Phone  Number" required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <button onClick={this.register.bind(this)} type="submit"
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

export default App;