import React from 'react';

class MessagesInput extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            message: "",
            isTyping: false
        };
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.sendMessage()
        this.setState({message: ""})
    }
    sendMessage = () => {
        this.props.sendMessage(this.state.message)
    }

    render() {
        const {message} = this.props
        return(
            <div className="message-input">
               <form onSubmit={this.handleSubmit} className="message-form">
                   <input id="message"  ref={"messageinput"}         type="text"
                          className="form-control"
                          value={message}
                          placeholder="Please provide your issue"
                          onChange={
                              ({target})=>{
                                  this.setState({message: target.value})
                              }
                          }/>
                          <button
                              type="submit"
                              className="send">Send</button>
               </form>
            </div>
        )
    }
}

export default MessagesInput