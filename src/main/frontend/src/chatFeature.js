import React, { Component } from 'react';
import Layout from './components/Layout'
import './index.css';
import {connect} from "react-redux";

class ChatFeature extends Component {
    render() {
        return (
            <div>

                <Layout />
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        userEmailId: state.userId
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ChatFeature);
