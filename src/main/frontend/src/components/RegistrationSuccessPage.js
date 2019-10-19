import React, { Component } from 'react';

class RegistrationSuccessPage extends Component{

    handleReturnToHomePage = () => {
        this.props.history.push('/');
    }

    render() {
        return(
            <div >
                <h1>Successfully registered!</h1>
                <p>
                    Please return to the home page and sign in!
                </p>
                <button onClick={this.handleReturnToHomePage}>
                    Return to home page
                </button>
            </div>
        );
    }
}

export default RegistrationSuccessPage;