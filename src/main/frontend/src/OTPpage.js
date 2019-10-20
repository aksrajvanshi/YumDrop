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
           try {
               if (res.status !== 200) {
                   return;
               }
               this.forwardToLoginDashboard();
           }catch (error) {
               console.log(error);
               alert(error);
           }


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

                <Modal
                    show={this.state.userRegister}
                    animation={false}
                    id="modal"
                >
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form >
                                        <h2 className="text-center">User  {this.state.userName} Sign Up</h2>
                                        <div className="social-btn text-center">
                                            <a href="#" className="btn btn-primary btn-block btn-lg"><i
    className="fa fa-facebook"/> Sign up with <b>Facebook</b></a>
                                            <a href="#" className="btn btn-danger btn-block btn-lg"><i
    className="fa fa-google"/> Sign up with <b>Google</b></a>
                                        </div>
                                        <div className="or-seperator"><i>or</i></div>


                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   value={this.state.otp}
                                                   onChange={this.handleUserNameChange}
                                                   placeholder="Phone  Number" required="required"/>
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

                </Modal>
            </div>
        )

    }
}

export default OTPpage;