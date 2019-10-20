import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button, Dropdown, DropdownButton} from "react-bootstrap";
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
        redirect: false
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
                            user_name: this.state.userName,
                            userPassword: this.state.userPassword
                        }
                    )

                }
            ).then(res => {


                if (res.status !== 200) {
                    return;
                }
                this.setState({redirect: true, userRegister: false});
                this.forwardToOTPpage();
                alert("Hey going to otp page");



            })

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
                                        <form onSubmit={this.register.bind(this)}>
                                            <h2 className="text-center">Restaurant Sign Up</h2>
                                            <div className="form-group">
                                                <input value={this.state.restaurantFullName}
                                                       onChange={this.handleRestaurantFullName} type="text"
                                                       className="form-control" placeholder="Restaurant Name"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.restaurantId}
                                                       onChange={this.handleRestaurantId} type="text"
                                                       className="form-control" placeholder="Restaurant User name / ID"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.restaurantPrimaryEmailId}
                                                       onChange={this.handleRestaurantPrimaryEmailId} type="text"
                                                       className="form-control" placeholder="Primary Email ID"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" value={this.state.restaurantPassword}
                                                       onChange={this.handleRestaurantPassword} className="form-control"
                                                       placeholder="Password" required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" value={this.state.restaurantConfirmPassword}
                                                       onChange={this.handleRestaurantConfirmPassword}
                                                       className="form-control" placeholder="Confirm password"
                                                       required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       value={this.state.restaurantPrimaryPhoneNumber}
                                                       onChange={this.handleRestaurantPrimaryPhoneNumber}
                                                       placeholder="Primary Phone Number" required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       value={this.state.restaurantSecondaryPhoneNumber}
                                                       onChange={this.handlerestaurantSecondaryPhoneNumber}
                                                       placeholder="Secondary Phone Number" required="required"/>
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


                    <div className="auto-container">
                        <div className="row">
                            <div className="column col-lg-6 col-md-12 col-sm-12">
                                <div className="sec-title">
                                    <h2>Choose from multi cuisines available</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container" id="ContainerID">
                        <div className="row">
                            <div className="col-12  col-md-4 image-grid-item">
                                <div id="img3"
                                     className="entry-cover image-grid-cover has-image">
                                    <a href="#" className="image-grid-clickbox"></a>
                                    <a href="#" className="cover-wrapper">Indian Food</a>
                                </div>
                            </div>
                            <div className="col-12  col-md-4 image-grid-item">
                                <div id="img2"
                                     className="entry-cover image-grid-cover has-image">
                                    <a href="#" className="image-grid-clickbox"></a>
                                    <a href="#" className="cover-wrapper">Indian Food</a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 image-grid-item">
                                <div id="img1" className="entry-cover image-grid-cover has-image">
                                    <a href="#" className="image-grid-clickbox"></a>
                                    <a href="#" className="cover-wrapper">Burgers </a>
                                </div>
                            </div>
                            <div className="col-17  col-md-4 image-grid-item">
                                <div id="img4" className="entry-cover image-grid has-image">
                                    <a href="#" className="image-grid-clickbox"></a>
                                    <a href="#" className="cover-wrapper">Mexican Food</a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 image-grid-item">
                                <div id="img5" className="entry-cover imagegrid has-image">
                                    <a href="#" className="image-grid-clickbox"></a>
                                    <a href="#" className="cover-wrapper">Chinese Food </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

export default App;