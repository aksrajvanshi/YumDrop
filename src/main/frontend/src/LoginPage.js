import React, { Component } from "react";
import App from "./App";
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Modal, Dropdown, DropdownButton} from "react-bootstrap";

/***const LoginPage = (props) => {
    console.log(props)
    return (
        <div>
            <p> vnfijgbfo</p>
        </div>
    )
}***/
class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            selectLogin: false,
            userLoginOptionSelected: false,
            restaurantLoginOptionSelected: false,
            deliveryAgentLoginOptionSelected: false,
            userName: "Test"
        }
    }
    getTitle() {
        if (this.state.UserLogin) {
            return "User Login";
        } else if (this.state.RestaurantLogin) {
            return "Restaurant Login";
        } else if (this.state.DeliveryLogin) {
            return "Delivery Login";
        }
    }

    userLoginSelection = () => {
        this.setState({
            userLoginOptionSelected: true,
            selectLogin: false,
            restaurantLoginOptionSelected: false,
            deliveryAgentLoginOptionSelected: false
        });
    };
    selectLogin = () => {
        this.setState({ SelectLogin: true });
    };

    backToLogin = () => {
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
               <header>
                   <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                   <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                   <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                   <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                   <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                   <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                   <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
                   <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                   <nav className=" navbar navbar-expand-lg navbar-dark ">
                       <div className="container">
                           <a className="navbar-brand " href="#" onClick={this.backToLogin}>YumDrop</a>
                           <div className="collapse navbar-collapse" id="navBarLinks">
                               <ul className="navbar-nav mr-auto">
                                   <li className="nav-item" >
                                       <a className="nav-link" >{this.state.userName}</a>
                                   </li>
                                   <li className="nav-item" id="SignUpID">
                                       <a className="nav-link" href="#">Log out</a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </nav>
               </header>
                <div className="view rgba-black-light">
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
                                    <DropdownButton title="Filter by">
                                        <Dropdown.Item>Price</Dropdown.Item>
                                        <Dropdown.Item>Delivery Time</Dropdown.Item>
                                        <Dropdown.Item>Location</Dropdown.Item>
                                    </DropdownButton>
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


export default LoginPage;