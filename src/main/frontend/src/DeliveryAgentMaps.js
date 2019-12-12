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
    forwardToChatFeature = () => {
        this.props.history.push('/chatFeature')
    }

    forwardToDeliveryAgentSettingsPage = () => {
        this.props.history.push('/DeliveryAgentSettingsPage')
    }

    forwardToDeliveryAgentMaps = () => {
        this.props.history.push("/DeliveryAgentMaps")
    }

    forwardToLogiDashboard = () => {
        this.props.history.push("/DeliveryAgentDashboard");
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
            <div>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <script src="http://maps.google.com/maps/api/js?key=AIzaSyCTauVKI3dyYkyA3a7Xq9xUZ3LxXBFZzKE"></script>
                    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#" onClick={this.forwardToLogiDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item" >
                                        <a className="nav-link" onClick={this.forwardToDeliveryAgentSettingsPage}><i
                                            className="fa fa-fw fa-user"></i>Settings</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            <DirectionsComponent
            />
            </div>
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