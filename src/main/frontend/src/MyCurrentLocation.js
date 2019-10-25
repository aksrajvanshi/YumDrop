import React, { Component } from 'react'

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
    }




    render() {
        return (
            <div>
                <button onClick={this.position} className='Filter'>Filter</button>
            </div>
        );
    }
}

export default MyCurrentLocation;