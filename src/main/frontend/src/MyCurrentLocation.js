import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return {
        latitude: state.latitude,
        longitude: state.longitude
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setLocation(evt){
            dispatch({type: "setLocation", newLatitude: evt.latitude, newLongitude: evt.longitude});
        }
    }
}

class MyCurrentLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            err => console.log(err)
        );
        console.log(this.state.latitude)
        console.log(this.state.longitude)
    }

    position = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            err => console.log(err)
        );
        console.log(this.state.latitude)
        console.log(this.state.longitude)
        this.props.setLocation({latitude: this.state.latitude, longitude: this.state.longitude})
        this.props.history.push("/");
    }




    render() {
        return (
            <div>
                <button onClick={this.position} className='Filter'>Filter</button>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (MyCurrentLocation);