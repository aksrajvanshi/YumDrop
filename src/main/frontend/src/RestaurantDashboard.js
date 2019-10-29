import React, {Component} from "react";

class RestaurantDashboard extends Component{
    state = {
        data: [
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine","itemCost": "4$", "itemAvailability": "Available"},
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine","itemCost": "4$", "itemAvailability": "Available"},
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine", "itemCost": "4$", "itemAvailability": "Available"},
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine", "itemCost": "4$", "itemAvailability": "Available"},
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine", "itemCost": "4$", "itemAvailability": "Available"},
            {"itemName": "item1", "itemDescription": "item1", "itemCuisine":"itemCuisine", "itemCost": "4$", "itemAvailability": "Available"},
        ]
}

    forwardToAddingAnItem = () => {
        this.props.history.push("/AddItemToMenu");
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
                            <a className="navbar-brand " href="#">YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="upper-links dropdown"><a className="links" onClick={this.returnToLoginDahboard}
                                    >Home</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="profile-links"
                                            >My Account</a></li>
                                            <li className="profile-li"><a>My Orders</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="cart largenav col-sm-2">
                                            <a className="cart-button">
                                                <svg className="cart-svg " width="16 " height="16 " viewBox="0 0 16 16 ">
                                                    <path
                                                        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 "
                                                        fill="#fff "></path>
                                                </svg>
                                                My Cart
                                            </a>
                                        </div>
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

export default RestaurantDashboard