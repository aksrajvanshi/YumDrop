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
                                            <input type="password" value={this.state.password}
                                                   onChange={this.handlePasswordChange}
                                                   className="form-control"
                                                   placeholder="Enter password"
                                                   title="Password must be 8 characters or longer and contain a lower case letter, capital letter, and a special character"
                                                   pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={this.state.confirmPassword}
                                                   onChange={this.handleConfirmPasswordChange}
                                                   className="form-control"
                                                   placeholder="Confirm password"
                                                   checked={this.state.password === this.state.confirmPassword}
                                                   title="Re-enter password"
                                                   pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                   required="required"/>
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