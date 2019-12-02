import React, { Component } from "react";
import './MySettingsPage.css';
import {connect} from "react-redux";
import './LoginDashBoardCSS.css';
import StripeCheckout from "react-stripe-checkout";

function handleToken(token){
    console.log(token)
}
const mapStateToProps = (state)=>{
    return {
        userEmailId: state.userId
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}

class MyCart extends React.Component{
    state = {
        dishesForUserDisplay: [],
        dataReceived: [],
        userName: "",
        userEmailId:  "",
        userPhoneNumber: "",
        email: "",
        brand: "",
        country: "",
        cvc_check: "",
        exp_month: "",
        funding: "",
        last4: ""
    }


    componentWillMount() {

            let currentComponent = this;
            fetch('/getUserDataForMyCart',{
                method: 'POST',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    userEmail: this.props.userEmailId,})})
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

    returnToLoginDahboard = () => {
        this.props.history.push('/errorPageForRegistration');
    }
    forwardToMyCurrentLocation = () => {
        this.props.history.push('/MyCurrentLocation');
    }

    forwardToPaymentPage = () => {
        this.props.history.push('/paymentSystemForUsers')
    }


    forwardToSettingsAddresses = () => {
        this.props.history.push('/UserSettingsPageAddresses')
    }

    settingsPage = () => {
        this.props.history.push('/MySettingsPage')
    }

    goBackToLoginDashboard = () => {
        this.props.history.push('/LoginDashboard')
    }

    c

    forwardToMyOrdersPage = () => {
        this.props.history.push('/MyOderListSettings')
    }

    handleTokenAPI = (token) => {
        console.log("Insdie this");
        console.log(token.email);
        console.log("Later");
        console.log(token.card.brand);
        console.log(token.card.country);
        console.log(token.card.cvc_check);
        console.log(token.card.exp_month);
        console.log(token.card.exp_year);
        console.log(token.card.funding);
        console.log(token.card.last4);
        this.setState({
            email: token.email,
            brand: token.card.brand,
            country: token.country,
            cvc_check: token.card.cvc_check,
            exp_month: token.card.exp_month,
            funding: token.card.funding,
            last4: token.card.last4
        })
        console.log("End")
        this.sendCardDetailsForPayment();
    }

    sendCardDetailsForPayment = () => {
        fetch('/payForUserCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: this.props.userEmailId,
                email: this.state.email,
                brand: this.state.brand,
                country: this.state.country,
                cvc_check: this.state.cvc_check,
                exp_month: this.state.exp_month,
                funding: this.state.funding,
                last4: this.state.last4
            }),
        }).then(res => {
            if (res.status===200){
                this.forwardToMyOrdersPage();
            }
            else{
                alert("Invalid Card details");
            }
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

                    <td data-th="Price">{d.dishPrice}</td>



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

                            <th id="dishDisplayTable">Dish Price</th>

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

                            <td colSpan="2" className="hidden-xs">Clear Cart</td>
                            <div className="container">
                                <div className="rounded-circle">

                                    <StripeCheckout stripeKey="pk_live_qksmj6ho2DblvlfR5PNKgzea00zC51Ydfw"
                                                    amount={this.state.totalPrice}
                                                    token={this.handleTokenAPI}
                                                    name={this.state.restaurantName}


                                    />
                                </div>
                            </div>
                        </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);




