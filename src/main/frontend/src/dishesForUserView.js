import React from "react";
import {connect} from "react-redux";


class dishesForUserView extends React.Component{
    state = {
        dishesForUserDisplay: []
    }


    componentWillMount() {
        let currentComponent = this;
        console.log(this.props.restaurantId);
        console.log(this.props.emailId);
        fetch('/getAllRestaurantDishes',{
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                restaurantId: "abc12",})})
            .then(res => {
                console.log(res)
                return res.json()
            }).then(response => {
            currentComponent.setState({
                dishesForUserDisplay: response
            })
            console.log(response)})
    }


    forwardToSettingsPage = () => {
        this.props.history.push('/MySettingsPage');
    }

    forwardToMyCart = () => {
        this.props.history.push('/MyCart')
    }

    onClick= (event) => {
        this.forwardToSettingsPage();
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    handleClick(item) {
        console.log(item);
        let currentComponent = this;
        fetch('/addDishToUserCart',{
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userEmailId: this.props.userEmailId,
                dishName: item.dishName,
                restaurantId: "abc12",
                dishPrice : item.dishPrice,
                dishQuantity : item.dishQuantity
            })})
            .then(res => {
                console.log(res)
                return res.json()
            })
    }

    render() {
        let mapDishesForUserView = this.state.dishesForUserDisplay.map((d,itemName)=>
        {
            return(

                <tr key={itemName}>
                    <td><img src="http://placehold.it/100x100" alt="..."
                             className="img-responsive"/></td>
                    <td>{d.dishName}</td>
                    <td>{d.dishDescription}
                    </td>
                    <td>{d.dishPrice}</td>
                    <td className="td-actions">

                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <a href="#" className="btn btn-success btn-product"><span
                                className="glyphicon glyphicon-shopping-cart" onClick={this.handleClick.bind(this, d)}></span> Add to Cart</a>
                        </div>
                    </td>
                </tr>





            )
        })
        return(
            <div>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#">YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.forwardToMyCart}><i
                                            className="fa fa-fw "/>Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"  onClick={this.onClick} ><span>Settings</span></a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <head>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                        <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
                        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                </head>
                <br/>
                <br/>
                <br/>
                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
                <div className="span7">
                    <div className="widget stacked widget-table action-table">
                        <div className="widget-header">
                            <i className="icon-th-list"></i>
                            <h3>Dishes</h3>
                        </div>
                        <div className="widget-content">

                            <table className="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>Dish Image</th>
                                    <th>Dish Name</th>
                                    <th>Dish Description</th>
                                    <th>Dish Price</th>
                                    <th id="dishDisplayTable">Add to Cart</th>
                                    <th className="td-actions"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {mapDishesForUserView}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <tr className="visible-xs">
                                        <td className="text-center"><strong></strong></td>

                                    </tr>
                                </tr>
                                <tr>
                                    <td><a href="#" className="btn btn-warning"><i
                                        className="fa fa-angle-left"></i>Home Page</a></td>

                                    <td colSpan="2" className="hidden-xs"></td>
                                    <td><a
                                        className="btn btn-success btn-block" onClick={this.forwardToMyCart}>My Cart <i className="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>

                        </div>

                    </div>
                </div>




            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        emailId: state.userId,
        restaurantId: state.userSelectedRestaurant
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dishesForUserView);