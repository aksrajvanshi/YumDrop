import React, { Component } from "react";
import './LoginDashBoardCSS.css';
import './DeliveryAgentDashboardCSS.css';
import './DeliveryAgentMaps';

class DeliveryAgentDashboard extends Component{

    constructor(props){
        super(props)
    }

    state = {
        from : 's',
        to : 's'
    }

    fetchAddresses = () => { debugger;
        fetch('/getActiveDeliveryOrderForDeliveryAgent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantAddress:this.state.from,
                userAddress:this.state.to
            }),
        }).then(res => {

            if (res.status == 200) {
                this.setState({

                })


            }else {
              alert("ADDRESS FAILED");
            }
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

    forwardToSettingsPage = () => {
        this.props.history.push('/MySettingsPage');
    }

    forwardToDeliveryAgentMaps = () => {
        this.props.history.push("/DeliveryAgentMaps")
    }

    render() {

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


                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#">YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="upper-links dropdown"><a className="links"
                                    >Settings</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="profile-links" onClick={this.forwardToSettingsPage}
                                            >My Account</a></li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <body>
                    <div>
                        <h2>Delivery Orders</h2>
                    </div>
                    {this.fetchAddresses}
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-2">
                                <div class="productbox">
                                    <img src="https://thekatynews.com/wp-content/uploads/2017/06/mcdonalds-logo.jpg" class="img-responsive"/>
                                    <div class="producttitle">Pickup at </div>
                                    <p class="text-justify" onLoad={this.handleFromAddressChange} >{this.state.from}</p>
                                    <div>Deliver at </div>
                                    <p onLoad={this.handleToAddressChange} >{this.state.to}</p>
                                    <br/>
                                    <button onClick={this.forwardToDeliveryAgentMaps} className="btn btn-style-1 btn-primary" type="button">Show Path
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </body>
            </div>

        );
    }

}
export default DeliveryAgentDashboard;