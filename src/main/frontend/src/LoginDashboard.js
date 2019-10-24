import React, { Component } from "react";
import './LoginDashBoardCSS.css';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return {
        test: state.testRed.test,
        test2: state.testRed.test2
    }
}

class LoginDashBoard extends Component{

    forwardToSettingsPage = () => {
        this.props.history.push('/MySettingsPage');
    }
    render() {
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

                    <p>{this.props.test}</p>
                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#">YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                        <li className="upper-links dropdown"><a className="links"
                                        >Settings</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="profile-links" onClick={this.forwardToSettingsPage}
                                                >My Account</a></li>
                                                <li className="profile-li"><a>My Orders</a></li>
                                            </ul>
                                    </li>
                                    <li>
                                        <div className="cart largenav col-sm-2">
                                            <a className="cart-button">
                                                <svg className="cart-svg " width="16 " height="16 " viewBox="0 0 16 16 ">
                                                    <path
                                                        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 "
                                                        fill="#fff "></path>
                                                </svg>
                                                My Cart
                                            </a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

            </div>

        );
    }

}
export default connect(mapStateToProps)(LoginDashBoard);