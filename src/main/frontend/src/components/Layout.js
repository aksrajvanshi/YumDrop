import React, {Component} from "react";
import io from 'socket.io-client';
import {USER_CONNECTED, LOGOUT} from "../Events";
import LoginFormChat from "../LoginFormChat";
import ChatContainer from "./../chats/ChatContainer"

const socketURL = "http://localhost:3001/"
class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            socket: null,
            user: null
        };
    }

    componentWillMount() {
        this.initSocket()
    }

    initSocket = () => {
        const socket = io(socketURL)
        socket.on('connect', ()=>{
            console.log("connected")
        })
        this.setState({socket})
    }

    setUser = (user) => {
        const { socket } = this.state
        socket.emit(USER_CONNECTED,user);
        this.setState({user})
    }

    logout = () => {
        const { socket } = this.state
        socket.emit(LOGOUT);
        this.setState({user:null})
    }

    render() {
        const { title } = this.props
        const {socket, user} = this.state
        return(
            <div className="container">
                {
                    !user ?
                    <LoginFormChat socket={socket} setUser={this.setUser}/>
                    : <ChatContainer socket={socket} user={user}logout={this.logout}/>
                }
            </div>
        )
    }
}

export default Layout