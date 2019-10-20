import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button, Dropdown, DropdownButton} from "react-bootstrap";
import './index.css'
class App extends Component {
    state = {

    };

    forwardToLoginForm = () => {
        this.props.history.push('/LoginForm');
    }

    forwardToRegisterForm = () => {
        this.props.history.push('/RegisterForm')
    }

    render() {
        const { country, region } = this.state;
        return (
            <div className="App">
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#">YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item" >
                                        <a className="nav-link" onClick={this.forwardToLoginForm}><i
                                            className="fa fa-fw fa-user"></i>Login</a>
                                    </li>
                                    <li className="nav-item" id="SignUpID">
                                        <a className="nav-link" onClick={this.forwardToRegisterForm}>Sign Up</a>
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
                            <p id="para" >Are you hungry?</p>
                        </li>
                        <ul className="list-unstyled">
                            <br/><br/><br/><br/>
                            <li>
                                <div className="form-row" data-wow-delay="0.4s">
                                    <div className="col-md-5"  id="firstbar">
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
                                            <button className="btn btn-lg btn-danger">Order</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
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