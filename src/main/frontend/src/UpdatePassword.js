import React, {Component} from "react";
import {Modal} from "react-bootstrap";

class UpdatePassword extends Component{
    state = {   // field names impact ?
        userEmail: "",
        userPassword: "",
        confirmPassword: "",
        userPasswordUpdate: true

    }


    closeAllOptionsOfSelectionForm = () => {
        this.setState({
            userPasswordUpdate: false
        });
    }

    handlePasswordChange = (event) => {
        this.setState(
            {
                userPassword: event.target.value
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

    forwardToLoginForm = () => {
        this.props.history.push("/LoginForm");
    }

    forwardToMySettingsPage = () => {
        this.props.history.push("/MySettingsPage");
    }

    userPassword = (event) => {
        this.setState({userPassword: event.target.value})
    }

    confirmPassword = (event) => {
        this.setState({confirmPassword: event.target.value})
    }

    userEmail = (event) => {
        this.setState({userEmail: event.target.value})
    }

    updatePassword = () => { debugger;
        fetch('/UpdatePasswordForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: this.state.userEmail,
                userPassword: this.state.userPassword

            }),
        }).then(res => {
            if (res.status !== 200) {
                this.setState({redirect: true, userPasswordUpdate: false});
                this.forwardToMySettingsPage();
                alert("Password updation failed. Kindly re-try.");
            }else {
                this.setState({redirect: true, userPasswordUpdate: false});
                this.forwardToLoginForm();
                alert("Password updation success. Please login with updated password.");
            }
        })
    }

    render() {
        return (
            <div>
                <Modal
                    show={this.state.userPasswordUpdate}
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
                                    <form onSubmit={this.updatePassword.bind(this)}>
                                        <div className="form-group">
                                            <input type="password" value={this.state.userPassword}
                                                   onChange={this.handlePasswordChange}
                                                   className="form-control"
                                                   placeholder="Enter password"
                                                   title="Password must be 8 to 16 characters and contain a lower case letter, capital letter, and a special character"
                                                   pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={this.state.confirmPassword}
                                                   onChange={this.handleConfirmPasswordChange}
                                                   className="form-control"
                                                   placeholder="Confirm password"
                                                   checked={this.state.userPassword === this.state.confirmPassword}
                                                   title="Re-enter password"
                                                   pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}"
                                                   required="required"/>
                                        </div>
                                        <button className="btn btn btn-primary" onClick={this.updatePassword.bind(this)} type="submit">
                                            Submit
                                        </button>
                                        <br/>
                                        <a href="#" onClick={this.forwardToLoginForm} >
                                            Go to Login page
                                        </a>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer id="modelBody">

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default UpdatePassword;