import React, {Component} from "react";
import {Modal} from "react-bootstrap";

class UpdatePassword extends Component{
    state = {
        password: "",
        confirmPassword: "",
        userPasswordReset: true

    }

    forwardToLoginForm = () => {
        this.props.history.push("/LoginForm");
    }

    closeAllOptionsOfSelectionForm = () => {
        this.setState({
            userPasswordReset: false
        });
    }

    handlePasswordChange = (event) => {
        this.setState(
            {
                password: event.target.value
            }
        )
    }

    handleConfirmPasswordChange = (event) => {
        this.setState(
            {
                confirmPassword: event.target.value
            }
        )
    }
    render() {
        return (
            <div>
                <Modal
                    show={this.state.userPasswordReset}
                    onHide={this.closeAllOptionsOfSelectionForm}
                    animation={false}
                    id="modal"
                >
                    <Modal.Header id="UserHead">
                        <Modal.Title id="modeltitle">Update password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modelBody">

                        <div className="container">
                            <div className="row">
                                <div className="main">
                                    <form>
                                        <div className="form-group">
                                            <input value={this.state.password}  placeholder="Enter new password" onChange={this.handlePasswordChange} type="password" className="form-control" id="inputUsernameEmail"/>
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.confirmPassword}  placeholder="Confirm password" onChange={this.handleConfirmPasswordChange} type="password" className="form-control" id="inputUsernameEmail"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer id="modelBody">
                        <button className="btn btn btn-primary" onClick={this.forwardToLoginForm}>Submit</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default UpdatePassword;