import React from "react";
import {connect} from "react-redux";


class dishesForUserView extends React.Component{
    state = {
        dishesForUserDisplay: []
    }


    componentWillMount() {
        let currentComponent = this;
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
        console.log(this.state.data)
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
        fetch('/addItemToMyCart',{
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userEmailId: this.props.userEmailId,
                dishName: item.dishName,
                restaurantId: "abc12",})})
            .then(res => {
                console.log(res)
                return res.json()
            })
    }

    render() {
        let mapDishesForUserView = this.state.dishesForUserDisplay.map((d,itemName)=>
        {
            return(
                <tr>
                    <td data-th="Product" key={itemName}>
                        <div className="row">
                            <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..."
                                                                     className="img-responsive"/></div>

                        </div>
                    </td>
                    <td><div className="col-sm-10">
                        <h4 className="nomargin">{d.dishName}</h4>

                    </div></td>
                    <td> <div className="col-sm-10"> <p>{d.dishDescription}</p></div></td>
                    <td data-th="Price">{d.dishPrice}</td>


                    <td className="actions" data-th="">
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
                <div className="container">
                    <table id="cart" className="table table-hover table-condensed">
                        <thead>
                        <tr>
                            <th id="dishDisplayTable">Dish Image</th>
                            <th id="dishDisplayTable" >Dish Name</th>
                            <th id="dishDisplayTable" > Dish description </th>
                            <th id="dishDisplayTable">Dish Price</th>
                            <th id="dishDisplayTable">Add to Cart</th>
                            <th id="dishDisplayTable"></th>
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
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        emailId: state.userId
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dishesForUserView);