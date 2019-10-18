import React, { Component } from "react";
import "./App.css";
import SearchResultBox from "./components/SearchResultBox";
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
    searched: false,
    searchQuery: "",
    filterBy: "",
    responseStatus: "",
    searchResults: [
      {
        imageSource:
          "data:image/png;base64,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",
        restaurantName: "Burger King",
        restaurantLocation: "1220E 1150N Milford, Indiana",
        restaurantTags: ["Fast Food", "Burgers"],
        restaurantRating: 10,
        restaurantMenuPrice: "$$",
        restaurantDeliveryTime: "23 minutes"
      },
      {
        imageSource:
          "https://news.mcdonalds.com/system/files-encrypted/styles/nir_media_item_grid_thumbnail/encrypt/nasdaq_kms/media_gallery/thumbnail/2019-04/Golden%20Arches.png?itok=a69ufY1I",
        restaurantName: "McDonalds",
        restaurantLocation: "Bloomington, Indiana",
        restaurantTags: ["Fast Food", "Burgers"],
        restaurantRating: 1,
        restaurantMenuPrice: "$",
        restaurantDeliveryTime: "2 days"
      }
    ]
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

  searchForQuery = () => {
    debugger;
    this.setState({searched: true});
    let obj = {};
    obj.search_query = this.state.searchQuery;
    obj.filter = this.state.filterBy;
    fetch("/SearchQuery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( {
        search_Query: this.state.searchQuery,
        filter: this.state.filterBy
      })
    }).then(function(res) {
      debugger;
      return res.json();
    }).then(function(response) {
      debugger;
      if (response.status == "200") {
        this.setState({responseStatus: "Hi"});
      }
    })
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
  closeAllOptionsOfSelectionForm = () => {
    this.setState({
      userLoginOption: false,
      selectLoginOption: false,
      restaurantLoginOption: false,
      deliveryAgentLoginOption: false
    });
  };
  handleLog = () => {
    console.log(this.state.filterBy);
  }
  handleFilterByLowToHigh = () => {
    this.setState({filterBy: "Low To High"});
  };
  handleFilterByHighToLow = () => {
    this.setState({filterBy: "High To Low"});
  };
  handleFilterByDeliveryTime = () => {
  this.setState({filterBy: "Delivery Time"});
  };
  handleFilterByLocation = () => {
  this.setState({filterBy: "Location"});
  };
  updateSearchQuery = (event) => {
    this.setState({ searchQuery: event.target.value});
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
                    <a className="nav-link" href="#">
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
                      <input onChange={evt => this.updateSearchQuery(evt)}
                        type="text"
                        placeholder="Search for food, cuisines, restaurants here.."
                        id="form5"
                        className="form-control validate"
                      />
                    </div>
                  </div>
                  <DropdownButton title="Filter by">
                    <Dropdown.Item onClick={this.handleFilterByLowToHigh}>Menu price: low to high</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleFilterByHighToLow}>Menu price: high to low</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleFilterByDeliveryTime}>Delivery Time</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleFilterByLocation}>Location</Dropdown.Item>
                  </DropdownButton>
                  <p>{this.state.responseStatus}</p>
                  <div className="col-md-12" id="buttonOrder">
                    <div className="md-form">
                      <button
                        className="btn btn-lg btn-danger"
                        onClick={this.searchForQuery}
                      >
                        search
                      </button>
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

        <div className={this.state.searched ? "hidden" : "auto-container"}>
          <div className="row">
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="sec-title">
                <h2>Choose from multi cuisines available</h2>
              </div>
            </div>
          </div>
        </div>

        <div
          className={this.state.searched ? "hidden" : "container"}
          id="ContainerID"
        >
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
        <div className={this.state.searched ? "" : "hidden"}>
          {this.state.searchResults.map(restaurant => (
            <SearchResultBox
              imageSource={restaurant.imageSource}
              restaurantName={restaurant.restaurantName}
              restaurantLocation={restaurant.restaurantLocation}
              restaurantMenuPrice={restaurant.restaurantMenuPrice}
              restaurantRating={restaurant.restaurantRating}
              restaurantTags={restaurant.restaurantTags}
              restaurantDeliveryTime={restaurant.restaurantDeliveryTime}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
