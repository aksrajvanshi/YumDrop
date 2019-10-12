import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

import ReactTelephoneInput from "react-telephone-input/es/ReactTelephoneInput";
class App extends Component {
    state = {
        selectLoginOption: false,
        userLoginOption: false,
        restaurantLoginOption: false,
        deliveryAgentLoginOption: false,
        closeAllOptionsOfSelectionForm: false
    };


    login = () => { debugger;
        let obj={}
        obj.email=this.state.email;

        fetch('/login',
            {
                header:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method:'POST',
                type:"cors",
                body:JSON.stringify({obj})

            }
        ).then(function(res){ debugger; return res.json(); })
            .then(function(data){ console.log( JSON.stringify( data ) ) })

    }


    register = () => { debugger;
        let obj={}
        obj.user_email=this.state.useremail;
        obj.user_name=this.state.username;
        obj.userPassword = this.state.userpassword;
        obj.user_phonenum = this.state.userphonenumber;
        fetch('/userRegistration',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    user_email: this.state.useremail,
                    user_name:this.state.username,
                    userPassword : this.state.userpassword,
                    user_phonenum : this.state.userphonenumber
                })
            }
        ).then(function(res){ debugger; return res.json(); })
            .then(function(data){ console.log( JSON.stringify( data ) ) })

    }
    DeliveryAgentregister = () => { debugger;

        fetch('/AgentRegistration',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    deliveryAgent_Name: this.state.DeliveryAgentName,
                    deliveryAgent_EmailID:this.state.DeliveryAgentEmailID,
                    deliveryAgent_Password : this.state.DeliveryAgentPassword,
                    deliveryAgent_ConfirmPassword : this.state.DeliveryAgentConfirmPassword,
                    deliveryAgent_PhoneNumber: this.state.DeliveryAgentPhoneNumber
                })
            }
        ).then(function(res){ debugger; return res.json(); })
            .then(function(data){ console.log( JSON.stringify( data ) ) })

    }

    selectLoginOption = () =>{
        this.setState({selectLoginOption: true})
    }
    userLoginOption = () => {
        this.setState({ userLoginOption: true, selectLoginOption:false, restaurantLoginOption: false, deliveryAgentLoginOption: false  });
    }
    restaurantLoginOption = () => {
        this.setState({ userLoginOption: false, selectLoginOption:false, restaurantLoginOption: true, deliveryAgentLoginOption: false  });
    }
    deliveryAgentLoginOption  = () => {
        this.setState({ userLoginOption: false, selectLoginOption:false, restaurantLoginOption: false, deliveryAgentLoginOption: true  });
    }
    closeAllOptionsOfSelectionForm= () => {
        this.setState({ userLoginOption: false, selectLoginOption:false, restaurantLoginOption: false, deliveryAgentLoginOption: false  });
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

    render() {
        const { country, region } = this.state;
        return (
            <div className="App">
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <nav class=" navbar navbar-expand-lg navbar-dark ">
                        <div class="container">
                            <a class="navbar-brand " href="#">YumDrop</a>
                            <div class="collapse navbar-collapse" id="navBarLinks">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item" >
                                        <a class="nav-link" onClick={this.selectLoginOption}>Login</a>
                                    </li>
                                    <li class="nav-item" id="SignUpID">
                                        <a class="nav-link" href="#">Sign Up</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div class="view rgba-black-light">
                    <div class="">
                        <br/><br/><br/><br/><br/><br/><br/>
                        <li>
                            <p id="para" >Are you hungry?</p>
                        </li>
                        <ul class="list-unstyled">
                            <br/><br/><br/><br/>
                            <li>
                                <div class="form-row" data-wow-delay="0.4s">
                                    <div class="col-md-5"  id="firstbar">
                                        <div class="md-form">
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
                                            <button className="btn btn-lg btn-danger">Order</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Modal  show={this.state.selectLoginOption} onHide={this.closeAllOptionsOfSelectionForm} animation={false} centered>
                    <Modal.Header className="modelheader">
                        <Modal.Title className="modeltitle">
                            <strong>Select Login</strong>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="main">
                                    <form role="form">
                                       <button  onClick={this.userLoginOption} className="btn btn btn-primary">User </button><br/>
                                        <button onClick={this.restaurantLoginOption} className="btn btn btn-primary">Restaurant </button><br/>
                                        <button onClick={this.deliveryAgentLoginOption} className="btn btn btn-primary">Delivery Agent </button>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </Modal.Body>
                </Modal >
                <Modal
                    show={
                        this.state.deliveryAgentLoginOption ||  this.state.userLoginOption ||  this.state.restaurantLoginOption
                    }
                    onHide={this.closeAllOptionsOfSelectionForm} animation={false} centered >
                    <Modal.Header>
                        <Modal.Title>{this.getTitle()}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div class="container">
                            <div className="row">
                                <div className="main">
                                    <h3>Please Log In, or <a href="#">Sign Up</a></h3>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <a href="#" className="btn btn-lg btn-primary btn-block">Facebook</a>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <a href="#" className="btn btn-lg btn-info btn-block">Google</a>
                                        </div>
                                    </div>
                                    <div className="login-or">
                                        <hr className="hr-or"/>
                                        <span className="span-or">or</span>
                                    </div>
                                    <form role="form">
                                        <div className="form-group">
                                            <label htmlFor="inputUsernameEmail">Username or email</label>
                                            <input type="text" className="form-control" id="inputUsernameEmail"/>
                                        </div>
                                        <div className="form-group">
                                            <a className="pull-right" href="#">Forgot password?</a>
                                            <label htmlFor="inputPassword">Password</label>
                                            <input type="password" className="form-control" id="inputPassword"/>
                                        </div>
                                        <div className="checkbox pull-right">
                                            <label>
                                                <input type="checkbox"/>
                                                Remember me </label>
                                        </div>
                                        <button type="submit" className="btn btn btn-primary">
                                            Log In
                                        </button>
                                    </form>

                                </div>

                            </div></div>

                    </Modal.Body>
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