import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Dropdown, DropdownButton } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
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
    this.props.history.push("/LoginForm");
  };

  forwardToOTPpage = () => {
    this.props.history.push("/LoginDashBoard");
  };

  forwardToErrorPage = () => {
    this.props.history.push("/errorPageForRegistration");
  };

  validateGivenOtp() {
    debugger;
    let obj = {};
    fetch("/userRegistration", {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        user_name: this.state.userName
      })
    }).then(res => {
      if (res.status !== 200) {
        this.setState({ redirect: true, userRegister: false });
        this.forwardToErrorPage();
      } else {
        this.setState({ redirect: true, userRegister: false });
        this.forwardToOTPpage();
      }
    });
  }

  handleUserNameChange = event => {
    this.setState({
      userFullName: event.target.value
    });
  };

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
  };

  userRegister = () => {
    this.setState({
      userRegister: true,
      registerSelect: false,
      restaurantRegister: false,
      deliveryAgentRegister: false
    });
  };

  render() {
    const { country, region } = this.state;
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
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <link
            href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js" />
          <script src="//code.jquery.com/jquery-1.11.1.min.js" />
          <nav className=" navbar navbar-expand-lg navbar-dark ">
            <div className="container">
              <a className="navbar-brand " href="#">
                YumDrop
              </a>
              <div className="collapse navbar-collapse" id="navBarLinks">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.forwardToLoginForm}>
                      <i className="fa fa-fw fa-user" />
                      Login
                    </a>
                  </li>
                  <li className="nav-item" id="SignUpID">
                    <a className="nav-link" onClick={this.registerSelect}>
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <p>Hello fifth</p>
        <p>{this.props.test}</p>
        <p>{this.props.test1}</p>
        <Modal
          show={this.state.registerSelect}
          onHide={this.closeAllOptionsOfSelectionForm}
          animation={false}
          centered
          id="modal"
        >
          <div className="container">
            <div className="row">
              <div className="main">
                <div className="login-form">
                  <form onSubmit={this.validateGivenOtp.bind(this)}>
                    <h2 className="text-center">
                      Please provide your 6 digit OTP
                    </h2>
                    <div className="form-group">
                      <input
                        value={this.state.userFullName}
                        onChange={this.handleUserNameChange}
                        type="text"
                        className="form-control"
                        placeholder="Provide OTP"
                        pattern="[0-9]"
                        required="required"
                      />
                    </div>

                    <div className="form-group">
                      <button
                        onClick={this.validateGivenOtp.bind(this)}
                        type="submit"
                        className="btn btn-primary btn-lg btn-block login-btn"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
