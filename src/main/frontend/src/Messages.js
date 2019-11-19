import React from 'react';

class Messages extends React.Component{
    render() {
        const { messages, user, typingUsers} = this.props;
        return(
            <div ref='container'
            className="thread-container">
                {console.log(messages)}
                {console.log(messages.id)}
                {console.log(messages.sender)}

            </div>
        )
    }
}

export default Messages