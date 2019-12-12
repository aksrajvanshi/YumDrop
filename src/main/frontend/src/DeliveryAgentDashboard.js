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
        ActiveOrder: false
    }

    fetchAddresses = () => { debugger;
        fetch('/getActiveDeliveryOrderForDeliveryAgent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                deliveryAgentEmail : "mkammili@iu.edu"
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
                console.log(res)
                if (res.status !== 200){
                    this.setState({
                        noOrders: true
                    })
                }
                return res.json()
            }).then(res => {
                console.log(res)
            let x = JSON.stringify(res)
            return x;
        }).then(res => {
            console.log(res)
            currentComponent.setState({
                restaurantName: res.restaurantName,
                restaurantAddress: res.restaurantAddress,
                userName: res.userName,
                userAddress: res.userAddress,
                ActiveOrder: true
            })
        }).then(res=>{
            console.log(res)
            fetch('/checkForChatReuqestForDeliveryAgentFromUser',{
                method: 'POST',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    deliveryAgentEmailId: 1
                })})
                .then(res => {
                    if (res.status === 200){
                        this.setState({
                            chatRequest: true
                        })
                    }
                    return res.json()
                })
        })
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
                                        <a className="nav-link" onClick={this.signOut}>Logout</a>
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
                                            <th>Item Name</th>
                                            <th>Item Description</th>
                                            <th className="text-center">Cost</th>
                                            <th className="text-center">Availablity</th>
                                            <th className="text-center">Edit item</th>
                                            <th className="text-center">Delete item</th>
                                        </tr>
                                        </thead>
                                        <tbody>


                                        {this.state.data.map(function(d,itemName,itemDescription,itemCost,itemAvailability){
                                            return (
                                                <tr>
                                                    <td className="col-md-6">
                                                        <h4><a href="#" key={itemName}>{d.itemName}</a></h4>

                                                    </td>
                                                    <td className="col-md-5"><h5>{d.itemDescription}</h5>
                                                    </td>
                                                    <td className="col-md-4 text-center"><strong>{d.itemCost}</strong></td>
                                                    <td className="col-md-4 text-center"><strong>{d.itemAvailability}</strong></td>
                                                    <td className="col-md-8">
                                                        <button className="edit btn btn-success" title="Edit" data-toggle="tooltip"><i
                                                            className="material-icons"></i></button>
                                                    </td>
                                                    <td className="col-md-8">
                                                        <button className="delete btn btn-danger" title="Delete" data-toggle="tooltip"><i
                                                            className="material-icons"></i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        <br/><br/>
                                        <div className="col-md-12 offset-12">
                                            <button className="btn btn-success" onClick={this.forwardToAddingAnItem}>Add an item</button>

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
