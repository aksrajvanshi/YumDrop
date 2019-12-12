import React, { Component } from 'react';
import Map from "./Map";
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return {
        latitude: state.latitude ? state.latitude : 39.166592,
        longitude: state.longitude ? state.longitude : -86.534889
    }
}

class Home extends Component{
    render() {
        return(
            <div>  <header>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <nav className=" navbar navbar-expand-lg navbar-dark ">
                    <div className="container">
                        <a className="navbar-brand " href="#">YumDrop</a>
                        <div className="collapse navbar-collapse" id="navBarLinks">
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.forwardToMyCart}><i
                                        className="fa fa-fw fa-user"/>Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"  onClick={this.onClick} ><span>Settings</span></a>
                                </li>
                                <li>
                                    <a className="nav-link" onClick={this.signOut}>Sign Out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div style={{ margin: '100px' }}>
                <Map
                    google={this.props.google}
                    center={{lat: this.props.latitude, lng: this.props.longitude}}
                    height='400px'
                    width='400px'
                    zoom={15}
                />
            </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);