import React, {Component} from  'react';
import {VERIFY_USER} from './Events'

class LoginFormChat extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            error: ""

        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {socket} = this.props
        const {username} = this.state
        socket.emit(VERIFY_USER, username, this.setUser)

    }

    setUser = (user,isUser) => {
        console.log(user, isUser)
        if(isUser){
            this.setError("User name exists")
        }
        else{
            this.props.setUser(user)
        }
    }
    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    setError = (error) => {
        this.setState({error})
    }

    render(){
        const {username, error} = this.state
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <label htmlFor="nickname">
                        <h2>User name</h2>
                    </label>
                    <input
                        ref={(input) => {this.textInput = input}}
                        type="text"
                        id="username"
                        value={username}
                        onChange={this.handleChange}
                        placeholder="UserEmail"
                    />
                    <div className="error">{error ? error: null}</div>
                </form>
            </div>
        )
}

}

export default LoginFormChat