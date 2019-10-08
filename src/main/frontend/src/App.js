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
import trying4 from "./images/1502296790.92.jpg";
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
        SelectLogin: false,
        UserLogin: false,
        RestaurantLogin: false,
        DeliveryLogin: false,
        RegisterSelect: false,
        UserRegister: false,
        RestaurantRegister: false,
        DeliveryRegister: false,
        signUpPassword: "",
        signUpConfirmPassword: "",
        signUpEmail: "",
        signUpPhoneNum: "",
        signUpPhoneNum2: "",
        signUpName: "",
        signUpRestaurantName: "",
        useremail: "",
        userpassword: "",
        userphonenumber: "",
        username:""
    };
    SelectLogin = () => {
        this.setState({ SelectLogin: true });
    };
    UserLogin = () => {
        this.setState({
            UserLogin: true,
            SelectLogin: false,
            RestaurantLogin: false,
            DeliveryLogin: false
        });
    };

    RestaurantLogin = () => {
        this.setState({
            UserLogin: false,
            SelectLogin: false,
            RestaurantLogin: true,
            DeliveryLogin: false
        });
    };

    DeliveryLogin = () => {
        this.setState({
            UserLogin: false,
            SelectLogin: false,
            RestaurantLogin: false,
            DeliveryLogin: true
        });
    };

    RegisterSelect = () => {
        this.setState({
            UserRegister: false,
            RegisterSelect: true,
            RestaurantRegister: false,
            DeliveryRegister: false
        });
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
        fetch('/userRegistration',
            {
                header:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method:'POST',
                type:"cors",
                body:JSON.stringify({user_email: this.state.useremail, user_name:this.state.username, userPassword : this.state.userpassword,user_phonenum : this.state.userphonenumber})


            }
        ).then(function(res){ debugger; return res.json(); })
            .then(function(data){ console.log( JSON.stringify( data ) ) })

    }



    handleUserNameChange =  (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handleUserPhoneNumberChange =  (event) => {
        this.setState({
            userphonenumber: event.target.value,
        });
    };

    handleUserPasswordChange =  (event) => {
        this.setState({
            userpassword: event.target.value,
        });
    };

    handleUserEmailIdChange =  (event) => {
        this.setState({
            useremail: event.target.value,
        });
    };


    UserRegister = () => {
        this.setState({
            UserRegister: true,
            RegisterSelect: false,
            RestaurantRegister: false,
            DeliveryRegister: false
        });
    };

    RestaurantRegister = () => {
        this.setState({
            UserRegister: false,
            RegisterSelect: false,
            RestaurantRegister: true,
            DeliveryRegister: false
        });
    };

    DeliveryRegister = () => {
        this.setState({
            UserRegister: false,
            RegisterSelect: false,
            RestaurantRegister: false,
            DeliveryRegister: true
        });
    };

    CloseAll = () => {
        this.setState({
            UserLogin: false,
            SelectLogin: false,
            RestaurantLogin: false,
            DeliveryLogin: false,
            RegisterSelect: false,
            UserRegister: false,
            RestaurantRegister: false,
            DeliveryRegister: false
        });
    };

    validateUserName = () => {
        if (!this.state.signUpName) {
            return "Name cannot be empty. ";
        } else if (!/^[A-Za-z]+$/.test(this.state.signUpName)) {
            return "Please only use letters. ";
        } else {
            return true;
        }
    };

    validateRestuarantName = () => {
        if (!this.state.signUpRestaurantName) {
            return "Restaurant name cannot be empty. ";
        } else if (!/^[A-Za-z]+$/.test(this.state.signUpName)) {
            return "Please only use letters. ";
        } else {
            return true;
        }
    };

    validateEmail = () => {
        if (!EmailValidator.validate(this.state.signUpEmail)) {
            return "Please enter a valid email. ";
        } else {
            return true;
        }
    };

    validatePassword = () => {
        if (!/[a-z]/.test(this.state.signUpPassword)) {
            return "Password must have atleast one lower case letter. ";
        } else if (!/[A-Z]/.test(this.state.signUpPassword)) {
            return "Password must have atleast one upper case letter. ";
        } else if (/^[A-Za-z]+$/.test(this.state.signUpPassword)) {
            return "Password must contain atleast one unique non-letter character. ";
        } else {
            return true;
        }
    };

    validateConfirmPassword = () => {
        if (this.state.signUpConfirmPassword != this.state.signUpPassword) {
            return "Passwords do not match. ";
        }
        else {
            return true;
        }
    };

    validatePhoneNum = () => {
        if (this.state.signUpPhoneNum) {
            if (
                !isMobilePhone("+" + this.state.signUpPhoneNum, "any", {
                    strictMode: true
                })
            ) {
                return "Please enter a valid phone number. ";
            }
        } else {
            return true;
        }
    };

    handleUserChange =  (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    validatePhoneNum2 = () => {
        if (this.state.signUpPhoneNum2) {
            if (
                !isMobilePhone("+" + this.state.signUpPhoneNum2, "any", {
                    strictMode: true
                })
            ) {
                return "Please enter a second valid phone number. ";
            }
        } else {
            return true;
        }
    };

    getTitle() {
        if (this.state.UserLogin) {
            return "User Login";
        } else if (this.state.RestaurantLogin) {
            return "Restaurant Login";
        } else if (this.state.DeliveryLogin) {
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


                <form onSubmit={this.login}>
                    <input type="text" value={this.state.email} onChange={this.handleUserChange} />
                    <button onClick={this.login}>ClickME!</button>
                </form>


                <Modal
                    show={this.state.SelectLogin}
                    onHide={this.CloseAll}
                    className="modal"
                    animation={false}
                    centered
                >
                    <Modal.Header className="modelheader" id="containerModal">
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
                        this.state.DeliveryLogin ||
                        this.state.UserLogin ||
                        this.state.RestaurantLogin
                    }
                    onHide={this.CloseAll}
                    animation={false}
                >
                    <Modal.Header>
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
                            Sign UP
                        </a>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.RegisterSelect}
                    onHide={this.CloseAll}
                    animation={false}
                    centered
                >
                    <Modal.Header className="modelheader" id="containerModal">
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
                    show={this.state.UserRegister}
                    onHide={this.CloseAll}
                    animation={false}
                    id="Trying"
                >


                    <Modal.Header id="UserHead">
                        <Modal.Title id="modeltitle">User Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modelBody">

                        <form onSubmit={this.login}>
                            <input type="text" value={this.state.email} onChange={this.handleUserChange} />
                            <button onClick={this.login}>ClickME!</button>
                        </form>

                        <form onSubmit={this.register}>
                            <label htmlFor="username">Name: </label>
                            <input
                                value={this.state.username} onChange={this.handleUserNameChange}
                                type="text"
                                id="username"

                            />
                            <br />
                            <label htmlFor="username">Email:</label>
                            <input
                                type="text"
                                id="username"
                                value={this.state.useremail} onChange={this.handleUserEmailIdChange}

                            />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="text"
                                id="password"
                                value={this.state.userpassword} onChange={this.handleUserPasswordChange}
                            ></input>
                            <label htmlFor="password">Phone:</label>
                            <input
                                type="text"
                                id="password"
                                value={this.state.userphonenumber} onChange={this.handleUserPhoneNumberChange}
                            ></input>
                            <br />
                        </form>
                    </Modal.Body>
                    <Modal.Footer id="modelBody">
                        <button onClick={this.register}>Register NOW!</button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={this.state.DeliveryRegister}
                    onHide={this.CloseAll}
                    animation={false}
                >
                    <Modal.Header>
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
                            <label htmlFor="username">Email ID</label>
                            <input
                                type="text"
                                id="username"
                                onChange={evt => this.updateEmail(evt)}
                            />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="text"
                                id="password"
                                onChange={evt => this.updatePassword(evt)}
                            ></input>
                            <label htmlFor="password">Confirm Password:</label>
                            <input
                                type="text"
                                id="password"
                                onChange={evt => this.updateConfirmPassword(evt)}
                            ></input>
                            <label htmlFor="password">Phone Number:</label>
                            <input
                                type="text"
                                id="password"
                                onChange={evt => this.updatePhoneNum(evt)}
                            ></input>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <a id="button" href="#">
                            Submit
                        </a>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.RestaurantRegister}
                    onHide={this.CloseAll}
                    animation={false}
                    centered
                    id="RestaurantModel"
                >
                    <Modal.Header>
                        <Modal.Title id="modeltitle">Restaurant Registration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <label>
                                {this.validateRestuarantName()}
                                {this.validateUserName()} {this.validateEmail()}
                                {this.validatePassword()} {this.validateConfirmPassword()}
                                {this.validatePhoneNum()} {this.validatePhoneNum2()}
                            </label>
                            <label htmlFor="username"> Restaurant Name</label>
                            <input
                                type="text"
                                id="username"
                                onChange={evt => this.updateRestaurantName(evt)}
                            />
                            <br />
                            <label htmlFor="username"> Manager's/Contact Person's Name</label>
                            <input
                                type="text"
                                id="username"
                                onChange={evt => this.updateName(evt)}
                            />
                            <br />
                            <label htmlFor="username">Email ID</label>
                            <input
                                type="text"
                                id="username"
                                onChange={evt => this.updateEmail(evt)}
                            />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="text"
                                id="password"
                                onChange={evt => this.updatePassword(evt)}
                            ></input>
                            <label htmlFor="password">Confirm Password:</label>
                            <input
                                type="text"
                                id="password"
                                onChange={evt => this.updateConfirmPassword(evt)}
                            ></input>
                            <label htmlFor="password">Phone Number 1:</label>
                            <input
                                type="text"
                                id="password"
                                onChange={evt => this.updatePhoneNum(evt)}
                            ></input>
                            <label htmlFor="password">Phone Number 2:</label>
                            <input
                                type="text"
                                id="password"
                                onChange={evt => this.updatePhoneNum2(evt)}
                            ></input>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <a id="button" href="#" >
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