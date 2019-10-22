import React, {Component} from "react";
import {Modal} from "react-bootstrap";

class OTPResetPassword extends Component{


    state = {
        otp: "",
        otpSelect: true
    }

    handleChangeOTP = (event) =>{
        this.setState(
            {otp : event.target.value}
        );
    }

    forwardToResetPassword = () => {
        this.props.history.push('/ResetPassword')
    }

    closeAllOptionsOfSelectionForm = () => {
        this.setState(
            {
                otpSelect: true
            }
        )
    }

    render() {
        return(
            <div>

                <Modal
                    show={this.state.otpSelect}
                    onHide={this.closeAllOptionsOfSelectionForm}
                    animation={false}
                    id="modal"
                >
                    <Modal.Header id="UserHead">
                        <Modal.Title id="modeltitle">Please Provide OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modelBody">

                        <div className="container">
                            <div className="row">
                                <div className="main">
                                    <form>
                                        <div className="form-group">
                                            <input value={this.state.otp}  placeholder="Please provide OTP" onChange={this.handleChangeOTP} type="text" className="form-control" id="inputUsernameEmail"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer id="modelBody">
                        <button className="btn btn btn-primary" onClick={this.forwardToResetPassword}>Verify</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default OTPResetPassword;