import React, { Component } from "react";
import './LoginDashBoardCSS.css';
import './DeliveryAgentDashboardCSS.css';
import connect from "react-redux/lib/connect/connect";
import {Modal} from "react-bootstrap";
import './DeliveryAgentMaps';




class DeliveryAgentDashboard extends Component{

    state = {
        Name: "",
        deliveryAgentEmailId: "",
        data: [],
        restaurantName: "",
        restaurantAddress: "",
        userName: "",
        userAddress: "",
        noOrders: false,
        chatRequest: false,
        ActiveOrder: false,
        activeOrdersForRestaurantDisplay: []
    }

    closeAllOptionsOfSelectionForm = () => {
        this.setState({
            chatRequest: false,
            ActiveOrder: false,
            noOrders: false
        })
    }


    fetchAddresses = () => { debugger;
        fetch('/getActiveDeliveryOrderForDeliveryAgent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                deliveryAgentEmail : "maithreyi.prabhu95@gmail.com"
            }),
        }).then(res => {
            console.log(res)
            return res.json();

            console.log(res)
        }).then( data => {
            console.log(data)
            this.setState({from: data[0].restaurantAddress, to: data[0].userAddress, restaurant: data[0].restaurantName})
        })
    }

    handleFromAddressChange = (event) => {
        this.setState({
            from: event.target.value,
        });
    };

    handleToAddressChange = (event) => {
        this.setState({
            to: event.target.value,
        });
    };



    componentWillMount() {
        let currentComponent = this;

        fetch('/getActiveDeliveryOrderForDeliveryAgent',{
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                deliveryAgentEmailId: "mkammili@iu.edu"
            })})
            .then(res => {
                if (res.status !== 200){
                    this.setState({
                        errorSelect: true
                    })
                }
                return res.json();
            }).then(response => {
            console.log("Entereed")

            currentComponent.setState({
                activeOrderForUserDisplay: response,
                ActiveOrder: true
            })})
    }

    handleForwardChat(){
        this.forwardToChatFeature()
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

    goToPublicPage = () => {
        this.props.history.push('/')
    }

    render() {
        if(this.props.restaurantId === null) {
            this.props.history.push('/')
        }

        let mapactiveOrdersForRestaurantDisplay = this.state.activeOrdersForRestaurantDisplay.map((d,itemName)=>
        {
            return(

                <tr key={itemName}>


                    <td>{d.orderId}</td>
                    <td>{d.restaurantName}</td>
                    <td>{d.userName}</td>
                    <td>{d.restaurantAddress}</td>
                    <td>{d.userAddress}</td>
                    <td><button className="btn btn-outline-success" onClick={this.handleForwardChat(this,d)}>Chat with customer</button></td>

                </tr>
            )
        })




        return(
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
                                        <a className="nav-link" onClick={this.goToPublicPage}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 ">
                            <div className="input-group">

                                <input type="hidden" name="search_param" value="all" id="search_param"/>
                                <input type="text" className="form-control" name="x" placeholder="Search for an item..."/>
                                <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><span
                        className="glyphicon glyphicon-search"/></button>
                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="panel panel-default">
                                <div className="panel-heading"><strong>Active Order</strong></div>
                                <div className="panel-body">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>Order Id</th>
                                            <th>Restaurant Name</th>
                                            <th className="text-center">Restaurant Address</th>
                                            <th className="text-center">User Address</th>
                                            <th className="text-center">Navigate</th>

                                        </tr>
                                        </thead>
                                        <tbody>

                                        {mapactiveOrdersForRestaurantDisplay}

                                        <br/><br/>

                                        <button className="btn btn-outline-success" onClick={this.forwardToChatFeature}>Chat with customer</button>
                                        <div className="col-md-12 offset-12">
                                            <button className="btn btn-success" onClick={this.forwardToDeliveryAgentMaps}>Start Navigation</button>

                                        </div>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    show={this.state.ActiveOrder}
                    animation={false}
                    id="modal"
                    onHide={this.closeAllOptionsOfSelectionForm}
                >
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form>
                                        <h2 className="text-center">A new Order has been assigned to you</h2>
                                        <div className="form-group">
                                            <button onClick={this.forwardToDeliveryAgentMaps} type="submit"
                                                    className="btn btn-primary btn-lg btn-block login-btn">Please start navigation
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>


                <Modal
                    show={this.state.noOrders}
                    animation={false}
                    id="modal"
                    onHide={this.closeAllOptionsOfSelectionForm}
                >
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form>
                                        <h2 className="text-center">No orders have been assigned yet</h2>
                                        <div className="form-group">
                                            <button onClick={this.signOut} type="submit"
                                                    className="btn btn-primary btn-lg btn-block login-btn">Sign Out
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>

                <Modal
                    show={this.state.chatRequest}
                    animation={false}
                    id="modal"
                    onHide={this.closeAllOptionsOfSelectionForm}
                >
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <form>
                                        <h2 className="text-center">Customer has requested for support</h2>
                                        <div className="form-group">
                                            <button onClick={this.forwardToChatFeature} type="submit"
                                                    className="btn btn-primary btn-lg btn-block login-btn">Provide support
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>
            </div>

        )
    }
}


export default (DeliveryAgentDashboard);
