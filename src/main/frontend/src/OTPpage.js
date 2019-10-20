import React, {Component} from "react";
import './OTPpageCSS.css';

class OTPpage extends Component{
    constructor(props){
        super(props)
        this.state = {
            otp: ""
        }
    }
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
            alert("Hey going to otp page");



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
        this.props.history.push('/LoginDashBoard');
    }

    render(){
        return (
        <div id="wrapper">
            <div id="dialog">
                <button className="close">×</button>
                <h3>Please enter the 6-digit verification code we sent via SMS:</h3>
                <div id="form" onSubmit={this.optValidate}>
                    <form onSubmit={this.optValidate}>
                    <input type="text"  value={this.state.userFullName}
                           onChange={this.handleUserNameChange}  size="1" />
                    <input type="text" maxLength="1" size="1"/>
                    <input type="text" maxLength="1" size="1" />
                    <input type="text" maxLength="1" size="1"/>
                    <input type="text" maxLength="1" size="1" />
                    <input type="text" maxLength="1" size="1"/>
                    <button className="btn btn-primary btn-embossed" onSubmit={this.optValidate}>Verify</button>
                    </form>
                </div>
            </div>
        </div>)

    }
}

export default OTPpage;