import React, {Component} from "react";
import {connect} from "react-redux";

class userChatStartButton extends Component{
    state = {
        emailId: ""
    }

    callUserID = () => {
        this.props.setUserEmail(this.state.emailId);
    }
    handleUserNameChange = (event) => {
        this.setState({
            emailId: event.target.value
        })
    }
    callHandlers = (event) => {
        this.handleUserNameChange(event);
        this.props.setUserEmail(event);
    }
    forwardToChat = () => {
        this.props.history.push('/chatFeature')
    }
    render() {


        return(
            <div>

                <button onClick={this.forwardToChat}>Start chat</button>
            </div>

        )
    }

}
const mapStateToProps = (state)=>{
    return {
        emailId: state.userId,
        accountType: state.accountType,
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail(evt){
            dispatch({type: "setUserId", userId: evt, accountType: "user"});
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(userChatStartButton)