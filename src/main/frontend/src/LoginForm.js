import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import {connect} from "react-redux";
import './LoginFormCSS.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button, Dropdown, DropdownButton} from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Recaptcha from 'react-recaptcha';

class App extends Component {
    state = {
        loginSelect: true,
        userLoginOption: false,
        restaurantLoginOption: false,
        deliveryAgentLoginOption: false,
        closeAllOptionsOfSelectionForm: false,
        userName: "",
        userPassword: "",
        userPhoneNumber: "",
        userEmail: "",
        userTemporaryPassword: "",
        redirect: false,
        forgotPasswordSelect: false,
        emailSelectForgotPassword: false,
        isReCaptchaVerified: false

    };

    forwardToDeliveryAgentLoginForm = () => {
        this.props.history.push("/DeliveryAgentLoginForm")
    }

    verifyCallback = response => {
        if(response) {
            this.setState({
                isReCaptchaVerified: true
            })
        }
    }


    login = () => { debugger;
        fetch('/loginDataForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                user_name: this.state.userName,
                userPassword: this.state.userPassword
            }),
        }).then(res => {


            if (res.status !== 200) {
                this.setState({redirect: true, userRegister: false});
                this.forwardToLoginErrorPage();
            }else {
                if(this.state.isReCaptchaVerified) {
                    this.setState({redirect: true, userRegister: false});
                    this.props.setUser(this.state.userName);
                    this.forwardToLoginDashboard();
                }
                else {
                    this.setState({redirect: true, userRegister: false});
                    this.forwardToLoginErrorPage();
                }
            }


        })

    }

    passwordChange  = () => { debugger;
        fetch('/setNewUserPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: this.state.userEmail,
                temporaryPassword: this.state.userTemporaryPassword,
                newPassword: this.state.userPassword
            }),
        }).then(res => {


            if (res.status !== 200) {
                this.setState({redirect: true, userRegister: false});
                this.forwardToLoginErrorPage();

            }else {
                this.setState({redirect: true, userRegister: false, emailSelectForgotPassword: false, forgotPasswordSelect: true});
                this.forwardToSuccessfullyChangedPasswordPage();
            }


        })

    }

    forgotPasswordAPI = () => { debugger;
        fetch('/forgotUserPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: this.state.userEmail
            }),
        }).then(res => {


            if (res.status !== 200) {
                this.setState({redirect: true, userRegister: false});
                this.forwardToLoginErrorPage();
            }else {
                this.setState({redirect: true, userRegister: false, emailSelectForgotPassword: false, forgotPasswordSelect: true});
            }


        })

    }

    forwardToLoginErrorPage = () => {
        this.props.history.push("/loginErrorPAge")
    }

    forwardToRestaurantregister = () => {
        this.props.history.push("/RestaurantLogin")
    }
    forwardToSuccessfullyChangedPasswordPage = () => {
        this.props.history.push("/successfullyChangedPasswordPage");
    }


    loginSelect = () => {
        this.setState({
            userLoginOption: false,
            loginSelect: true,
            restaurantLoginOption: false,
            deliveryAgentLoginOption: false
        });
    };


    forwardToRegister = () => {
        this.props.history.push('/RegisterForm')
    }

    forwardToLoginDashboard = () => {
        this.props.history.push('/LoginDashBoard')
    }



    handelUserLoginOption = () => {
        this.setState({ loginSelect:false, restaurantLoginOption: false, deliveryAgentLoginOption: false, userLoginOption: true  });
    }


    handleUserTemporaryPassword = (event) => {
        this.setState({userTemporaryPassword : event.target.value})
    }

    closeAllOptionsOfSelectionForm= () => {
        this.setState({ userLoginOption: false, loginSelect:false, restaurantLoginOption: false, deliveryAgentLoginOption: false, forgotPasswordSelect: false, emailSelectForgotPassword: false  });
    }

    handleForgotPasswordChange = () => {
        this.setState({userLoginOption: false, loginSelect:false, restaurantLoginOption: false, deliveryAgentLoginOption: false, emailSelectForgotPassword: true  });
    }




    handleUserNameChange =  (event) => {
        this.setState({
            userName: event.target.value,
        });
    };
    handleUserPasswordChange =  (event) => {
        this.setState({
            userPassword: event.target.value,
        });
    };

    handleUserEmailIDChange =  (event) => {
        this.setState({
            userEmail: event.target.value,
        });
    };

    goBackToHomePAge = () => {
        this.props.history.push("/")
    }


    render() {
        const responseFacebook = (response) => {
            console.log(response);
            this.state.facebookUserAccessToken = response.accessToken;
            this.state.facebookUserId = response.userID;
            console.log("User ID", this.state.facebookUserId);
            console.log("Access Token ",this.state.facebookUserAccessToken);
            let api = 'https://graph.facebook.com/v2.8/' + this.state.facebookUserId +
                '?fields=name,email&access_token=' + this.state.facebookUserAccessToken;
            fetch(api)
                .then((response) => response.json())
                .then( (responseData) => {
                    console.log(responseData)
                    this.state.facebookUserEmail = responseData.email;
                    this.state.facebookUserName  = responseData.name;
                    console.log("Inside fetch api");
                    console.log(responseData.email);
                }).then(res => {
                fetch('/facebookUserLogin',
                    {
                        method: 'POST',
                        redirect: 'follow',
                        headers: {
                            "Content-Type": "application/json",
                            'Access-Control-Allow-Origin': '*'
                        },
                        body: JSON.stringify({
                                fbUserEmail: this.state.facebookUserEmail,
                                fbUserID: this.state.facebookUserId,
                                fbUserAccessToken: this.state.facebookUserAccessToken,
                                fbUserName: this.state.facebookUserName

                            }
                        )

                    }
                ).then(res => {


                    if (res.status !== 200) {
                        this.forwardToErrorPage();
                    }else {
                        this.forwardToLoginDashboard();
                    }


                })
            })};



        return( <div className="App">
            <header>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"/>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"/>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"/>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"/>
                <nav className=" navbar navbar-expand-lg navbar-dark ">
                    <div className="container">
                        <a className="navbar-brand " href="#" onClick={this.goBackToHomePAge}>YumDrop</a>
                        <div className="collapse navbar-collapse" id="navBarLinks">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.loginSelect}><i
                                        className="fa fa-fw fa-user"/>Login</a>
                                </li>
                                <li className="nav-item" id="SignUpID">
                                    <a className="nav-link" onClick={this.forwardToRegister}>Sign Up</a>
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
                        <p id="para"> Are you hungry?</p>
                    </li>
                    <ul className="list-unstyled">
                        <br/><br/><br/><br/>
                        <li>
                            <div className="form-row" data-wow-delay="0.4s">
                                <div className="col-md-5" id="firstbar">
                                    <div className="md-form">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AR">Arizona</option>
                                            <option value="AZ">Arkansas</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DC">Delaware</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="IA">Idaho</option>
                                            <option value="ID">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="KS">Iowa</option>
                                            <option value="KY">Kansas</option>
                                            <option value="LA">Kentucky</option>
                                            <option value="MA">Louisiana</option>
                                            <option value="MD">Maine</option>
                                            <option value="ME">Maryland</option>
                                            <option value="MI">Massachusetts</option>
                                            <option value="MN">Michigan</option>
                                            <option value="MO">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MT">Missouri</option>
                                            <option value="NC">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NH">Nevada</option>
                                            <option value="NJ">New Hampshire</option>
                                            <option value="NM">New Jersey</option>
                                            <option value="NV">New Mexico</option>
                                            <option value="NY">New York</option>
                                            <option value="ND">North Carolina</option>
                                            <option value="OH">North Dakota</option>
                                            <option value="OK">Ohio</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">Washington</option>
                                            <option value="WI">West Virginia</option>
                                            <option value="WV">Wisconsin</option>
                                            <option value="WY">Wyoming</option>
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
                                <div className="col-md-1" >
                                    <div className="md-form">
                                        <button className="btn btn-primary btn-md"><span id="SearchBar">Search</span></button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


            <br/><br/><br/><br/>
            <Modal
                show={this.state.userLoginOption}
                onHide={this.closeAllOptionsOfSelectionForm}
                animation={false}
                centered id="userLoginFormModal"
            >
                <Modal.Header className="modelheader" id="containerModal" center>
                    <Modal.Title className="modeltitle" id="modeltitle" center>
                        <strong>Select Account</strong>

                    </Modal.Title>
                </Modal.Header>

                <div className="container" id="userLoginFormModalContainer">
                    <div className="row">
                        <div className="main">
                            <div className="login-form">
                                <form onSubmit={this.login.bind(this)}>
                                    <div className="social-btn text-center">
                                        <FacebookLogin
                                            appId="1250006828526117"
                                            callback={responseFacebook}
                                            render={renderProps => (
                                                <button id="inputuserLoginFormModalContainer" className="btn btn-primary btn-block btn-lg" onClick={renderProps.onClick}><i
                                                    className="fa fa-facebook"></i> Login with <b>Facebook</b> </button>
                                            )}
                                        />
                                    </div>
                                    <div className="or-seperator"><i>or</i></div>
                                    <div className="form-group">
                                        <input value={this.state.userName}
                                               onChange={this.handleUserNameChange} type="text"
                                               className="form-control" placeholder="Username"
                                               pattern="[a-z][A-Z]" id="inputuserLoginFormModalContainer"
                                               required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <input value={this.state.userPassword}
                                               onChange={this.handleUserPasswordChange} type="password"
                                               className="form-control" placeholder="Password" id="inputuserLoginFormModalContainer"
                                               pattern="[a-z][A-Z]"
                                               required="required"/>
                                    </div>
                                    <div className="col-md-12 offset-7 form-group">
                                        <a href="#" onClick={this.handleForgotPasswordChange}>Forgot Password?</a>
                                    </div>
                                    <Recaptcha
                                        sitekey="6LfA28AUAAAAAAdm39FjgIVi38BoyQoLDKTM5EJN"
                                        render="explicit"
                                        onloadCallback={this.recaptchaLoaded}
                                        verifyCallback={this.verifyCallback}

                                    />
                                    <br/>
                                    <div className="form-group">
                                        <button onClick={this.login.bind(this)} type="submit"
                                                className="btn btn-primary btn-lg btn-block">Login
                                        </button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
            <Modal
                show={this.state.loginSelect}
                onHide={this.closeAllOptionsOfSelectionForm}
                animation={false}
                centered id="modalLoginSelect"
            >
                <Modal.Header className="modelheader" id="containerModal" center>
                    <Modal.Title className="modeltitle" id="modeltitle" center>
                        <strong>Select Account</strong>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="CheckSelection">

                    <div>
                        <div>
                            <div>

                                <div id="loginSelectionForm">
                                    <form>
                                        <div className="form-group">

                                            <button  type="submit"
                                                     onClick={this.handelUserLoginOption} id="buttonLoginOption" className="btn btn-outline-secondary btn-lg btn-block">I am a User
                                            </button>
                                        </div>

                                        <div className="form-group">
                                            <button  type="submit" onClick={this.forwardToRestaurantregister}
                                                     id="buttonLoginOption" className="btn btn-outline-secondary btn-lg btn-block">I am a Restaurant
                                            </button>
                                        </div>

                                        <div className="form-group">
                                            <button  type="submit" onClick={this.forwardToDeliveryAgentLoginForm}
                                                     id="buttonLoginOption" className="btn btn-outline-secondary btn-lg btn-block">I am a Delivery Agent
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>


            <Modal
                show={this.state.emailSelectForgotPassword}
                onHide={this.closeAllOptionsOfSelectionForm}
                animation={false}
                centered id="modal"
            >
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="login-form">
                                <form onSubmit={this.forgotPasswordAPI.bind(this)}>
                                    <h2 className="text-center">Enter your Email ID</h2>
                                    <div className="form-group">
                                        <input value={this.state.userEmail}
                                               onChange={this.handleUserEmailIDChange} type="text"
                                               className="form-control" placeholder="username / email ID"
                                               pattern="[a-z][A-Z]"
                                               required="required"/>
                                    </div>

                                    <div className="form-group">
                                        <button onClick={this.forgotPasswordAPI.bind(this)} type="submit"
                                                className="btn btn-primary btn-lg btn-block login-btn">Submit
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </Modal>


            <Modal
                show={this.state.forgotPasswordSelect}
                onHide={this.closeAllOptionsOfSelectionForm}
                animation={false}
                centered id="modal"
            >
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="login-form">
                                <form onSubmit={this.passwordChange.bind(this)}>
                                    <h2 className="text-center">Change Password</h2>

                                    <div className="form-group">
                                        <input value={this.state.userTemporaryPassword}
                                               onChange={this.handleUserTemporaryPassword} type="password"
                                               className="form-control" placeholder="Temporary Password"
                                               pattern="[a-z][A-Z]"
                                               required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <input value={this.state.userPassword}
                                               onChange={this.handleUserPasswordChange} type="password"
                                               className="form-control" placeholder="Password"
                                               pattern="[a-z][A-Z]"
                                               required="required"/>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={this.passwordChange.bind(this)} type="submit"
                                                className="btn btn-primary btn-lg btn-block login-btn">Login
                                        </button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </Modal>




            <div className="how-section1">
                <div className="row">
                    <div className="col-md-6 how-img">
                        <img src="https://previews.123rf.com/images/juliasart/juliasart1708/juliasart170800074/83585916-colorful-cafe-isometric-restaurant-building-cartoon-vector-icon-flat-isometric-design-.jpg"
                             className="rounded-circle img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h4>Local favorites</h4>
                        <h4 className="subheading">Satisfy any craving with delivery from popular neighborhood restaurants and chains. Reorder go-tos or find something new.</h4>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Delivery to your doorstep</h4>
                        <h4 className="subheading">Get great food delivered or save time and money and preorder for pick up. Either way, order tracking and updates keep you in the know.</h4>

                    </div>
                    <div className="col-md-6 how-img">
                        <img src="https://cdn.clipart.email/3a7d43627822f0b19af9bd540aebd827_food-delivery-man-clipart-clipartxtras_170-155.jpeg"
                             className="rounded-circle img-fluid" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 how-img">
                        <img src="https://activmeals.com/images/step3.png"
                             className="rounded-circle img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h4>Pickup or delivery from restaurants near you</h4>

                        <h4 className="subheading">Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave, and order online or through the YumDrop app. Find great meals fast with lots of local menus. Enjoy eating the convenient way with places that deliver to your door..</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Easy Pay</h4>
                        <h4 className="subheading">Pay for food with one click of a button.
                            Multiple payment options. </h4>
                    </div>
                    <div className="col-md-6 how-img">
                        <img src="https://www.trzcacak.rs/myfile/full/377-3774169_payment-channel-payment-channel-payment-channel-payment-bank.png"
                             className="rounded-circle img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = (state)=>{
    return {
        userEmailId: state.userId
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUser(evt){
            dispatch({type: "setUserId", userId: evt});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
