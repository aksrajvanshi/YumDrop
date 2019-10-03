import React, { Component } from 'react';
import './App.css';
import { Slide } from 'react-slideshow-image';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button} from 'react-bootstrap';
import trying2 from './images/trying2.jfif';
import display1 from './images/IndianFood.jpg';
import display2 from './images/ItalianFood.jpg';
import display3 from './images/JapaneseFood.jpg';
import display4 from './images/KoreanFood.jpg';
import display5 from './images/MexicanFood.jpg';
import display6 from './images/ThaiFood.jpg';
import display7 from './images/WestAfricanFood.jpg';
import trying4 from './images/1502296790.92.jpg';

const properties = {
    duration: 10000,
    transitionDuration: 100,
    infinite: true,
    arrows: true,
}
class App extends Component {
    state = {
        SelectLogin: false,
        UserLogin: false,
        RestaurantLogin: false,
        DeliveryLogin: false
    }
    SelectLogin = () => {
        this.setState({ SelectLogin: true })
    }
    UserLogin = () => {
        this.setState({ UserLogin: true, SelectLogin: false, RestaurantLogin: false, deliveryLogin: false })
    }

    RestaurantLogin = () => {
        this.setState({ UserLogin: false, SelectLogin: false, RestaurantLogin: true, DeliveryLogin: false })
    }

    DeliveryLogin = () => {
        this.setState({ UserLogin: false, SelectLogin: false, RestaurantLogin: false, DeliveryLogin: true })
    }

    CloseAll = () => {
        this.setState({ UserLogin: false, SelectLogin: false, RestaurantLogin: false, DeliveryLogin: false })
    }
    getTitle() {
        if (this.state.UserLogin) {
            return "User Login";
        }
        else if (this.state.RestaurantLogin) {
            return "Restaurant Login";
        }
        else if (this.state.DeliveryLogin){
            return "Delivery Login";
        }
    }

    render(){
      return (
          <div className="App">
              <header>
                  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                  <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                      <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
                      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                  <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                      <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
                      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

                  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" />
                  <nav className="NavigationBar">
                      <h2 className="menu_logo">YumDrops</h2>
                      <div className="menuright">
                          <ul className="menulist">
                              <div id="search-container">
                                  <form>
                                      <input type="text" placeholder="Search.." name="search"/>
                                          <button type="submit" id="navbutton"><i className="fa fa-search"></i></button>
                                  </form>
                              </div>
                              <li className="menulist-item"> <a className="NavBarB" href="#" onClick={this.SelectLogin}>Login</a> </li>
                              <li className="menulist-item"><a className="NavBarA" href="#">Sign Up </a></li>
                          </ul>
                      </div>
                  </nav>
              </header>

              <Modal id="ModelOuter" show={this.state.SelectLogin} onHide={this.CloseAll} className="modal" animation={false} centered>
                  <Modal.Header id="modelheader">
                      <Modal.Title id="modeltitle">Select Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Button id="UserID" onClick={this.UserLogin}>User</Button> <br />
                      <Button id="RestaurantId" onClick={this.RestaurantLogin}>Restaurant</Button> <br />
                      <Button id="DeliveryId" onClick={this.DeliveryLogin}>Delivery</Button>
                  </Modal.Body>
              </Modal>
              <Modal show={this.state.DeliveryLogin || this.state.UserLogin || this.state.RestaurantLogin} onHide={this.CloseAll} animation={false}>
                  <Modal.Header>
                      <Modal.Title>{this.getTitle()}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <form>
                          Username: <br />
                          <input type="text"></input> <br />
                          Password: <br />
                          <input type="text"></input>
                      </form>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button>Login</Button>
                  </Modal.Footer>
              </Modal>



              <div className="container">
                  <div className="row">
                      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                          <ol className="carousel-indicators">
                              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                          </ol>
                          <div className="carousel-inner">
                              <div className="item active">
                                  <img src={pic1}
                                       alt="First slide"/>
                                      <div className="header-text hidden-xs">
                                          <div className="col-md-12 text-center">
                                              <h2>
                                                  <span>Welcome to <strong>Yum Drops</strong></span>
                                              </h2>
                                              <br/>
                                                  <h3>
                                                      <span>Delivering deliciouness at your doorstep</span>
                                                  </h3>
                                                  <br/>


                                          </div>
                                      </div>
                              </div>

                          </div>

                      </div>
                  </div>
                  <h1>
                      <span>Are you hungry?</span>
                      <span>Order food any time and anywhere!!!</span>
                  </h1>
              </div>
              <div className="row">
                  <div className="column">
                      <div className="polaroid">
                      <img src={display1} alt="IndianFood" width="300px" height="300px" className="ImageDisplay"/>
                      <div className="ParagraphForPolaroid">
                          <p>Indian Food</p>
                      </div>
                      </div>
                  </div>
                  <div className="column">
                      <div className="polaroid">
                      <img src={display2} alt="ItalianFood" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                              <p>Italian Food</p>
                          </div>
                      </div>
                  </div>
                  <div className="column">
                      <div className="polaroid">
                      <img src={display3} alt="JapaneseFood" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                          <p>Japanese Food</p>
                      </div>
                  </div>
                  </div>
              </div>

              <div className="row">
                  <div className="column">
                      <div className="polaroid">
                          <img src={display4} alt="KoreanFood" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                              <p>Korean Food</p>
                          </div>
                      </div>
                  </div>
                  <div className="column">
                      <div className="polaroid">
                          <img src={display5} alt="Mexican" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                              <p>Mexican Food</p>
                          </div>
                      </div>
                  </div>
                  <div className="column">
                      <div className="polaroid">
                          <img src={display6} alt="Thai" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                              <p>Thai Food</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="column">
                      <div className="polaroid">
                          <img src={display7} alt="AfricanFood" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                              <p>African Food</p>
                          </div>
                      </div>
                  </div>
                  <div className="column">
                      <div className="polaroid">
                          <img src={trying2} alt="Forest" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                              <p>Indian Food</p>
                          </div>
                      </div>
                  </div>
                  <div className="column">
                      <div className="polaroid">
                          <img src={trying2} alt="Mountains" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                              <p>Some Food</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="column">
                      <div className="polaroid">
                          <img src={trying2} alt="Snow" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                              <p>Some Food</p>
                          </div>
                      </div>
                  </div>
                  <div className="column">
                      <div className="polaroid">
                          <img src={trying2} alt="Forest" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                              <p>Some Food</p>
                          </div>
                      </div>
                  </div>
                  <div className="column">
                      <div className="polaroid">
                          <img src={trying2} alt="Mountains" width="300px" height="300px" className="ImageDisplay"/>
                          <div className="ParagraphForPolaroid">
                              <p>Some Food</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      )
  }
}

export default App;
