import React, { Component } from "react";
import "./RestaurantAddMenuForm.css";
import {connect} from "react-redux";
import {Modal} from "react-bootstrap";

const mapStateToProps = (state)=>{
    return {
        restaurantId: state.userId
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}

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
    returnToLoginDahboard = () => {
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
                            <button id={itemName} key={itemName} onClick={this.handleClick.bind(this,d)} >Order Processed</button>
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
                                <li className="upper-links"><a className="links text-white" onClick={this.returnToLoginDahboard}
                                >Home</a>

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

                                </a><a className="list-group-item " href="#"><i
                                className="fe-icon-user text-muted"></i>Restaurant Profile Settings</a>
                                <a
                                    className="list-group-item" href="#" onClick={this.forwardToAddressPage}><i className="fe-icon-map-pin text-muted"></i>Address</a>
                                <a
                                    className="list-group-item" href="#" onClick={this.forwardToResetpassword}><i className="fe-icon-map-pin text-muted"></i>Reset Password</a>
                                <a
                                    className="list-group-item active" href="#" onClick={this.forwardToActiveOrders}><i className="fe-icon-map-pin text-muted"></i>Active Orders</a>
                                <a className="list-group-item " href="#" onClick={this.goToChatFeature}><i className="fe-icon-map-pin text-muted"></i>Chat with Customer</a>

                            </nav>
                        </div>
                    </div>





                    <div className="col-lg-8 pb-5">
                        <form className="row">
                            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
                            <div className="container">

                                <div className="widget-content" id="activeOrdersTableForUser">

                                    <table className="table table-striped table-bordered">
                                        <thead>
                                        <tr>

                                            <th id="dishImageForActiveOrderUserView">Customer Details</th>
                                            <th id="dishNameForActiveOrderUserView">Order Id</th>
                                            <th id="dishPriceForActiveOrderUserView">Order Content</th>
                                            <th id="dishDescriptionForUserView">Total price</th>
                                            <th id="dishDescriptionForUserView">Order status</th>



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

                            </div></form>
            </div>
                </div>
            </div>
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
        </div>)
    }
}

export default  connect(mapStateToProps)(RestaurantActiveOrders);