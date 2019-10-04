import React, { Component } from 'react';
import {Modal, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class App extends Component {

  state = {
    showLoginSelect: false,
    showUserLogin: false,
    showRestaurantLogin: false,
    showDriverLogin: false
  };

  handleShowSelectLogin = () => {
    this.setState({showLoginSelect : true});
  };

  handleShowUserLogin = () => {
    this.setState({showLoginSelect : false, showUserLogin : true, showRestaurantLogin : false, showDriverLogin : false});
  };

  handleShowRestaurantLogin = () => {
    this.setState({showLoginSelect : false, showUserLogin : false, showRestaurantLogin : true, showDriverLogin : false});
  };

  handleShowDriverLogin = () => {
    this.setState({showLoginSelect : false, showUserLogin : false, showRestaurantLogin : false, showDriverLogin : true});
  };

  goToOtherPage = () => {
    this.props.history.push("/OtherPage");
  };

  handleClose = () => {
    this.setState({showLoginSelect : false, showUserLogin : false, showRestaurantLogin : false, showDriverLogin : false});
  }


  render() {

    return (
      <div>
        <h1>React Js modal</h1>
        <Button onClick={this.handleShowSelectLogin}>Popup</Button>
        <Modal show={this.state.showLoginSelect} onHide={this.handleClose} centered className="modal">
          <Modal.Header className="header">
            <Modal.Title >Select Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button className="button" onClick={this.handleShowUserLogin}>Customer</Button>
            <Button className="button" onClick={this.handleShowRestaurantLogin}>Restaurant</Button>
            <Button className="button" onClick={this.handleShowDriverLogin}>Driver</Button>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.showDriverLogin || this.state.showUserLogin || this.state.showRestaurantLogin} onHide={this.handleClose}
         className="modal2" centered>
          <Modal.Header className="header">
            <Modal.Title>{this.selectTitle()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              Username <br />
              <input type="text" name="username" /> <br />
              Password <br />
              <input type="text" name="password" />
            </form>
          </Modal.Body>
          <Modal.Footer className="header">
            <Button className="button" >Login</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  selectTitle() {
    if (this.state.showUserLogin) {
      return "User Login";
    }
    else if (this.state.showRestaurantLogin) {
      return "Restaurant Login";
    }
    else if (this.state.showDriverLogin){
      return "Driver Login";
    }
  }
}

export default App;
