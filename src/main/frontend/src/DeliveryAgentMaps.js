/*global google*/
import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
import './DeliveryAgentDashboard'
import {connect} from "react-redux";
class DeliveryAgentMaps extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        from: "",
        to: ""
    }

    componentWillMount()
     { debugger;

     let currentComponent = this

    }
    render() {

        console.log(this.props.to)
        console.log(this.props.from)
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

                let currentComponent = this;
                    fetch('/getActiveDeliveryOrderForDeliveryAgent', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body:JSON.stringify({
                            deliveryAgentEmail : "mkammili@iu.edu"
                        }),
                    }).then(res => {
                        console.log(res)
                        return res.json();
                        console.log(res)
                    }).then( data => {
                        console.log(data)
                        console.log(data[0].restaurantAddress)
                        console.log(data[0].userAddress)
                        currentComponent.setState({from: data[0].restaurantAddress, to: data[0].userAddress, restaurant: data[0].restaurantName})
                        console.log("After set state")
                    const DirectionsService = new google.maps.DirectionsService();
                    DirectionsService.route({
                        origin: data[0].restaurantAddress,
                        destination: data[0].userAddress,
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
                console.log("Before ending")
                    console.log(data[0].userAddress)})}
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
const mapStateToProps = (state)=> {
    return {
        from: state.from,
        to:  state.to
    }
}


export default connect(mapStateToProps) (DeliveryAgentMaps);