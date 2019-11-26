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

class RestaurantDashboard extends Component{
    state = {
        Name: "Restaurant 1",
        restaurantPrimaryEmailId: "Restaurant 1",
        restaurantDishResults: []
    }
    componentWillMount() {
        let currentComponent = this;
        fetch('/trying', {
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
                x[i] = res[i].DishDetails;
            }
            currentComponent.setState({
                restaurantDishResults: x
            })
            console.log(this.state.restaurantDishResults);
        })
    }

    updateDishDisplay() {
        let currentComponent = this;
        fetch('/trying', {
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
                x[i] = res[i].DishDetails;
            }
            currentComponent.setState({
                restaurantDishResults: x
            })
            console.log(this.state.restaurantDishResults);
        })
    }


    forwardToAddingAnItem = () => {
        this.props.history.push("/RestaurantAddMenuForm");
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    forwardToOrdersPage = () => {
        this.props.history.push('/restaurantOrdersPage')
    }

    forwardToRestaurantSettingsPage = () => {
        this.props.history.push("/RestaurantSettingsPage");
    }

    forwardToLogiDashboard = () => {
        this.props.history.push("/RestaurantDashboard");
    }

    editItem = (dishName) => {
        console.log("Inside this edit method")
        console.log(dishName)
    }

    deleteItem = (dishName) => {
        fetch('/deleteDish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantId: this.props.restaurantId,
                dishName: dishName,
            }),
        }).then(res=>{
            console.log(res.status)
            if (res.status === 200){
                console.log("Updating")
                this.updateDishDisplay();
            }
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
                                            className="fa fa-fw fa-user"></i>Settings</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Logout</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.forwardToOrdersPage}>Orders</a>
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
                                <div className="panel-heading"><strong>Menu</strong></div>
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

                                        {this.state.restaurantDishResults.map((item, index) =>{
                                            return (
                                                <tr>
                                                    <td className="col-md-6">
                                                        <h4><a href="#" key={index}>{item.dishName}</a></h4>

                                                    </td>
                                                    <td className="col-md-5"><h5>{item.dishDescription}</h5>
                                                        </td>
                                                    <td className="col-md-4 text-center"><strong>{item.dishPrice}</strong></td>
                                                    <td className="col-md-4 text-center"><strong>{item.dishAvailable}</strong></td>
                                                    <td className="col-md-8">
                                                        <button className="edit btn btn-success" title="Edit" data-toggle="tooltip"><i
                                                            className="material-icons" onClick={this.editItem(item.dishName)}></i></button>
                                                    </td>
                                                    <td className="col-md-8">
                                                        <button className="delete btn btn-danger" title="Delete" data-toggle="tooltip"><i
                                                            className="material-icons" onClick={this.deleteItem(item.dishName)}></i></button>
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
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantDashboard);