import React, { Component } from 'react';
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from './Events'
import LoginFormForDeliveryAgent from './LoginFormForDeliveryAgent'
import ChatContainer from './components/chats/ChatContainer'

const socketUrl = "http://localhost:3231"

export default class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            socket:null,
            user:null
        };
    }

    componentWillMount() {
        this.initSocket()
    }


    initSocket = ()=>{
        const socket = io(socketUrl)

        socket.on('connect', ()=>{
            console.log("Connected");
        })

        this.setState({socket})
    }


    setUser = (user)=>{
        const { socket } = this.state
        socket.emit(USER_CONNECTED, user);
        this.setState({user})
    }


    logout = ()=>{
        const { socket } = this.state
        socket.emit(LOGOUT)
        this.setState({user:null})

    }


    render() {
        const { title } = "Support"
        const { socket, user } = this.state
        return (
            <div className="container">
                {
                    !user ?
                        <LoginFormForDeliveryAgent socket={socket} setUser={this.setUser} />
                        :
                        <ChatContainer socket={socket} user={user} logout={this.logout}/>
                }
            </div>
        );
    }
}