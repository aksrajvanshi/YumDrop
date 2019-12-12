import React, { Component } from "react";
import './MySettingsPage.css';
import {connect} from "react-redux";
import './LoginDashBoardCSS.css';
import StripeCheckout from "react-stripe-checkout";


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

function handleToken(token){
    console.log(token)
}
class MySettingsPage extends Component{
    state = {
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
        last4: "",
        totalPrice: 1,
        restaurantName: "mai",
        dishesForUserDisplay: [],
        scheduleDelivery: false,
        startDate: new Date(),
        time: '10:00',
        rating: 0,
        provideRatings: false,
        dishQuantity: 0

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

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    forwardToMyCart = () => {
        this.props.history.push('/MyCart')
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
                    userEmail: "maithreyi.prabhu95@gmail.com",})})
                .then(res => {
                    console.log(res)
                    return res.json()
                }).then(response => {
                currentComponent.setState({
                    dishesForUserDisplay: response
                })
                console.log(response)})
            console.log(currentComponent.state.data)

        }
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
        let trying = this.state.data;
        if(this.props.userEmailId === null) {
            this.props.history.push('/')
        }

        let mapDishesForUserView = this.state.dishesForUserDisplay.map((d,itemName)=>
        {
            return(
                <tr>
                    <td data-th="Product" key={itemName}>
                        <div className="row">
                            <div className="col-sm-2 hidden-xs"><img src="https://www.palmbeachillustrated.com/wp-content/uploads/sites/78/2019/08/Indianspread.jpg" alt="..."
                                                                     className="img-responsive"/></div>

                        </div>
                    </td>
                    <td><div className="col-sm-10">
                        <h4 className="nomargin">{d.dishName}</h4>

                    </div></td>
                    <td data-th="Price">{d.dishPrice}</td>


                    <td className="actions" data-th="">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <button id={itemName} key={itemName} value={d.dishQuantity} onClick={this.handleClick} >Add item</button>
                        </div>
                    </td>
                </tr>



            )
        })

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
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#" onClick={this.goBackToLoginDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <a className="nav-link"><i
                                            className="fa fa-fw fa-user" onClick={this.goBackToLoginDashboard}/>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"><i
                                            className="fa fa-fw fa-user"/>Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"   onClick={this.settingsPage} ><span>Settings</span></a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}> Sign Out </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4 pb-5">

                            <div className="author-card pb-3">
                                <div className="author-card-cover"
                                >
                                </div>
                                <div className="author-card-profile">
                                    <div className="author-card-avatar"><img
                                        src="https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg" />
                                    </div>

                                </div>
                            </div>
                            <div className="wizard">
                                <nav className="list-group list-group-flush">
                                    <a className="list-group-item" href="#">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div><i className="fe-icon-shopping-bag mr-1 text-muted"></i>
                                                <div className="d-inline-block font-weight-medium text-uppercase">Orders
                                                    List
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                    <a className="list-group-item" href="#" onClick={this.settingsPage}>
                                        <i className="fe-icon-user text-muted"></i>Profile Settings
                                    </a>
                                    <a className="list-group-item" href="#" onClick={this.forwardToSettingsAddresses}>
                                        <i className="fe-icon-map-pin text-muted"></i>Addresses
                                    </a>
                                    <a className="list-group-item active" href="#" onClick={this.forwardToMyCart}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div><i className="fe-icon-heart mr-1 text-muted"></i>
                                                <div className="d-inline-block font-weight-medium text-uppercase">My
                                                    Cart
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </nav>
                            </div>
                        </div>

                        <div className="col-lg-8 pb-5">
                            <form className="row">
                                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
                                <div className="container">
                                    <table id="cart" className="table table-hover table-condensed">
                                        <thead>
                                        <tr>
                                            <th id="dishDisplayTable">Dish Image</th>
                                            <th id="dishDisplayTable" >Dish Name</th>

                                            <th id="dishDisplayTable">Dish Price</th>
                                            <th id="dishDisplayTable">Quantity</th>
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
                                            <td></td>

                                            <td><a
                                                className="btn btn-success btn-block" value = { this.state.scheduleDelivery}onClick={this.handleChangeOfScheduleDelivery} >Schedule This order <i className="fa fa-angle-right"></i></a>
                                            </td>
                                            <td> <StripeCheckout stripeKey="pk_live_qksmj6ho2DblvlfR5PNKgzea00zC51Ydfw"
                                                                 amount={this.state.totalPrice}
                                                                 token={this.handleTokenAPI}
                                                                 name={this.state.restaurantName}


                                            />
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>

                                </div>
                            </form>
                            <div className="container">
                                <div className="rounded-circle">

                                    <StripeCheckout stripeKey="pk_live_qksmj6ho2DblvlfR5PNKgzea00zC51Ydfw"
                                                    amount={this.state.totalPrice}
                                                    token={this.handleTokenAPI}
                                                    name={this.state.restaurantName}


                                    />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (MySettingsPage);