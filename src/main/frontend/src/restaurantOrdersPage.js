import React, {Component} from "react";
import {connect} from "react-redux";

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

class restaurantOrdersPage extends Component{
    state = {
        Name: "Restaurant 1",
        restaurantOrderDetails: []
    }
    componentDidMount() {
        let currentComponent = this;
        fetch('/getOrdersMadeForRestaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantId: this.props.restaurantId
            }),
        }).then(res => {
            return res.json();
        }).then(res=>{
            console.log("Response received")
            console.log(res)
            console.log(res.length)
            let x = [];
            for (let i=0; i<res.length;i++){
                x[i] = res[i].restaurantOrderDetails;
            }
            currentComponent.setState({
                restaurantOrderDetails: x
            })
            console.log(this.state.restaurantOrderDetails);
        })
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    forwardToRestaurantSettingsPage = () => {
        this.props.history.push("/RestaurantSettingsPage");
    }

    forwardToLogiDashboard = () => {
        this.props.history.push("/RestaurantDashboard");
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
                                        <a className="nav-link" onClick={this.forwardToRestaurantSettingsPage}><i
                                            className="fa fa-fw"></i>Settings</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <br/><br/><br/>


                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="panel panel-default">
                                <div className="panel-heading"><strong>Order Details</strong></div>
                                <div className="panel-body">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>Customer Name</th>
                                            <th>Items ordered</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {this.state.restaurantOrderDetails.map((item, index) =>{
                                            return (
                                                <tr>
                                                    <td className="col-md-6">
                                                        <h4><a href="#" key={index}>{item.customerName}</a></h4>

                                                    </td>
                                                    <td className="col-md-5"><h5>{item.itemOrdered}</h5>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        <br/><br/>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default restaurantOrdersPage