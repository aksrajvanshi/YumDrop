import React, { Component } from 'react';
import LayoutForRestaurant from "./LayoutForRestaurant";
import './index.css';
import {connect} from "react-redux";

class chatFeatureForRestaurant extends Component {
    render() {
        return (
            <div>

                <LayoutForRestaurant />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        restaurantId: state.userId,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (chatFeatureForRestaurant);
