import React, {Component} from "react";
import './OTPpageCSS.css';

class OTPpage extends Component{
    render(){
        return (
        <div id="wrapper">
            <div id="dialog">
                <button className="close">×</button>
                <h3>Please enter the 6-digit verification code we sent via SMS:</h3>
                <div id="form">
                    <input type="text" maxLength="1" size="1" />
                    <input type="text" maxLength="1" size="1"/>
                    <input type="text" maxLength="1" size="1" />
                    <input type="text" maxLength="1" size="1"/>
                    <input type="text" maxLength="1" size="1" />
                    <input type="text" maxLength="1" size="1"/>
                    <button className="btn btn-primary btn-embossed">Verify</button>
                </div>
            </div>
        </div>)

    }
}

export default OTPpage;