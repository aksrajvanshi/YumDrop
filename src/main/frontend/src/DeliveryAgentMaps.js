/*global google*/
import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
import './DeliveryAgentDashboard'

class DeliveryAgentMaps extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        fromA : this.props.from,
        toB : this.props.to
    };


    render() {
        const DirectionsComponent = compose(
            withProps({
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCTauVKI3dyYkyA3a7Xq9xUZ3LxXBFZzKE",
                loadingElement: <div style={{ height: `400px` }} />,
                containerElement: <div style={{ width: `90%` }} />,
                mapElement: <div style={{height: `600px`, width: `600px` }}  />,
            }),
            withScriptjs,
            withGoogleMap,
            lifecycle({
                componentDidMount() {
                    const DirectionsService = new google.maps.DirectionsService();
                    DirectionsService.route({
                        origin: {this:this.state.fromA}.toString(),
                        destination: '700 N Woodlawn Ave, Bloomington, IN 47408',
                        travelMode: google.maps.TravelMode.DRIVING,
                    }, (result, status) => {
                        if (status === google.maps.DirectionsStatus.OK) {
                            this.setState({
                                directions: {...result},
                                markers: true
                            })
                        } else {
                            console.error(`error fetching directions ${result}`);
                        }
                    });
                }
            })
        )(props =>
            <GoogleMap
                defaultZoom={16}
                initialCenter={{lat:39.166559, lng:-86.526801}}
            >
                {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
            </GoogleMap>
        );
        return (
            <DirectionsComponent
            />
        )
    }
}
export default DeliveryAgentMaps;