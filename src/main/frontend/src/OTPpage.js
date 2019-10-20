import React, {Component} from "react";
import './OTPpageCSS.css';
import {Modal} from "react-bootstrap";

class OTPpage extends Component{
    constructor(props){
        super(props)

    }

    state = {
        otp: "",
        userRegister: true,
        userName: ""
    };
    optValidate() {
        debugger;
        let obj = {}
        fetch('/otpAuthentication',
            {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                        otp: "otpVal"
                    }
                )

            }
        ).then(res => {

               if (res.status !== 200) {
                   return;
               }

               this.forwardToLoginDashboard();
               alert("done");


        })

    }
    handleOtpChange1 = (event) => {
        this.setState({
            otp1: event.target.value,
        });
    };

    handleUserNameChange = (event) => {
        this.setState({
            otp: event.target.value,
        });
    };




    forwardToLoginDashboard = () =>{
        alert("Inside this");
        this.props.history.push('/LoginDashBoard');
    }

    render(){
        return (

            <div>
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form >



                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   value={this.state.otp}
                                                   onChange={this.handleUserNameChange}
                                                   placeholder="Please Provide OTP" required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <button onClick={this.optValidate.bind(this)} type="submit"
                                                    className="btn btn-primary btn-lg btn-block login-btn">Sign Up
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        )

    }
}

export default OTPpage;