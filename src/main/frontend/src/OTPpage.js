import React, {Component} from "react";
import './OTPpageCSS.css';
import {Modal} from "react-bootstrap";

class OTPpage extends Component{


    state = {
        otp: "",
        userRegister: true,
        userName: "",
        redirect: false,
        userPassword: ""
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
                        otpfirst: "otpVal"
                    }
                )

            }
        ).then(res => {

               if (res.status !== 200) {
                   return;
               }
            this.setState({redirect: true});
               this.forwardToLoginDashboard();
               alert("done");
               console.log(res);
               alert("Done console logging");


        })

    }


    handleUserPasswordChange = (event) => {
        alert("Hey")
        this.setState({
            userPassword: "hello"
        });
    };





    forwardToLoginDashboard = () =>{
        this.props.history.push('/LoginDashBoard');
        alert("Inside this");
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
                                            <input type="password" value={this.state.userPassword}
                                                   onChange={this.handleUserPasswordChange} className="form-control"
                                                   placeholder="Password" required="required"/>
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