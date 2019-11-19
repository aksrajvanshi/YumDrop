import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import {connect} from 'react-redux';
import Geocode from "react-geocode";
import {withRouter} from 'react-router-dom';


Geocode.setApiKey("AIzaSyDg4eNu1SvJEk9t7kzG5CKbTjh_lb8dt_M");

Geocode.enableDebug();


class Map extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            address: '',
            userEmailId: this.props.userEmail,
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            }
        }
    }
    goBackToLoginDashboard = () => {
        if(this.props.accountType === "user") {
            this.props.history.push('/LoginDashboard')
        }
        else if(this.props.accountType === "restaurant") {
            this.props.history.push('/RestaurantDashboard')
        }
    }

    submitAddress = () => { debugger;
    let currentComponent = this;
    if (this.props.accountType === "user"){
        fetch('/saveUserAddress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userAddress: this.state.address,
                userEmail: this.state.userEmailId
            }),
        }).then(res => {
            if (res.status !== 200) {
                alert("Hey going to Error page");
            }else {
                alert("Successfully added address");
                this.goBackToLoginDashboard();
            }
        })

    }else{
        fetch('/saveRestaurantAddress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantId: this.state.userEmailId,
                restaurantAddress: this.state.address
            }),
        }).then(res => {
            if (res.status !== 200) {
                alert("Hey going to Error page");
            }else {
                alert("Successfully added address");
                this.goBackToLoginDashboard();
            }
        })
    }
    }

    componentDidMount() {
        Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray =  response.results[0].address_components,
                    city = this.getCity( addressArray ),
                    area = this.getArea( addressArray ),
                    state = this.getState( addressArray );

                console.log( 'city', city, area, state );

                this.setState( {
                    address: ( address ) ? address : '',
                    area: ( area ) ? area : '',
                    city: ( city ) ? city : '',
                    state: ( state ) ? state : '',
                } )
            },
            error => {
                console.error(error);
            }
        );
    };

    shouldComponentUpdate( nextProps, nextState ){
        if (
            this.state.markerPosition.lat !== this.props.center.lat ||
            this.state.address !== nextState.address ||
            this.state.city !== nextState.city ||
            this.state.area !== nextState.area ||
            this.state.state !== nextState.state
        ) {
            return true
        } else if ( this.props.center.lat === nextProps.center.lat ){
            return false
        }
    }

    getCity = ( addressArray ) => {
        let city = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
                city = addressArray[ i ].long_name;
                return city;
            }
        }
    };

    getArea = ( addressArray ) => {
        let area = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            if ( addressArray[ i ].types[0]  ) {
                for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
                    if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
                        area = addressArray[ i ].long_name;
                        return area;
                    }
                }
            }
        }
    };

    getState = ( addressArray ) => {
        let state = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            for( let i = 0; i < addressArray.length; i++ ) {
                if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
                    state = addressArray[ i ].long_name;
                    return state;
                }
            }
        }
    };

    onChange = ( event ) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onInfoWindowClose = ( event ) => {
    };

    onMarkerDragEnd = ( event ) => {
        console.log( 'event', event );
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng(),
            addressArray = [];
        Geocode.fromLatLng( newLat , newLng ).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray =  response.results[0].address_components,
                    city = this.getCity( addressArray ),
                    area = this.getArea( addressArray ),
                    state = this.getState( addressArray );
                this.setState( {
                    address: ( address ) ? address : '',
                    area: ( area ) ? area : '',
                    city: ( city ) ? city : '',
                    state: ( state ) ? state : ''
                } )
            },
            error => {
                console.error(error);
            }
        );
    };

    onMarkerDragEnd = ( event ) => {
        console.log( 'event', event );
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng(),
            addressArray = [];
        Geocode.fromLatLng( newLat , newLng ).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray =  response.results[0].address_components,
                    city = this.getCity( addressArray ),
                    area = this.getArea( addressArray ),
                    state = this.getState( addressArray );
                this.setState( {
                    address: ( address ) ? address : '',
                    area: ( area ) ? area : '',
                    city: ( city ) ? city : '',
                    state: ( state ) ? state : ''
                } )
            },
            error => {
                console.error(error);
            }
        );
    };

    render(){
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap google={this.props.google}
                               defaultZoom={this.props.zoom}
                               defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                    >
                        {/* InfoWindow on top of marker */}
                        <InfoWindow
                            onClose={this.onInfoWindowClose}
                            position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
                        >
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{ this.state.address }</span>
                            </div>
                        </InfoWindow>
                        {/*Marker*/}
                        <Marker google={this.props.google}
                                name={'Dolores park'}
                                draggable={true}
                                onDragEnd={ this.onMarkerDragEnd }
                                position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                        />
                        <Marker />
                    </GoogleMap>
                )
            )
        );
        let map;
        if( this.props.center.lat !== undefined ) {
            map = <div>
                <div>
                    <div className="form-group">
                        <label htmlFor="">Address</label>
                        <input type="text" name="address" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.address }/>
                    </div>
                    <button className="btn btn-success" onClick={this.submitAddress.bind(this)}>Submit</button><br/><br/>
                </div>

                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.props.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
            </div>
        } else {
            map = <div style={{height: this.props.height}} />
        }
        return( map )
    }
}

const mapStateToProps = (state) => {
    return {
        userEmail: state.userId,
        accountType: state.accountType,
    }
};

export default withRouter(connect(mapStateToProps) (Map));