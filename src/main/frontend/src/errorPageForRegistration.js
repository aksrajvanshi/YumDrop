import React, {Component} from "react";

class errorPageForRegistration extends Component{

    goBackToRegisterForm = () => {
        this.props.history.push('/RegisterForm');
    }
    render() {
        return (
           <div>
               <p> Error in user registration</p>
               <button onClick={this.goBackToRegisterForm}>Go back to user Registration Page</button>
           </div>
        );
    }

}

export default errorPageForRegistration;