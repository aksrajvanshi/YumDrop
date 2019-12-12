import React from "react"
import {Modal} from "react-bootstrap";
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import StripeCheckout from "react-stripe-checkout";
import StarRatingComponent from 'react-star-rating-component';

import "react-datepicker/dist/react-datepicker.css";
import {connect} from "react-redux";


class MyCart extends React.Component {
    state = {
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

    onStarClick(nextValue, prevValue, name) {
        let currentComponent = this;
        console.log(nextValue)
        fetch('/rateRestaurant',{
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userEmail: this.props.userEmailId,
                restaurantId: "abc12",
                restaurantRating: nextValue
            })})
            .then(res => {
                console.log(res)
                if (res.status === 200){
                    this.forwardToLoginDashboard()
                }

            })


    }

    forwardToLoginDashboard = () => {
        this.props.history.push('/LoginDashboard')
    }


    onChange = date => this.setState({ date })
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    onChangetime = time => this.setState({ time })




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

    handleChangeOfScheduleDelivery  = (

    ) => {
        this.setState({
            scheduleDelivery: true,
        });
    };

    submitSchedulingOfOrder(){
        fetch('/scheduleOrderForUser',{
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userEmail: this.props.userEmailId,
                time: this.state.time,
                dateForScheduling: this.state.startDate

            })})
            .then(res => {
                console.log(res.status)
                if (res.status === 200){
                   this.setState({
                       scheduleDelivery: false,
                   })
                }
                console.log(this.state.data)
            })
    }


    handleClick = (e) => {
        console.log(e);
        console.log(this.state.dishesForUserDisplay)

        const {dishesForUserDisplay} = this.state.dishesForUserDisplay
        console.log(dishesForUserDisplay)
        const { id } = e.target;
        console.log(id)
        dishesForUserDisplay[id].dishQuantity = dishesForUserDisplay[id].dishQuantity + 1
        console.log(dishesForUserDisplay[id].dishQuantity);
        this.setState({
            dishesForUserDisplay
        })

        let currentComponent = this;
        fetch('/addItemToMyCart ',{
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userEmail: this.props.userEmailId,

                dishQuantity: this.state.dishesForUserDisplay[id].dishQuantity
            })})
            .then(res => {
                console.log(res.status)
                if (res.status === 200){
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
                }
                    console.log(this.state.data)
                })
            }
    sendCardDetailsForPayment = () => {
        console.log("Inside send card details")
        console.log("RestaurantId", this.props.restaurantId)
        console.log("email Id", this.props.emailId)
        fetch('/makeUserOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: this.props.emailId,
                restaurantId: this.props.restaurantId,

            }),
        }).then(res => {
            if (res.status===200){
                this.setState({
                    provideRatings: true
                });
            }
            else{
                alert("Invalid Card details");
            }
        })

    }
    goBackToLoginDashboard = () => {
        this.props.history.push('/LoginDashboard')
    }

    handleTokenAPI = (token) => {
        console.log("Insdie this");

        console.log("End")
        console.log("Ending")
        this.sendCardDetailsForPayment();
    }


    render() {
        const { rating } = this.state;

        let mapDishesForUserView = this.state.dishesForUserDisplay.map((d,itemName)=>
        {
            return(
                <tr><td data-th="Product" key={itemName}>
                    <div className="row">
                        <div className="col-sm-2 hidden-xs"><img src="https://data.tibettravel.org/assets/images/Tibet-bhutan-tour/indian-food-in-Lhasa.jpg" alt="..."
                                                                 height="50px" width="50px" className="img-responsive"/></div>

                    </div>
                </td>
                    <td><div className="col-sm-10">
                        <h4 className="nomargin">{d.dishName}</h4>

                    </div></td>
                    <td data-th="Price">{d.dishPrice}</td>


                    <td className="actions" data-th="">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                             <a id={itemName} key={itemName} value={d.dishQuantity} onClick={this.handleClick} >{d.dishQuantity}</a>
                        </div>
                    </td>
                </tr>



            )
        })
        return(
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

                        </tr>
                        </tfoot>
                    </table>


                                </div></form>
                            <td> <StripeCheckout stripeKey="pk_live_qksmj6ho2DblvlfR5PNKgzea00zC51Ydfw"
                                                 amount={this.state.totalPrice}
                                                 token={this.handleTokenAPI}
                                                 name={this.state.restaurantName}


                            />
                            </td>
                        </div></div></div>
                <Modal
                    show={this.state.scheduleDelivery}
                    onHide={this.closeAllOptionsOfSelectionForm}
                    animation={false}
                    centered id="modal"
                >
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <div>

                                        <Calendar
                                        onChange={this.onChange}
                                        value={this.state.date}
                                    />

                                    <br/>
                                    <br/>
                                    <br/>

                                        <TimePicker
                                            onChange={this.onChangetime}
                                            value={this.state.time}
                                        />
                                        <br/>
                                        <br/>
                                    </div>

                                </div>
                                <td><a
                                    className="btn btn-success btn-block" onClick={this.submitSchedulingOfOrder} >Schedule This order <i className="fa fa-angle-right"></i></a>
                                </td>
                            </div>
                        </div>
                    </div>

                </Modal>

                <Modal
                    show={this.state.provideRatings}
                    onHide={this.closeAllOptionsOfSelectionForm}
                    animation={false}
                    centered id="modal"
                >
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="login-form">
                                    <div>
                                        <div>
                                            <h2>Please provide your ratings</h2>
                                            <StarRatingComponent
                                                name="rate your food"
                                                starCount={5}
                                                value={rating}
                                                onStarClick={this.onStarClick.bind(this)}
                                            />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </Modal>


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
export default connect(mapStateToProps, mapDispatchToProps)(MyCart);