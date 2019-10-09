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
import ReactTelephoneInput from "react-telephone-input/es/ReactTelephoneInput";

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
        username:"",
        RestaurantName: "",
        RestaurantEmail: "",
        RestaurantPassword: "",
        RestaurantPhoneNumber: "",
        DeliveryAgentName: "",
        DeliveryAgentEmailID:"",
        DeliveryAgentPassword: "",
        DeliveryAgentConfirmPassword: "",
        DeliveryAgentPhoneNumber: "",
        RestaurantManager:"",
        RestaurantPhoneNumber2: ""

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

    handleDeliveryAgentPhoneNumberChange =  (event) => {
        this.setState({
            DeliveryAgentConfirmPassword: event.target.value,
        });
    };

    handleDeliveryAgentConfirmPasswordChange =  (event) => {
        this.setState({
            DeliveryAgentConfirmPassword: event.target.value,
        });
    };
    handleDeliveryAgentPasswordChange =  (event) => {
        this.setState({
            DeliveryAgentPassword: event.target.value,
        });
    };

    handleDeliveryAgentEmailIDChange =  (event) => {
        this.setState({
            DeliveryAgentEmailID: event.target.value,
        });
    };
    handleDeliveryAgentNameChange =  (event) => {
        this.setState({
            DeliveryAgentName: event.target.value,
        });
    };

    Restaurantregister  = () => { debugger;
        fetch('/restaurantRegistration',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    restaurant_email: this.state.RestaurantEmail,
                    restaurant_password  :this.state.RestaurantPassword,
                    restaurant_phonenumber  : this.state.RestaurantPhoneNumber,
                    restaurant_name    : this.state.RestaurantName
                })
            }
        ).then(function(res){ debugger; return res.json(); })
            .then(function(data){ console.log( JSON.stringify( data ) ) })

    }

    handleRestaurantNameChange =  (event) => {
        this.setState({
            RestaurantName: event.target.value,
        });
    };
    RestaurantPhoneNumber2 =  (event) => {
        this.setState({
            RestaurantPhoneNumber2: event.target.value,
        });
    };
    restaurantManager = (event) => {
        this.setState({
            RestaurantManager: event.target.value,
        });
    };

    handleRestaurantEmailChange =  (event) => {
        this.setState({
            RestaurantEmail: event.target.value,
        });
    };

    handleRestaurantPasswordChange  =  (event) => {
        this.setState({
            RestaurantPassword: event.target.value,
        });
    };

    handleRestaurantPhoneNumberChange=  (event) => {
        this.setState({
            RestaurantPhoneNumber: event.target.value,
        });
    };
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
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
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




                </header>


                <link href="https://raw.githubusercontent.com/daneden/animate.css/master/animate.css" rel="stylesheet"/>

                    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="mask flex-center">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-md-7 col-12 order-md-1 order-2">
                                                <h3>Are you hungry? <br/>
                                                    </h3>
                                                <p>Order food from anytime and any place <br/>

                                                </p>
                                                <a href="#">Order Now</a></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

















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
                    <Modal.Header id="UserHead">
                        <Modal.Title id="modeltitle">{this.getTitle()}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="formID">
                            <input type="text" id="username" placeholder="Username / Email ID"></input> <br />
                            <input type="password" id="password" placeholder="Password"></input>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <a id="button" href="#">
                            Login
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

                        <form onSubmit={this.register} id="formID">
                            <input
                                value={this.state.username} onChange={this.handleUserNameChange}
                                type="text"
                                id="username"
                                placeholder="Full Name"

                            />
                            <br />
                            <input
                                type="text"
                                id="username"
                                placeholder="Email ID"
                                value={this.state.useremail} onChange={this.handleUserEmailIdChange}

                            />
                            <br />
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={this.state.userpassword} onChange={this.handleUserPasswordChange}
                            ></input><br/>
                            <select name="CountryCode" name="Country Code" id="SelectCountryCode">
                                <option value="India">+91</option>
                                <option value="USA">+1</option>
                            </select><br/>
                            <input
                                type="text"
                                id="password"
                                placeholder="Phone Number"
                                value={this.state.userphonenumber} onChange={this.handleUserPhoneNumberChange}
                            ></input>
                            <br />
                        </form>
                    </Modal.Body>
                    <Modal.Footer id="modelBody">
                        <button id="button" onClick={this.register}>Register</button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={this.state.DeliveryRegister}
                    onHide={this.CloseAll}
                    animation={false}
                >
                    <Modal.Header id="UserHead">
                        <Modal.Title id="modeltitle">
                            Delivery Agent Registration
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form  id="formID">
                            <input
                                type="text"
                                id="username"
                                placeholder="Name"
                                value={this.state.DeliveryAgentName} onChange={this.handleDeliveryAgentNameChange}
                            />
                            <br />
                            <input
                                type="text"
                                id="username"
                                placeholder="Email ID"
                                value={this.state.DeliveryAgentEmailID} onChange={this.handleDeliveryAgentEmailIDChange}
                            />
                            <br />

                            <input
                                type="text"
                                id="password"
                                placeholder="Password"
                                value={this.state.DeliveryAgentPassword} onChange={this.DeliveryAgentPassword}
                            ></input>
                            <input
                                type="password"
                                id="password"
                                placeholder="Confirm Password"
                                value={this.state.DeliveryAgentConfirmPassword} onChange={this.handleDeliveryAgentConfirmPasswordChange}
                            ></input>
                            <input
                                type="text"
                                id="password"
                                placeholder="Phone Number"
                                value={this.state.DeliveryAgentPhoneNumber} onChange={this.handleDeliveryAgentPhoneNumberChange}
                            ></input>
                        </form>
                    </Modal.Body>
                    <Modal.Footer id="modelBody">
                        <button id="button" onClick={this.DeliveryAgentregister}>Register</button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.RestaurantRegister}
                    onHide={this.CloseAll}
                    animation={false}
                    centered
                    id="RestaurantModel"
                >
                    <Modal.Header id="UserHead">
                        <Modal.Title id="modeltitle">Restaurant Registration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form  id="formID">


                        <input
                            value={this.state.RestaurantName} onChange={this.handleRestaurantNameChange}
                            type="text"
                            id="username"
                            placeholder="Restaurant Name"

                        />
                        <br />

                        <input
                            placeholder="Restaurant Manager's Name"
                            type="text"
                            id="username"
                            onChange={this.restaurantManager}
                        />
                        <br/>

                        <input
                            type="text"
                            id="username"
                            placeholder="Restaurant Email ID"
                            value={this.state.RestaurantEmail} onChange={this.handleRestaurantEmailChange}

                        />
                        <br />

                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={this.state.RestaurantPassword} onChange={this.handleRestaurantPasswordChange}
                        ></input>

                        <input
                            type="text"
                            id="password"
                            placeholder="Phone Number"
                            value={this.state.RestaurantPhoneNumber} onChange={this.handleRestaurantPhoneNumberChange}
                        ></input>
                        <br />

                        <input
                            type="text"
                            id="password"
                            placeholder="Secondary Phone number "
                            onChange={this.RestaurantPhoneNumber2}
                        ></input>
                    </form>
                </Modal.Body>
                <Modal.Footer id="modelBody">
                    <button onClick={this.Restaurantregister}>Register</button>
                </Modal.Footer>
                </Modal>


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