import React, { Component } from 'react';
import Map from "./Map";
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return {
        latitude: state.latitude,
        longitude: state.longitude
    }
}

class Home extends Component{
    render() {
        return(
            <div style={{ margin: '100px' }}>
                <Map
                    google={this.props.google}
                    center={{lat: this.props.latitude, lng: this.props.longitude}}
                    height='300px'
                    zoom={15}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);