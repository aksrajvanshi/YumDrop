import React, { Component } from "react";
import './MySettingsPage.css';
import {connect} from "react-redux";
import './LoginDashBoardCSS.css';


const mapStateToProps = (state)=>{
    return {
        userEmailId: state.userId
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}


class MySettingsPage extends Component{
    state = {
        dataReceived: [],
        userName: "",
        userEmailId:  "",
        userPhoneNumber: ""
    }
    returnToLoginDahboard = () => {
        this.props.history.push('/errorPageForRegistration');
    }
    forwardToMyCurrentLocation = () => {
        this.props.history.push('/MyCurrentLocation');
    }

    forwardToSettingsAddresses = () => {
        this.props.history.push('/UserSettingsPageAddresses')
    }

    settingsPage = () => {
        this.props.history.push('/MySettingsPage')
    }

    goBackToProfileSettingsPage = () => {
        this.props.history.push('/MySettingsPage')
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    goBackToLoginDashboard = () => {
        this.props.history.push('/LoginDashboard')
    }

    forwardToMyCart = () => {
        this.props.history.push('/MyCart')
    }

    goToActiveOrdersPage = () => {
        this.props.history.push('/ActiveOrders')
    }

    componentDidMount() {
        let currentComponent = this;
        fetch('/getUserDataForDashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: currentComponent.props.userEmailId
            }),
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            const userName = data.userName;
            currentComponent.setState({
                userName: data.userName,
                userEmailId: data.userEmail,
                userPhoneNumber: data.userPhoneNumber
            });
        })
        }

    goToChatFeature = () => {
        this.props.history.push('/chatFeature')
    }


    render() {
        let trying = this.state.data;
        if(this.props.userEmailId === null) {
            this.props.history.push('/')
        }
        return (
            <div>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#" onClick={this.goBackToLoginDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <a className="nav-link"><i
                                            className="fa fa-fw fa-user" onClick={this.goBackToLoginDashboard}/>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.forwardToMyCart}><i
                                            className="fa fa-fw fa-user"/>Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"   onClick={this.settingsPage} ><span>Settings</span></a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Sign Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4 pb-5">

                            <div className="author-card pb-3">
                                <div className="author-card-cover"
                                >
                                </div>
                                <div className="author-card-profile">
                                    <div className="author-card-avatar"><img
                                        src="https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg" />
                                    </div>

                                </div>
                            </div>
                            <div className="wizard">
                                <nav className="list-group list-group-flush">
                                    <a className="list-group-item" href="#">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div><i className="fe-icon-shopping-bag mr-1 text-muted"></i>
                                                <div className="d-inline-block font-weight-medium text-uppercase" >Orders
                                                    List
                                                </div>
                                            </div>

                                        </div>
                                    </a><a className="list-group-item active" href="#"><i
                                    className="fe-icon-user text-muted" onClick={this.goBackToProfileSettingsPage}></i>Profile Settings</a>
                                    <a className="list-group-item " onClick={this.goToActiveOrdersPage} ><i
                                        className="fe-icon-user text-muted" onClick={this.goToActiveOrdersPage}></i>Active Orders</a>
                                    <a
                                    className="list-group-item" href="#" onClick={this.forwardToSettingsAddresses}><i className="fe-icon-map-pin text-muted"></i>Addresses</a>
                                    <a className="list-group-item" href="#" onClick={this.forwardToMyCart}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div><i className="fe-icon-heart mr-1 text-muted"></i>
                                                <div className="d-inline-block font-weight-medium text-uppercase" >My
                                                    Cart
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                </nav>
                            </div>
                        </div>

                        <div className="col-lg-8 pb-5">
                            <form className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account-fn">First Name</label>
                                        <input className="form-control" type="text" id="account-fn"
                                               placeholder={this.state.userName}/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account-email">E-mail Address</label>
                                        <input className="form-control" type="email" id="account-email" placeholder={this.state.userEmailId}
                                               disabled=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account-phone">Phone Number</label>
                                        <input className="form-control" type="text" id="account-phone" placeholder={this.state.userPhoneNumber}
                                               required=""/>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <hr className="mt-2 mb-3"/>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox d-block">
                                            <input className="custom-control-input" type="checkbox"
                                                   id="subscribe_me" checked=""/>

                                        </div>
                                        <button className="btn btn-style-1 btn-primary" type="button" >Update
                                            Profile
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (MySettingsPage);