import React, { Component } from "react";
import './MySettingsPage.css';
import {connect} from "react-redux";
import './LoginDashBoardCSS.css';
import {Modal} from "react-bootstrap";


const mapStateToProps = (state)=>{
    return {
        userEmailId: state.userId
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}


class MySettingsPage extends Component{
    state = {
        dataReceived: [],
        userName: "",
        userEmailId:  "",
        userPhoneNumber: "",
        restaurantName: "",
        restaurantDishResults: [],
        errorSelect: false,
        id: 1
    }
    returnToLoginDahboard = () => {
        this.props.history.push('/errorPageForRegistration');
    }
    forwardToMyCurrentLocation = () => {
        this.props.history.push('/MyCurrentLocation');
    }

    forwardToSettingsAddresses = () => {
        this.props.history.push('/UserSettingsPageAddresses')
    }

    settingsPage = () => {
        this.props.history.push('/MySettingsPage')
    }

    goBackToProfileSettingsPage = () => {
        this.props.history.push('/MySettingsPage')
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    goBackToLoginDashboard = () => {
        this.props.history.push('/LoginDashboard')
    }

    forwardToMyCart = () => {
        this.props.history.push('/MyCart')
    }

    goToActiveOrdersPage = () => {
        this.props.history.push('/ActiveOrders')
    }

    chatWithRestaurantAndDeliveryAgent = () => {
        let currentComponent = this;
        fetch('/chatWithRestaurantAndDeliveryAgent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: currentComponent.props.userEmailId
            }),
        }).then(res => {
            if (res.status === 200){
                this.goToChatFeature();
            }
            else{
                console.log("Cant Chat")
            }
        })
    }

    chatWithDeliveryAgent = () => {
        let currentComponent = this;
        fetch('/chatWithDeliveryAgentOnly', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: currentComponent.props.userEmailId
            }),
        }).then(res => {
            if (res.status === 200){
                this.goToChatFeature();
            }
            else{
                console.log("Cant Chat")
            }
        })
    }
    chatWithRestaurant = () => {
        let currentComponent = this;
        fetch('/chatWithRestaurantOnly', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: currentComponent.props.userEmailId
            }),
        }).then(res => {
            if (res.status === 200){
                this.chatWithRestaurant();
            }
            else{
                console.log("Cant Chat")
            }
        })
    }

    componentWillMount() {
        let currentComponent = this;
        fetch('/getCurrentActiveOrderForUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: currentComponent.props.userEmailId
            }),
        }).then(res => {
            if (res.status !== 200){
                this.setState({
                    errorSelect: true
                })
            }
            return res.json();
        }).then(res=>{
            console.log("Response received")
            console.log(res)
            console.log(res.length)
            let x = [];
            for (let i=0; i<res.length;i++){
                x[i] = res[i].DishDetails;
            }
            currentComponent.setState({
                restaurantDishResults: x
            })
            console.log(this.state.restaurantDishResults);
        })

        fetch('/getCurrentActiveOrderRestaurantDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: currentComponent.props.userEmailId
            }),
        }).then(res => {
            if (res.status === 200){
                this.setState({
                    restaurantName: this.state.restaurantName
                })
                console.log(this.state.restaurantName)
            }
            else{
                console.log("Cant Chat")
            }
        })
    }
    goToChatFeature = () => {
        this.props.history.push('/chatFeature')
    }


    render() {
        let trying = this.state.data;

        return (
            <div>
                <header>

                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>


                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#" onClick={this.goBackToLoginDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <a className="nav-link"><i
                                            className="fa fa-fw fa-user" onClick={this.goBackToLoginDashboard}/>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.forwardToMyCart}><i
                                            className="fa fa-fw fa-user"/>Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"   onClick={this.settingsPage} ><span>Settings</span></a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Sign Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>



                <Modal
                    show={this.state.errorSelect}
                    animation={false}
                    id="modal"
                >
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form>
                                        <h2 className="text-center">There are no Active Orders</h2>
                                        <div className="form-group">
                                            <button onClick={this.goBackToLoginDashboard} type="submit"
                                                    className="btn btn-primary btn-lg btn-block login-btn">Go to Home
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>

                <br/>
                <br/>
                <div className="container">

                    <table className="table">

                        <thead>
                        <caption id="tableCaption" className="text-uppercase"><strong><h4>{this.state.restaurantName}</h4></strong></caption>
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Cost</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                            {this.state.restaurantDishResults.map((item, index) =>{
                                return (
                                    <tr>
                                        <td>{this.state.id}</td>

                                        <td>
                                            <h4><a href="#" key={index}>{item.dishName}</a></h4>
                                        </td>

                                        <td ><strong>{item.dishPrice}</strong></td>

                                    </tr>
                                )
                            })}
<br/>
                            <div className="col-md-2 ">
                                <button className="btn btn-success" onClick={this.chatWithRestaurant}>chat With Restaurant</button>

                            </div>

                            <div className="col-md-2 ">
                                <button className="btn btn-success" onClick={this.chatWithDeliveryAgent}>chat With Delivery Agent</button>

                            </div>

                            <div className="col-md-4 ">
                                <button className="btn btn-success" onClick={this.chatWithRestaurantAndDeliveryAgent}>chat With Restaurant And Delivery Agent</button>

                            </div>

                        </tbody>
                    </table>
                </div>















                </div>

        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (MySettingsPage);