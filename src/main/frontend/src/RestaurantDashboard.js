import React, {Component} from "react";
import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return {
        restaurantPrimaryEmailId: state.restaurantPrimaryEmailId
    }
};
class RestaurantDashboard extends Component{
    state = {
        Name: "",
        data: [
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine","itemCost": "4$", "itemAvailability": "Available"},
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine","itemCost": "4$", "itemAvailability": "Available"},
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine", "itemCost": "4$", "itemAvailability": "Available"},
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine", "itemCost": "4$", "itemAvailability": "Available"},
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine", "itemCost": "4$", "itemAvailability": "Available"},
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine", "itemCost": "4$", "itemAvailability": "Available"},
        ]
}
    componentWillMount() {
        this.setState( {
            Name: this.props.restaurantPrimaryEmailId
            }

        )
    }

    forwardToAddingAnItem = () => {
        this.props.history.push("/RestaurantAddMenuForm");
    }

    forwardToRestaurantSettingsPage = () => {
        this.props.history.push("/RestaurantSettingsPage");
    }

    forwardToLogiDashboard = () => {
        this.props.history.push("/RestaurantDashboard");
    }
    render() {

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
                                    <li className="upper-links  text-white"><button className="btn-group-lg btn-dark" onClick={this.forwardToRestaurantSettingsPage}
                                    >My Account Settings</button>

                                    </li>


                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <p>chuck</p>
                <p>{this.state.Name}</p>
                <p>hey</p>
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


                                    {this.state.data.map(function(d,itemName,itemDescription,itemCost,itemAvailability){
                                        return (
                                            <tr>
                                                <td className="col-md-6">
                                                    <h4><a href="#" key={itemName}>{d.itemName}</a></h4>

                                                </td>
                                                <td className="col-md-5"><h5>{d.itemDescription}</h5>
                                                    <span>Vegetarian</span><br/><span><strong>{d.itemCuisine}</strong></span></td>
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

export default (RestaurantDashboard);