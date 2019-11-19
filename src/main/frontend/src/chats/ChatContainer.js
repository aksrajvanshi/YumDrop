import React from "react";
import SideBar from './SideBar'
import {MESSAGE_SENT, MESSAGE_RECEIVED,TYPING,COMMUNITY_CHAT} from "../Events";
import ChatHeading from '../ChatHeading'
import Messages from "../Messages";
import MessageInput from "../MessagesInput";

class ChatContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            activeChat: null
        }
    }

    componentDidMount() {
        const { socket } = this.props
        socket.emit(COMMUNITY_CHAT, this.resetChat)
    }

    setActiveChat = (activeChat) => {
        this.setState({
            activeChat
        })
    }

    sendMessage = (chatId, message) => {
        const { socket} = this.props
        socket.emit(MESSAGE_SENT, {chatId, message})
    }

    sendTyping = (chatId, isTyping) => {
        const { socket } = this.props
        socket.emit(TYPING, {chatId,isTyping})
    }

    resetChat = (chat) => {
        return this.addChat(chat, true)
    }

    addChat = (chat, reset) => {
        const { socket } = this.props
        const { chats } = this.state

        const { newChats } = reset ? [chat] : [...chats, chat]

        this.setState({
            chats: newChats
        })

        const messageEvent = `${MESSAGE_RECEIVED}-${chat.id}`
        const typingEvent = `${TYPING}-${chat.id}`

        socket.on(typingEvent)
        socket.on(messageEvent, this.addMessageToChat(chat.id))
    }

    addMessageToChat = (chatId) => {
        return message => {
            const {chats} = this.this.state
            let newChats = chats.map((chat) => {
              if (chat.id === chatId)
                  chat.messages.push(message)
                return chat
            })
            this.setState({
                chats: newChats
            })
        }
    }
    render() {
        const {user , logout} = this.props
        return(
            <div className="container">
                <SideBar
                    logout={logout}
                    chats = {this.state.chats}
                    user={user}
                    activeChat={this.state.activeChat}
                    setActiveChat={this.setActiveChat}/>
                    <div className="chat-room-container">
                        {
                            this.state.activeChat !== null ? (
                                <div className="chat-room">
                                    <ChatHeading
                                        name={this.state.activeChat.name}
                                    />
                                    <Messages
                                        messages={this.state.activeChat.messages}
                                        user = {user}
                                        typingUser={this.state.activeChat.typingUsers}
                                    />
                                    <MessageInput
                                        sendMessage={
                                            (message) => {
                                                this.sendMessage(this.state.activeChat.id, message)
                                            }
                                        }

                                        sendTyping = {
                                            (isTyping) => {
                                                this.sendTyping(this.state.activeChat.id, isTyping)
                                            }
                                        }
                                    />
                                </div>
                            ) :
                                <div className="chat-room choose">
                                    <h3></h3>
                                </div>
                        }
                    </div>
            </div>
        )
    }
}

export default ChatContainer