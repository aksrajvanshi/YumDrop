import React, { Component } from "react";
import './LoginDashBoardCSS.css';
import './DeliveryAgentDashboardCSS.css';
import './DeliveryAgentDashboard.js';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import {connect} from 'react-redux';
import Geocode from "react-geocode";
import {withRouter} from 'react-router-dom';

Geocode.setApiKey("AIzaSyCTauVKI3dyYkyA3a7Xq9xUZ3LxXBFZzKE");

Geocode.enableDebug();

class DeliveryAgentMaps extends Component{

    constructor(props) {
        super(props);
    }


    render(){
        return(
        <div>
            <header>
                <script src="http://maps.google.com/maps/api/js?key=AIzaSyCTauVKI3dyYkyA3a7Xq9xUZ3LxXBFZzKE"></script>
                <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
            </header>
            <div>
                <GoogleMap

                    google={this.props.google}
                    zoom={8}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                >
                    <Marker position={{lat: 48.00, lng: -122.00}}/>>
                </GoogleMap>
            </div>
        </div>
        );
    }

}
export default DeliveryAgentMaps;