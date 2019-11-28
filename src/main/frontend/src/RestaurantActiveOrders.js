import React, { Component } from "react";
import "./RestaurantAddMenuForm.css";
import {connect} from "react-redux";
import {Modal} from "react-bootstrap";

const mapStateToProps = (state)=>{
    return {
        restaurantId: state.userId
    }
};
class RestaurantActiveOrders extends React.Component{
    state = {
        userName: "",
        restaurantDishResults: [],
        chatReqest: true
    }

    goToChatFeature = () => {
        this.props.history.push('/chatFeature')
    }
    componentWillMount() {
        let currentComponent = this;
        fetch('/getCurrentActiveOrderForRestaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantId: this.props.restaurantId,
            }),
        }).then(res => {
            console.log("First response")
            if (res.status !== 200){
                this.setState({
                    errorSelect: true
                })
            }
            return res.json();
        }).then(res=>{
            console.log("Second Response received")
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
        }).then( res => {
        console.log(this.state.restaurantDishResults)
            console.log("Inside the fetch second one")
        fetch('/getCurrentActiveOrderUserDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantId: this.props.restaurantId,
            }),
        }).then(res => {
            console.log("Inside the fetch third one")
            if (res.status === 200){
                this.setState({
                    userName: res.userName
                })
                console.log(this.state.restaurantName)
            }
            else{
                console.log("Cant Chat")
            }
        })

    }).then(res => {
        console.log("fourth one")
        fetch('/checkForUserChatRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantId: this.props.restaurantId,
            }),
        }).then(res => {
            if (res.status === 200){
                this.setState({
                    chatReqest: true
                })

            }

        })
        })
    }

    render(){
    return (
        <div>
            <header>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
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

            <Modal
                show={this.state.chatReqest}
                animation={false}
                id="modal"
            >
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="login-form">
                                <form>
                                    <h2 className="text-center">Customer has requested for support</h2>
                                    <div className="form-group">
                                        <button onClick={this.goToChatFeature} type="submit"
                                                className="btn btn-primary btn-lg btn-block login-btn">support
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
                    <caption id="tableCaption" className="text-uppercase"><strong><h4>{this.state.userName}</h4></strong></caption>
                    <tr>

                        <th>Item Name</th>
                        <th>Cost</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.restaurantDishResults.map((item, index) =>{
                        return (
                            <tr>

                                <td>
                                    <h4><a href="#" key={index}>{item.dishName}</a></h4>
                                </td>

                                <td ><strong>{item.dishPrice}</strong></td>

                            </tr>
                        )
                    })}
                    <br/>


                    </tbody>
                </table>
            </div>
        </div>)
    }
}

export default  connect(mapStateToProps)(RestaurantActiveOrders);