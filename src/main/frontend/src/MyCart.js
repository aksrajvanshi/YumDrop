import React from "react"
import {Modal} from "react-bootstrap";
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import StripeCheckout from "react-stripe-checkout";
import StarRatingComponent from 'react-star-rating-component';

import "react-datepicker/dist/react-datepicker.css";


class MyCart extends React.Component {
    state = {
        totalPrice: 1,
        restaurantName: "mai",
        dishesForUserDisplay: [],
        scheduleDelivery: false,
        startDate: new Date(),
        time: '10:00',
        rating: 0,
        provideRatings: false

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
                    this.forwardToLoginDashboard('/LoginDashboard')
                }

            })


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


    handleClick(item) {
        console.log(item);



        let currentComponent = this;
        fetch('/deleteDishFromCart',{
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userEmail: this.props.userEmailId,
                dishName: item.dishName
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
                this.setState({
                    provideRatings: true
                });
            }
            else{
                alert("Invalid Card details");
            }
        })

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


    render() {
        const { rating } = this.state;

        let mapDishesForUserView = this.state.dishesForUserDisplay.map((d,itemName)=>
        {
            return(
                <tr>
                    <td data-th="Product" key={itemName}>
                        <div className="row">
                            <div className="col-sm-2 hidden-xs"><img src="https://cdn1.iconfinder.com/data/icons/dishes-glyph/128/yumminky-yumminky-cooking-dishes-44-512.png" alt="..."
                                                                     className="img-responsive"/></div>

                        </div>
                    </td>
                    <td><div className="col-sm-10">
                        <h4 className="nomargin">{d.dishName}</h4>

                    </div></td>
                    <td data-th="Price">{d.dishPrice}</td>


                    <td className="actions" data-th="">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <a href="#" className="btn btn-success btn-product"><span
                                className="glyphicon btn-danger icon-remove" onClick={this.handleClick.bind(this, d)}></span> Delete item</a>
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

                            <th id="dishDisplayTable">Dish Price</th>
                            <th id="dishDisplayTable">Delete Item</th>
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
                                            <h2>Rating from state: {rating}</h2>
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
export default MyCart