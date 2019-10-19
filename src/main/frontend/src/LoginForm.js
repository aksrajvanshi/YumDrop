    import React, { Component } from "react";
    import "./App.css";
    import LoginPage from "./LoginPage";
    import './LoginFormCSS.css'
    import "bootstrap/dist/css/bootstrap.min.css";
    import {Modal, Button, Dropdown, DropdownButton} from "react-bootstrap";
    import FacebookLogin from 'react-facebook-login';
    import GoogleLogin from 'react-google-login';

    const axios = require('axios');

    class App extends Component {
        state = {
            loginSelect: true,
            userLoginOption: false,
            restaurantLoginOption: false,
            deliveryAgentLoginOption: false,
            closeAllOptionsOfSelectionForm: false,
            userName: "",
            userPassword: "",
            userPhoneNumber: "",
            userEmail: "",
            redirect: false,
            fbAccessToken: '',
            googleAccessToken: ''

        };

        componentDidMount() {
            fetch('/tryGetData')
                .then(res => res.json())
                .then(response => {
                        if(response.toString() === "200"){
                            this.state.redirect = true
                        }
                    console.log(response);
                })
                .then((data) => {
                    console.log(data.toString());

                })
                .catch(console.log)
        }

        login = () => { debugger;
            let obj={}

            fetch('/LoginDataForm',
                {
                    method: 'POST',
                    header:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({
                            user_name: this.state.userName,
                            userPassword: this.state.userPassword
                        }
                    )

                }
            ).then(function(res){ debugger; return res.json(); })
                .then(
                    response => {
                        console.log(response)
                        }

                )

        }



        userName = (event) => {
            this.setState({userName: event.target.value})
        }

        loginSelect = () => {
            this.setState({
                userLoginOption: false,
                loginSelect: true,
                restaurantLoginOption: false,
                deliveryAgentLoginOption: false
            });
        };

        forwardToRegister = () => {
            this.props.history.push('/RegisterForm')
        }

        backToHomePage = () => {
            this.props.history.push('/');
        }

        userPassword = (event) => {
            this.setState({userPassword: event.target.value})
        }

        handelUserLoginOption = () => {
            this.setState({ loginSelect:false, restaurantLoginOption: false, deliveryAgentLoginOption: false, userLoginOption: true  });
        }
        handleRestaurantLoginOption = () => {
            this.setState({ loginSelect: false, selectLoginOption:false, deliveryAgentLoginOption: false, restaurantLoginOption: true  });
        }
        handleDeliveryAgentLoginOption  = () => {
            this.setState({ loginSelect: false, selectLoginOption:false, restaurantLoginOption: false, deliveryAgentLoginOption: true  });
        }
        closeAllOptionsOfSelectionForm= () => {
            this.setState({ userLoginOption: false, loginSelect:false, restaurantLoginOption: false, deliveryAgentLoginOption: false  });
        }

        forwardToLogin = () => {
            this.props.history.push('/Login');
        }
        getTitle() {
            if (this.state.userLoginOption) {
                return "User Login";
            } else if (this.state.restaurantLoginOption) {
                return "Restaurant Login";
            } else if (this.state.deliveryAgentLoginOption) {
                return "Delivery Agent Login";
            }
        }

        handleUserNameChange =  (event) => {
            this.setState({
                userName: event.target.value,
            });
        };
        handleUserPasswordChange =  (event) => {
            this.setState({
                userPassword: event.target.value,
            });
        };

        responseFacebook(response)  {
            console.log(response);
            const user = {
                "userEmail": response.email,
                "userName" : response.name,
                fbAccessToken: response.accessToken
            };
            console.log(user.userName);
            axios({
                method:'post',
                url:'/fbUserLogin',
                data: user
            })
                .then( (response) => {
                    console.log(response);
                });
        }

        responseGoogle(response)  {
            console.log(response.name);
            console.log(response.email);
            const user = {
                "userEmail": response.email,
                "userName" : response.name,
                googleAccessToken: response.accessToken
            };
            console.log(user.userName);
            axios({
                method:'post',
                url:'/googleUserLogin',
                data: user
            })
                .then( (response) => {
                    console.log(response);
                });
        }

        render() {
            const { country, region } = this.state;
            return <div className="App">
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
                            <a className="navbar-brand " href="#">YumDrop</a>
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
                                    <div className="col-md-12" id="buttonOrder">
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
                    show={this.state.loginSelect}
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
                        <Button id="UserID" onClick={this.handelUserLoginOption}>
                            <strong>USER</strong>
                        </Button>
                        <br/>
                        <Button id="RestaurantId" onClick={this.restaurantRegister}>
                            <strong>RESTAURANT</strong>
                        </Button>
                        <br/>
                        <Button id="DeliveryId" onClick={this.deliveryAgentRegister}>
                            <strong>DELIVERY</strong>
                        </Button>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={this.state.userLoginOption}
                    onHide={this.closeAllOptionsOfSelectionForm}
                    animation={false}
                    id="modal"
                >
                    <Modal.Header id="UserHead">
                        <Modal.Title id="modeltitle">User Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modelBody">

                        <div className="container">
                            <div className="row">
                                <div className="main">
                                    <form  role="form" onSubmit={this.login}>
                                        <div className="form-group">
                                            <input value={this.state.userName}  placeholder="username / email ID" onChange={this.handleUserNameChange} type="text" className="form-control" id="inputUsernameEmail"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={this.state.userPassword} placeholder="password" onChange={this.handleUserPasswordChange} className="form-control" id="inputPassword"/>
                                        </div>
                                        <div className="form-group">
                                            <a className="pull-right" href="#">Forgot password?</a>
                                        </div>
                                        <div className="oauth-login">
                                            <div className="facebook-login">
                                                <FacebookLogin
                                                    appId="527192644707128"
                                                    autoLoad={false}
                                                    fields="name,email,picture"
                                                    cookiePolicy={'single_host_origin'}
                                                    callback={(response)=>this.responseFacebook(response)} />
                                            </div>
                                            <div className="google-login">
                                                <GoogleLogin
                                                    clientId="1048514306032-l4kt6l8blqnqkr2ro5fvsqb2vutd7v75.apps.googleusercontent.com"
                                                    buttonText="Login with Google"
                                                    autoLoad={false}
                                                    fields="name,email"
                                                    cookiePolicy={'single_host_origin'}
                                                    callback={(response)=>this.responseGoogle(response)} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer id="modelBody">
                        <button className="btn btn btn-primary" onClick={this.login}>Login</button>
                    </Modal.Footer>
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
            </div>;
        }
    }

    export default App;