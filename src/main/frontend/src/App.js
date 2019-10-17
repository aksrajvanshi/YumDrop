import React, { Component } from "react";
import "./App.css";
import { Slide } from "react-slideshow-image";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import trying2 from "./images/trying2.jfif";
import display1 from "./images/IndianFood.jpg";
import display2 from "./images/ItalianFood.jpg";
import display3 from "./images/JapaneseFood.jpg";
import display4 from "./images/KoreanFood.jpg";
import display5 from "./images/MexicanFood.jpg";
import display6 from "./images/ThaiFood.jpg";
import display7 from "./images/WestAfricanFood.jpg";
import display8 from "./images/AddImage1.jpg";
import display9 from "./images/AddImage2.jpg";
import display10 from "./images/addHongKong.jpg";
//import trying4 from "./images/1502296790.92.jpg";
import display11 from "./images/BengaliFood.jpg";
import display12 from "./images/chocolate-lasagna-4.jpg";
import display13 from "./images/Burgers.jpg";
import * as EmailValidator from "email-validator";
import { isMobilePhone } from "validator";

const properties = {
  duration: 10000,
  transitionDuration: 100,
  infinite: true,
  arrows: true
};
class App extends Component {
  state = {
    selectLogin: false,
    userLogin: false,
    restaurantLogin: false,
    deliveryLogin: false,
    registerSelect: false,
    userRegister: false,
    restaurantRegister: false,
    deliveryRegister: false,
    signUpPassword: "",
    signUpConfirmPassword: "",
    signUpEmail: "",
    signUpPhoneNum: "",
    signUpPhoneNum2: "",
    signUpName: "",
    signUpRestaurantName: "",
    signUpNameError: "",
    signUpEmailError: "",
    signUpPasswordError: "",
    signUpConfirmPasswordError: "",
    signUpPhoneNumError: "",
    signUpPhoneNum2Error: "",
    signUpRestaurantNameError: "",
    formIsValid: false
  };
  SelectLogin = () => {
    this.setState({ selectLogin: true });
  };
  UserLogin = () => {
    this.setState({
      userLogin: true,
      selectLogin: false,
      restaurantLogin: false,
      deliveryLogin: false
    });
  };

  RestaurantLogin = () => {
    this.setState({
      userLogin: false,
      selectLogin: false,
      restaurantLogin: true,
      deliveryLogin: false
    });
  };

  DeliveryLogin = () => {
    this.setState({
      userLogin: false,
      selectLogin: false,
      restaurantLogin: false,
      deliveryLogin: true
    });
  };

  RegisterSelect = () => {
    this.setState({
      userRegister: false,
      registerSelect: true,
      restaurantRegister: false,
      deliveryRegister: false
    });
  };

  UserRegister = () => {
    this.setState({
      userRegister: true,
      registerSelect: false,
      restaurantRegister: false,
      deliveryRegister: false
    });
  };

  RestaurantRegister = () => {
    this.setState({
      userRegister: false,
      registerSelect: false,
      restaurantRegister: true,
      deliveryRegister: false
    });
  };

  DeliveryRegister = () => {
    this.setState({
      userRegister: false,
      registerSelect: false,
      restaurantRegister: false,
      deliveryRegister: true
    });
  };

  CloseAll = () => {
    this.setState({
      userLogin: false,
      selectLogin: false,
      restaurantLogin: false,
      deliveryLogin: false,
      registerSelect: false,
      userRegister: false,
      restaurantRegister: false,
      deliveryRegister: false,
      signUpConfirmPassword: "",
      signUpEmail: "",
      signUpName: "",
      signUpPassword: "",
      signUpPhoneNum: "",
      signUpPhoneNum2: "",
      signUpRestaurantName: "",
      signUpNameError: "",
      signUpEmailError: "",
      signUpPasswordError: "",
      signUpConfirmPasswordError: "",
      signUpPhoneNumError: "",
      signUpPhoneNum2Error: "",
      signUpRestaurantNameError: ""
    });
  };

  validateUserName = () => {
    if (!this.state.signUpName) {
      this.setState({signUpNameError: "Name cannot be empty. "});
    } else if (!/^[A-Za-z]+$/.test(this.state.signUpName)) {
      this.setState({signUpNameError: "Please only use letters. "});
    }
    else {
        this.setState({signUpNameError: ""});
    }
  };

  validateRestuarantName = () => {
    if (!this.state.signUpRestaurantName) {
      this.setState({signUpRestaurantNameError: "Restaurant name cannot be empty. "});
    } else if (!/^[A-Za-z]+$/.test(this.state.signUpRestaurantName)) {
      this.setState({signUpRestaurantNameError: "Please only use letters. "});
    }
    else {
        this.setState({signUpRestaurantNameError: ""});
    }
  };

  validateEmail = () => {
    if (!EmailValidator.validate(this.state.signUpEmail)) {
      this.setState({signUpEmailError: "Please enter a valid email. "});
    }
    else {
        this.setState({signUpEmailError: ""});
    }
  };

  validatePassword = () => {
    if (!/[a-z]/.test(this.state.signUpPassword)) {
      this.setState({signUpPasswordError: "Password must contain a lower case letter. "});
    } else if (!/[A-Z]/.test(this.state.signUpPassword)) {
      this.setState({signUpPasswordError: "Password must contain an upper case letter. "});
    } else if (/^[A-Za-z]+$/.test(this.state.signUpPassword)) {
      this.setState({signUpPasswordError: "Password must contain a unique non-letter character. "});
    } else if (this.state.signUpPassword.length < 8) {
      this.setState({signUpPasswordError: "Password must be be longer than 7 characters."});
    }
    else {
        this.setState({signUpPasswordError: ""});
    }
  };

  validateConfirmPassword = () => {
    if (!this.state.signUpConfirmPassword) {
      this.setState({signUpConfirmPasswordError: "Password confirmation cannot be empty."});
    } else if (this.state.signUpConfirmPassword != this.state.signUpPassword) {
      this.setState({signUpConfirmPasswordError: "Passwords do not match. "});
    }
    else {
        this.setState({signUpConfirmPasswordError: ""});
    }
  };

  validatePhoneNum = () => {
    if (this.state.signUpPhoneNum) {
      if (
        !isMobilePhone("+" + this.state.signUpPhoneNum, "any", {
          strictMode: true
        })
      ) {
        this.setState({signUpPhoneNumError :"Please enter a valid phone number. "});
      }
      else {
        this.setState({signUpPhoneNumError: ""});
        }
    } else {
      this.setState({signUpPhoneNumError: "Phone number cannot be empty."});
    }
  };

  validatePhoneNum2 = () => {
    if (this.state.signUpPhoneNum2) {
      if (
        !isMobilePhone("+" + this.state.signUpPhoneNum2, "any", {
          strictMode: true
        })
      ) {
        this.setState({signUpPhoneNum2Error: "Please enter a second valid phone number. "});
      }
      else {
        this.setState({signUpPhoneNum2Error: ""});
    }
    } else {
      this.setState({signUpPhoneNum2Error: "Phone number cannot be empty."});
    }
  };

  validateForm = () => {
    this.validateConfirmPassword();
    this.validateEmail();
    this.validatePassword();
    this.validatePhoneNum();
    this.validatePhoneNum2();
    this.validateRestuarantName();
    this.validateUserName();
    if (
      (this.state.userRegister || this.state.deliveryRegister) &&
      (this.state.signUpNameError != "" ||
        this.state.signUpEmailError != "" ||
        this.state.signUpPasswordError != "" ||
        this.state.signUpConfirmPasswordError != "" ||
        this.state.signUpPhoneNumError != "")
    ) {
      this.setState({ formIsValid: false });
      console.log(this.state.formIsValid);
    } else if (
      this.state.restaurantRegister &&
      (this.state.signUpNameError != "" ||
        this.state.signUpEmailError != "" ||
        this.state.signUpPasswordError != "" ||
        this.state.signUpPhoneNumError != "" ||
        this.state.signUpConfirmPasswordError != "" ||
        this.state.signUpPhoneNum2Error != "" ||
        this.state.signUpRestaurantNameError != "")
    ) {
      this.setState({ formIsValid: false });
      console.log(this.state.formIsValid);
    } else {
      this.setState({ formIsValid: true });
      console.log(this.state.formIsValid);
    }
  };

  getTitle() {
    if (this.state.userLogin) {
      return "User Login";
    } else if (this.state.restaurantLogin) {
      return "Restaurant Login";
    } else if (this.state.deliveryLogin) {
      return "Delivery Login";
    }
  }

  updateEmail(evt) {
    this.setState({ signUpEmail: evt.target.value });
  }

  updateName(evt) {
    this.setState({ signUpName: evt.target.value });
  }

  updateRestaurantName(evt) {
    this.setState({ signUpRestaurantName: evt.target.value });
  }

  updatePassword(evt) {
    this.setState({ signUpPassword: evt.target.value });
  }

  updateConfirmPassword(evt) {
    this.setState({ signUpConfirmPassword: evt.target.value });
  }

  updatePhoneNum(evt) {
    this.setState({ signUpPhoneNum: evt.target.value });
  }

  updatePhoneNum2(evt) {
    this.setState({ signUpPhoneNum2: evt.target.value });
  }

  render() {
    return (
      <div className="App">
        <header>
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <link
            href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
          <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
          <link
            href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
          <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

          <link
            rel="stylesheet"
            href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css"
          />
          <nav className="NavigationBar">
            <h2 className="menu_logo">YumDrops</h2>
            <div className="menuright">
              <ul className="menulist">
                <li className="menulist-item">
                  {" "}
                  <a className="NavBarA" href="#" onClick={this.SelectLogin}>
                    Login
                  </a>{" "}
                </li>
                <li className="menulist-item">
                  <a className="NavBarB" href="#" onClick={this.RegisterSelect}>
                    Sign Up{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <Modal
          show={this.state.selectLogin}
          onHide={this.CloseAll}
          className="modal"
          animation={false}
          centered
        >
          <Modal.Header className="modelheader" id="containerModal" closeButton>
            <Modal.Title className="modeltitle" id="modeltitle">
              <strong>Select Login</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="CheckSelection">
            <Button id="UserID" onClick={this.UserLogin}>
              <strong>USER</strong>
            </Button>{" "}
            <br />
            <Button id="RestaurantId" onClick={this.RestaurantLogin}>
              <strong>RESTAURANT</strong>
            </Button>{" "}
            <br />
            <Button id="DeliveryId" onClick={this.DeliveryLogin}>
              <strong>DELIVERY</strong>
            </Button>
          </Modal.Body>
        </Modal>
        <Modal
          show={
            this.state.deliveryLogin ||
            this.state.userLogin ||
            this.state.restaurantLogin
          }
          onHide={this.CloseAll}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title id="modeltitle">{this.getTitle()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username"></input> <br />
              <label htmlFor="password">Password:</label>
              <input type="text" id="password"></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <a id="button" href="#">
              Login
            </a>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.registerSelect}
          onHide={this.CloseAll}
          animation={false}
          centered
        >
          <Modal.Header className="modelheader" id="containerModal" closeButton>
            <Modal.Title className="modeltitle" id="modeltitle">
              <strong>Select Account Type</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="CheckSelection">
            <Button id="UserID" onClick={this.UserRegister}>
              <strong>USER</strong>
            </Button>{" "}
            <br />
            <Button id="RestaurantId" onClick={this.RestaurantRegister}>
              <strong>RESTAURANT</strong>
            </Button>{" "}
            <br />
            <Button id="DeliveryId" onClick={this.DeliveryRegister}>
              <strong>DELIVERY</strong>
            </Button>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.userRegister}
          onHide={this.CloseAll}
          animation={false}
          id="Trying"
        >
          <Modal.Header id="UserHead" closeButton>
            <Modal.Title id="modeltitle">User Register</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modelBody">
            <form>
              <label htmlFor="username">Name: </label>
              <input
                type="text"
                id="username"
                onChange={evt => this.updateName(evt)}
              />
              <br />
              <label className="validationMessage">
                {this.state.signUpNameError}
              </label>
              <br />
              <label htmlFor="username">Email:</label>
              <input
                type="text"
                id="username"
                onChange={evt => this.updateEmail(evt)}
              />
              <br />
              <label className="validationMessage">
                {this.state.signUpEmailError}
              </label>
              <br />
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                id="password"
                onChange={evt => this.updatePassword(evt)}
              ></input>
              <br />
              <label className="validationMessage">
                {this.state.signUpPasswordError}
              </label>
              <br />
              <label htmlFor="password">Confirm Password:</label>
              <input
                type="text"
                id="password"
                onChange={evt => this.updateConfirmPassword(evt)}
              ></input>
              <br />
              <label className="validationMessage">
                {this.state.signUpConfirmPasswordError}
              </label>
              <br />
              <label htmlFor="password">Phone:</label>
              <input
                type="text"
                id="password"
                onChange={evt => this.updatePhoneNum(evt)}
              ></input>
              <br />
              <label className="validationMessage">
                {this.state.signUpPhoneNumError}
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer id="modelBody">
            <a id="button" href="#" onClick={this.validateForm}>
              Submit
            </a>
          </Modal.Footer>
        </Modal>
        <Modal
          show={this.state.deliveryRegister}
          onHide={this.CloseAll}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title id="modeltitle">
              Delivery Agent Registration
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label htmlFor="username">Name</label>
              <input
                type="text"
                id="username"
                onChange={evt => this.updateName(evt)}
              />
              <br />
              <label className="validationMessage">
                {this.state.signUpNameError}
              </label>
              <br />
              <label htmlFor="username">Email ID</label>
              <input
                type="text"
                id="username"
                onChange={evt => this.updateEmail(evt)}
              />
              <br />
              <label className="validationMessage">
                {this.state.signUpEmailError}
              </label>
              <br />
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                id="password"
                onChange={evt => this.updatePassword(evt)}
              ></input>
              <br />
              <label className="validationMessage">
                {this.state.signUpPasswordError}
              </label>
              <br />
              <label htmlFor="password">Confirm Password:</label>
              <input
                type="text"
                id="password"
                onChange={evt => this.updateConfirmPassword(evt)}
              ></input>
              <br />
              <label className="validationMessage">
                {this.state.signUpConfirmPasswordError}
              </label>
              <br />
              <label htmlFor="password">Phone Number:</label>
              <input
                type="text"
                id="password"
                onChange={evt => this.updatePhoneNum(evt)}
              ></input>
              <br />
              <label className="validationMessage">
                {this.state.signUpPhoneNumError}
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <a id="button" href="#" onClick={this.validateForm}>
              Submit
            </a>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.restaurantRegister}
          onHide={this.CloseAll}
          animation={false}
          centered
          id="RestaurantModel"
        >
          <Modal.Header closeButton>
            <Modal.Title id="modeltitle">Restaurant Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label htmlFor="username"> Restaurant Name</label>
              <input
                type="text"
                id="username"
                onChange={evt => this.updateRestaurantName(evt)}
              />
              <br />
              <label className="validationMessage">
                {this.state.signUpRestaurantNameError}
              </label>
              <br />
              <label htmlFor="username"> Manager's/Contact Person's Name</label>
              <input
                type="text"
                id="username"
                onChange={evt => this.updateName(evt)}
              />
              <br />
              <label className="validationMessage">
                {this.state.signUpNameError}
              </label>
              <br />
              <label htmlFor="username">Email ID</label>
              <input
                type="text"
                id="username"
                onChange={evt => this.updateEmail(evt)}
              />
              <br />
              <label className="validationMessage">
                {this.state.signUpEmailError}
              </label>
              <br />
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                id="password"
                onChange={evt => this.updatePassword(evt)}
              ></input>
              <br />
              <label className="validationMessage">
                {this.state.signUpPasswordError}
              </label>
              <br />
              <label htmlFor="password">Confirm Password:</label>
              <input
                type="text"
                id="password"
                onChange={evt => this.updateConfirmPassword(evt)}
              ></input>
              <br />
              <label className="validationMessage">
                {this.state.signUpConfirmPasswordError}
              </label>
              <br />
              <label htmlFor="password">Phone Number 1:</label>
              <input
                type="text"
                id="password"
                onChange={evt => this.updatePhoneNum(evt)}
              ></input>
              <br />
              <label className="validationMessage">
                {this.state.signUpPhoneNumError}
              </label>
              <br />
              <label htmlFor="password">Phone Number 2:</label>
              <input
                type="text"
                id="password"
                onChange={evt => this.updatePhoneNum2(evt)}
              ></input>
              <br />
              <label className="validationMessage">
                {this.state.signUpPhoneNum2Error}
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <a id="button" href="#" onClick={this.validateForm}>
              Submit
            </a>
          </Modal.Footer>
        </Modal>
        <div className="container">
          <div className="row">
            <div
              id="carousel-example-generic"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <img src={pic1} className="widepic" alt="First slide" />
                  <div className="header-text hidden-xs">
                    <div className="col-md-12 text-center">
                      <h2>
                        <span>
                          {" "}
                          <strong>Welcome to YumDrop</strong>
                        </span>
                      </h2>
                      <br />
                      <h3>
                        <span>
                          <strong>
                            Delivering deliciouness at your doorstep
                          </strong>
                        </span>
                      </h3>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="left carousel-control"
                href="#carousel-example-generic"
                data-slide="prev"
              >
                <span className="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a
                className="right carousel-control"
                href="#carousel-example-generic"
                data-slide="next"
              >
                <span className="glyphicon glyphicon-chevron-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="polaroid">
              <img
                src={display1}
                alt="IndianFood"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Indian Food</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display2}
                alt="ItalianFood"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Italian Food</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display3}
                alt="JapaneseFood"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Japanese Food</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display4}
                alt="KoreanFood"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Korean Food</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="polaroid">
              <img
                src={display4}
                alt="KoreanFood"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Korean Food</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display5}
                alt="Mexican"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Mexican Food</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display6}
                alt="Thai"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Thai Food</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display7}
                alt="AfricanFood"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>African Food</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="polaroid">
              <img
                src={display7}
                alt="AfricanFood"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>African Food</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={trying2}
                alt="Forest"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Indian Food</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display12}
                alt="Mountains"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Desserts</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display13}
                alt="Mountains"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Burgers</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="polaroid">
              <img
                src={display11}
                alt="Snow"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Bengali Food</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display8}
                alt="Forest"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>South Indian</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display9}
                alt="Mountains"
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Food</strong>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="polaroid">
              <img
                src={display10}
                width="200px"
                height="200px"
                className="ImageDisplay"
              />
              <div className="ParagraphForPolaroid">
                <p>
                  <strong>Hong Kong Cuisine</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
