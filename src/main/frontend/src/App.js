import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Dropdown, DropdownButton } from "react-bootstrap";

import ReactTelephoneInput from "react-telephone-input/es/ReactTelephoneInput";
class App extends Component {
  state = {
    selectLoginOption: false,
    userLoginOption: false,
    restaurantLoginOption: false,
    deliveryAgentLoginOption: false,
    closeAllOptionsOfSelectionForm: false,
    selectRegistrationOption: false,
    userRegistrationOption: false,
    restaurantRegistrationOption: false,
    deliveryAgentRegistrationOption: false
  };
  login = () => {
    debugger;
    let obj = {};
    obj.email = this.state.email;
    fetch("/login", {
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      type: "cors",
      body: JSON.stringify({ obj })
    })
      .then(function(res) {
        debugger;
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  };
  register = () => {
    debugger;
    let obj = {};
    obj.user_email = this.state.useremail;
    obj.user_name = this.state.username;
    obj.userPassword = this.state.userpassword;
    obj.user_phonenum = this.state.userphonenumber;
    fetch("/userRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_email: this.state.useremail,
        user_name: this.state.username,
        userPassword: this.state.userpassword,
        user_phonenum: this.state.userphonenumber
      })
    })
      .then(function(res) {
        debugger;
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  };
  DeliveryAgentregister = () => {
    debugger;
    fetch("/AgentRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        deliveryAgent_Name: this.state.DeliveryAgentName,
        deliveryAgent_EmailID: this.state.DeliveryAgentEmailID,
        deliveryAgent_Password: this.state.DeliveryAgentPassword,
        deliveryAgent_ConfirmPassword: this.state.DeliveryAgentConfirmPassword,
        deliveryAgent_PhoneNumber: this.state.DeliveryAgentPhoneNumber
      })
    })
      .then(function(res) {
        debugger;
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  };
  handleSelectLoginOption = () => {
    this.setState({ selectLoginOption: true });
  };
  handelUserLoginOption = () => {
    this.setState({
      selectLoginOption: false,
      restaurantLoginOption: false,
      deliveryAgentLoginOption: false,
      userLoginOption: true
    });
  };
  handleRestaurantLoginOption = () => {
    this.setState({
      userLoginOption: false,
      selectLoginOption: false,
      deliveryAgentLoginOption: false,
      restaurantLoginOption: true
    });
  };
  handleDeliveryAgentLoginOption = () => {
    this.setState({
      userLoginOption: false,
      selectLoginOption: false,
      restaurantLoginOption: false,
      deliveryAgentLoginOption: true
    });
  };
  handleSelectRegistrationOption = () => {
    this.setState({ selectRegistrationOption: true });
  };
  handleUserRegistrationOption = () => {
    this.setState({
      userRegistrationOption: true,
      selectRegistrationOption: false,
      restaurantRegistrationOption: false,
      deliveryAgentRegistrationOption: false
    });
  };
  handleRestaurantRegistrationOption = () => {
    this.setState({
      userRegistrationOption: false,
      selectRegistrationOption: false,
      restaurantRegistrationOption: true,
      deliveryAgentRegistrationOption: false
    });
  };
  handleDeliveryAgentRegistrationOption = () => {
    this.setState({
      userRegistrationOption: false,
      selectRegistrationOption: false,
      restaurantRegistrationOption: false,
      deliveryAgentRegistrationOption: true
    });
  };
  closeAllOptionsOfSelectionForm = () => {
    this.setState({
      userLoginOption: false,
      selectLoginOption: false,
      restaurantLoginOption: false,
      deliveryAgentLoginOption: false,
      selectRegistrationOption: false,
      userRegistrationOption: false,
      restaurantRegistrationOption: false,
      deliveryAgentRegistrationOption: false
    });
  };
  handleForwardToRegistrationSucces = () => {
    this.props.history.push("/RegistrationSuccess");
  };
  forwardToLogin = () => {
    this.props.history.push("/Login");
  };
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
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>{" "}
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <link
            href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
          <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
          <nav className=" navbar navbar-expand-lg navbar-dark ">
            <div className="container">
              <a className="navbar-brand " href="#">
                YumDrop
              </a>
              <div className="collapse navbar-collapse" id="navBarLinks">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={this.handleSelectLoginOption}
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item" id="SignUpID">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={this.handleSelectRegistrationOption}
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="view rgba-black-light">
          <div className="">
            <li>
              <p id="para">Are you hungry?</p>
            </li>
            <ul className="list-unstyled">
              <br />
              <br />
              <br />
              <br />
              <li>
                <div className="form-row" data-wow-delay="0.4s">
                  <div className="col-md-5" id="firstbar">
                    <div className="md-form">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Bloomington, Indiana</option>
                        <option>Indianapolis, Indiana</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="md-form">
                      <input
                        type="text"
                        placeholder="Search for food, cuisines, restaurants here.."
                        id="form5"
                        className="form-control validate"
                      />
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
        <Modal
          show={this.state.selectLoginOption}
          onHide={this.closeAllOptionsOfSelectionForm}
          animation={false}
          id="modal"
          centered
        >
          <Modal.Header className="modelheader">
            <Modal.Title className="modeltitle">
              <strong>Select Login</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="main">
                  <ul>
                    <button
                      onClick={this.handelUserLoginOption}
                      className="btn btn btn-primary"
                    >
                      User{" "}
                    </button>
                    <br />
                    <button
                      onClick={this.handleRestaurantLoginOption}
                      className="btn btn btn-primary"
                    >
                      Restaurant{" "}
                    </button>
                    <br />
                    <button
                      onClick={this.handleDeliveryAgentLoginOption}
                      className="btn btn btn-primary"
                    >
                      Delivery Agent{" "}
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={
            this.state.deliveryAgentLoginOption ||
            this.state.userLoginOption ||
            this.state.restaurantLoginOption
          }
          onHide={this.closeAllOptionsOfSelectionForm}
          animation={false}
          centered
          id="modal"
        >
          <Modal.Header>
            <Modal.Title>{this.getTitle()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="main">
                  <h3>
                    Please Log In, or <a href="#">Sign Up</a>
                  </h3>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <a href="#" className="btn btn-lg btn-primary btn-block">
                        Facebook
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <a href="#" className="btn btn-lg btn-info btn-block">
                        Google
                      </a>
                    </div>
                  </div>
                  <div className="login-or">
                    <hr className="hr-or" />
                    <span className="span-or">or</span>
                  </div>
                  <form role="form">
                    <div className="form-group">
                      <label htmlFor="inputUsernameEmail">
                        Username or email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputUsernameEmail"
                      />
                    </div>
                    <div className="form-group">
                      <a className="pull-right" href="#">
                        Forgot password?
                      </a>
                      <label htmlFor="inputPassword">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                      />
                    </div>
                    <div className="checkbox pull-right">
                      <label>
                        <input type="checkbox" />
                        Remember me{" "}
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn btn-primary"
                      onClick={this.forwardToLogin}
                    >
                      Log In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.selectRegistrationOption}
          onHide={this.closeAllOptionsOfSelectionForm}
          animation={false}
          centered
          id="modal"
        >
          <Modal.Header className="modelheader" id="containerModal" closeButton>
            <Modal.Title className="modeltitle" id="modeltitle">
              <strong>Select Account Type</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="CheckSelection">
            <Button id="UserID" onClick={this.handleUserRegistrationOption}>
              <strong>USER</strong>
            </Button>{" "}
            <br />
            <Button
              id="RestaurantId"
              onClick={this.handleRestaurantRegistrationOption}
            >
              <strong>RESTAURANT</strong>
            </Button>{" "}
            <br />
            <Button
              id="DeliveryId"
              onClick={this.handleDeliveryAgentRegistrationOption}
            >
              <strong>DELIVERY</strong>
            </Button>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.userRegistrationOption}
          onHide={this.closeAllOptionsOfSelectionForm}
          animation={false}
          id="modal"
        >
          <Modal.Header id="UserHead" closeButton>
            <Modal.Title id="modeltitle">User Register</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modelBody">
            <form>
              <label htmlFor="username">Name: </label>
              <input type="text" id="username" />
              <br />
              <br />
              <label htmlFor="username">Email:</label>
              <input type="text" id="username" />
              <br />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="text" id="password"></input>
              <br />
              <br />
              <label htmlFor="password">Confirm Password:</label>
              <input type="text" id="password"></input>
              <br />
              <br />
              <label htmlFor="password">Phone:</label>
              <input type="text" id="password"></input>
              <br />
            </form>
          </Modal.Body>
          <Modal.Footer id="modelBody">
            <a
              id="button"
              href="#"
              onClick={this.handleForwardToRegistrationSucces}
            >
              Submit
            </a>
          </Modal.Footer>
        </Modal>
        <Modal
          show={this.state.deliveryAgentRegistrationOption}
          onHide={this.closeAllOptionsOfSelectionForm}
          animation={false}
          id="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="modeltitle">
              Delivery Agent Registration
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label htmlFor="username">Name</label>
              <input type="text" id="username" />
              <br />
              <br />
              <label htmlFor="username">Email ID</label>
              <input type="text" id="username" />
              <br />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="text" id="password"></input>
              <br />
              <br />
              <label htmlFor="password">Confirm Password:</label>
              <input type="text" id="password"></input>
              <br />
              <br />
              <label htmlFor="password">Phone Number:</label>
              <input type="text" id="password"></input>
              <br />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <a id="button" href="#" onClick={this.handleForwardToRegistrationSucces}>
              Submit
            </a>
          </Modal.Footer>
        </Modal>
        <Modal
          show={this.state.restaurantRegistrationOption}
          onHide={this.closeAllOptionsOfSelectionForm}
          animation={false}
          centered
          id="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="modeltitle">Restaurant Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label htmlFor="username"> Restaurant Name</label>
              <input type="text" id="username" />
              <br />
              <br />
              <label htmlFor="username"> Manager's/Contact Person's Name</label>
              <input type="text" id="username" />
              <br />
              <br />
              <label htmlFor="username">Email ID</label>
              <input type="text" id="username" />
              <br />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="text" id="password"></input>
              <br />
              <br />
              <label htmlFor="password">Confirm Password:</label>
              <input type="text" id="password"></input>
              <br />
              <br />
              <label htmlFor="password">Phone Number 1:</label>
              <input type="text" id="password"></input>
              <br />
              <br />
              <label htmlFor="password">Phone Number 2:</label>
              <input type="text" id="password"></input>
              <br />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <a id="button" href="#" onClick={this.handleForwardToRegistrationSucces}>
              Submit
            </a>
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
              <div id="img3" className="entry-cover image-grid-cover has-image">
                <a href="#" className="image-grid-clickbox"></a>
                <a href="#" className="cover-wrapper">
                  Indian Food
                </a>
              </div>
            </div>
            <div className="col-12  col-md-4 image-grid-item">
              <div id="img2" className="entry-cover image-grid-cover has-image">
                <a href="#" className="image-grid-clickbox"></a>
                <a href="#" className="cover-wrapper">
                  Indian Food
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 image-grid-item">
              <div id="img1" className="entry-cover image-grid-cover has-image">
                <a href="#" className="image-grid-clickbox"></a>
                <a href="#" className="cover-wrapper">
                  Burgers{" "}
                </a>
              </div>
            </div>
            <div className="col-17  col-md-4 image-grid-item">
              <div id="img4" className="entry-cover image-grid has-image">
                <a href="#" className="image-grid-clickbox"></a>
                <a href="#" className="cover-wrapper">
                  Mexican Food
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 image-grid-item">
              <div id="img5" className="entry-cover imagegrid has-image">
                <a href="#" className="image-grid-clickbox"></a>
                <a href="#" className="cover-wrapper">
                  Chinese Food{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
