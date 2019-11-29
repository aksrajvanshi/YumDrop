import React, {Component} from "react";
import {connect} from "react-redux";

class RestaurantSettingsPage extends Component {
    state = {
        data: [],
        restaurantName: "",
        restaurantPrimaryEmailId: "",
        primaryPhoneNumber: ""
    }
    returnToLoginDahboard = () => {
        this.props.history.push('/RestaurantDashboard');
    }
    forwardToMyCurrentLocation = () => {
        this.props.history.push('/MyCurrentLocation');
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    goBackToRestaurantDashboard = () => {
        this.props.history.push('/RestaurantDashboard');
}

    forwardToAddressPage = () => {
        this.props.history.push('/restaurantAddressesPage')
    }

    goToRestaurantSettingsPage = () => {
        this.props.history.push('/RestaurantSettingsPage');
    }

    forwardToResetpassword = () => {
        this.props.history.push('/RestaurantResetpassword');
    }

    componentDidMount() {
        let currentComponent = this;
        console.log(currentComponent.props.restaurantId);
        console.log(this.props.restaurantId);
        console.log(currentComponent.props.restaurantId)
        fetch('/getRestaurantDataForDashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantId: currentComponent.props.restaurantId
            }),
        }).then(function(response) {
            console.log("returned");
            console.log(response);
            return response.json();
        }).then(function(data) {
            console.log(data);
            console.log(data.restaurantId, data.restaurantName);
            const userName = data.userName;
            console.log("Will mount username", userName);
            currentComponent.setState({
                restaurantName: data.restaurantName,
                restaurantPrimaryEmailId: data.restaurantPrimaryEmailId,
                primaryPhoneNumber: data.primaryPhoneNumber
            });
            console.log(currentComponent.state.userName);
        })
    }
    render() {
        if(this.props.restaurantId === null) {
            this.props.history.push('/')
        }
        return(

            <div>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#" onClick={this.goBackToRestaurantDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="upper-links"><a className="links text-white" onClick={this.returnToLoginDahboard}
                                    >Home</a>

                                    </li>

                                    <li className="upper-links"><a className="links text-white" onClick={this.goToRestaurantSettingsPage}
                                    >My Settings</a>

                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Sign Out</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4 pb-5">

                            <div className="author-card pb-3">
                                <div className="author-card-cover"
                                >
                                </div>
                                <div className="author-card-profile">
                                    <div className="author-card-avatar"><img
                                        src="https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg" />
                                    </div>

                                </div>
                            </div>
                            <div className="wizard">
                                <nav className="list-group list-group-flush">
                                    <a className="list-group-item" href="#">

                                    </a><a className="list-group-item active" href="#"><i
                                    className="fe-icon-user text-muted"></i>Restaurant Profile Settings</a>
                                    <a
                                        className="list-group-item" href="#" onClick={this.forwardToAddressPage}><i className="fe-icon-map-pin text-muted"></i>Address</a>
                                    <a
                                        className="list-group-item" href="#" onClick={this.forwardToResetpassword}><i className="fe-icon-map-pin text-muted"></i>Reset Password</a>

                                </nav>
                            </div>
                        </div>

                        <div className="col-lg-8 pb-5">
                            <form className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account-fn">Restaurant Name</label>
                                        <input className="form-control" type="text" id="account-fn" placeholder={this.state.restaurantName}
                                               required=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account-ln">Manager Name</label>
                                        <input className="form-control" type="text" id="account-ln"
                                               required=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account-email">E-mail Address</label>
                                        <input className="form-control" type="email" id="account-email" placeholder={this.state.restaurantPrimaryEmailId}
                                               disabled=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account-phone">Phone Number</label>
                                        <input className="form-control" type="text" id="account-phone" placeholder={this.state.primaryPhoneNumber}
                                               required=""/>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <hr className="mt-2 mb-3"/>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="custom-control custom-checkbox d-block">
                                            <input className="custom-control-input" type="checkbox"
                                                   id="subscribe_me" checked=""/>

                                        </div>
                                        <button className="btn btn-style-1 btn-primary" type="button" data-toast=""
                                                data-toast-position="topRight" data-toast-type="success"
                                                data-toast-icon="fe-icon-check-circle" data-toast-title="Success!"
                                                data-toast-message="Your profile updated successfuly.">Update
                                            Profile
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}
const mapStateToProps = (state) => {
    return {
        restaurantId: state.userId,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantSettingsPage);