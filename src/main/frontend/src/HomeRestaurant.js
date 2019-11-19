import React, { Component } from 'react';
import Map from "./Map";
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return {
        latitude: state.latitude ? state.latitude : 39.166592,
        longitude: state.longitude ? state.longitude : -86.534889
    }
}

class HomeRestaurant extends Component{
    render() {
        return(
            <div style={{ margin: '100px' }}>
                <Map
                    google={this.props.google}
                    center={{lat: this.props.latitude, lng: this.props.longitude}}
                    height='200px'
                    zoom={15}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(HomeRestaurant);