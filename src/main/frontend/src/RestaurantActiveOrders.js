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
        chatReqest: false,
        activeOrdersForRestaurantDisplay: [],
        errorSelect: false
    }

    goToChatFeature = () => {
        this.props.history.push('/chatFeatureForRestaurant')
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
        }).then(response => {
            currentComponent.setState({
                activeOrdersForRestaurantDisplay: response
            })
            console.log(response)})
        .then(res => {
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
                    chatReqest: false
                })

            }

        })
        })
    }

    handleClick(item){
        console.log("Inside handle click")
        fetch('/changeOrderStatusFromRestaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantId: this.props.restaurantId,
                orderId: item.orderId,
                orderStatus: 2
            }),
        }).then(res =>{
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
                }).then(response => {
                    this.setState({
                        activeOrdersForRestaurantDisplay: response
                    })
                    console.log(response)})
                    .then(res => {
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
                                    chatReqest: false
                                })

                            }

                        })
                    })
            }
            )}

    goBackToRestaurantDashboard = () => {
        this.props.history.push('/RestaurantDashboard')
    }

    render(){

        let mapactiveOrdersForRestaurantDisplay = this.state.activeOrdersForRestaurantDisplay.map((d,itemName)=>
        {
            return(

                <tr key={itemName}>

                    <td>{d.userEmail}</td>
                    <td>{d.orderId}</td>
                    <td>{d.orderContents}</td>
                    <td>{d.orderPrice}</td>
                    <td className="actions" data-th="">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <button id={itemName} key={itemName} onClick={this.handleClick.bind(this,d)} >Add item</button>
                        </div>
                    </td>

                </tr>
            )
        })
    return (
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

                                <li className="nav-item">
                                    <a className="nav-link"><i
                                        className="fa fa-fw fa-user" onClick={this.goBackToRestaurantDashboard}/>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><i
                                        className="fa fa-fw fa-user"/>Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"   onClick={this.goToRestaurantSettingsPage} ><span>Settings</span></a>
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
                                        <button onClick={this.goBackToRestaurantDashboard} type="submit"
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

            <br/><br/><br/>

            <div className="span7" id="restaurantViewOfActiveOrders">
                <div className="widget stacked widget-table action-table">
                    <div className="widget-header">
                        <i className="icon-th-list"></i>
                        <h3>Customer Details and Order Details</h3>
                    </div>
                    <div className="widget-content">

                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Order Id</th>
                                <th>Dishes</th>
                                <th>Total Price</th>
                                <th>Order status</th>

                            </tr>
                            </thead>
                            <tbody>
                            {mapactiveOrdersForRestaurantDisplay}
                            </tbody>
                            <tfoot>
                            <td></td>
                            <td></td>

                            </tfoot>
                        </table>

                    </div>

                </div>
            </div>
        </div>)
    }
}

export default  connect(mapStateToProps)(RestaurantActiveOrders);