import React, { Component } from "react";
import './LoginDashBoardCSS.css';

class LoginDashBoard extends Component{

    state = {
        data: [
            {
                restaurantImgUrl: "https://cdn.livekindly.co/wp-content/uploads/2018/01/livekindly_dominos_vegan_pizza_australia.jpg" , restaurantName: "Dominos", restaurantDescription: "Pizza with Delicious topping. Etc Etc", restaurantAverageCost: "4$", restaurantCuisine: "Italian"

            },
            {
                restaurantImgUrl: "https://pbs.twimg.com/profile_images/766346170566316032/BrObUpAM_400x400.jpg" , restaurantName: "Dominos", restaurantDescription: "Pizza with Delicious topping. Etc Etc", restaurantAverageCost: "4$", restaurantCuisine: "Italian"
            },
            {
                restaurantImgUrl: "https://cdn.livekindly.co/wp-content/uploads/2018/01/livekindly_dominos_vegan_pizza_australia.jpg" , restaurantName: "Dominos", restaurantDescription: "Pizza with Delicious topping. Etc Etc", restaurantAverageCost: "4$", restaurantCuisine: "Italian"
            },
            {
                restaurantImgUrl: "https://cdn.livekindly.co/wp-content/uploads/2018/01/livekindly_dominos_vegan_pizza_australia.jpg" , restaurantName: "Dominos", restaurantDescription: "Pizza with Delicious topping. Etc Etc", restaurantAverageCost: "4$", restaurantCuisine: "Italian"
            }
        ]
    }

    componentDidMount () {
        fetch('/getUserDetails')
            .then(res => res.json()
            ).then(data => {
            this.setState({restaurantName : data.restaurantName , restaurantImgUrl: data.restaurantImgUrl, restaurantDescription: data.restaurantDescription, restaurantAverageCost: data.restaurantAverageCost, restaurantCuisine: data.restaurantCuisine},
                )
        })}

    forwardToSettingsPage = () => {
        this.props.history.push('/MySettingsPage');
    }
    render() {
        return (
            <div>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"/>
                    <link rel="stylesheet"
                          href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
                          integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX"
                          crossOrigin="anonymous"/>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
                          rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css"
                          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"/>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#">YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                        <li className="upper-links dropdown"><a className="links"
                                        >Settings</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="profile-links" onClick={this.forwardToSettingsPage}
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

                <div className="container mt-5">
                    <div className="title">
                        <h3>Cuisines Available</h3>
                    </div>

                    <div className="row">
                        <div className="col-sm-2">
                            <h5>Indian</h5>
                            <img
                                src="https://st2.depositphotos.com/2885805/10593/v/450/depositphotos_105938884-stock-illustration-indian-food-composition.jpg"
                                alt="Rounded Image" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h5>Mexican</h5>
                            <img
                                src="https://cdn4.iconfinder.com/data/icons/mexican-icons-2/206/Tacos-512.png"
                                alt="Rounded Image" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h5>Italian</h5>
                            <img
                                src="https://image.shutterstock.com/z/stock-vector-fast-food-pizza-slice-icon-delivery-toppings-isolated-on-white-background-532221031.jpg"
                                alt="Rounded Image" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h5>American</h5>
                            <img
                                src="https://c8.alamy.com/comp/H797BY/hamburger-traditional-american-fast-food-icon-over-white-background-H797BY.jpg"
                                alt="Rounded Image" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h5>Thai</h5>
                            <img
                                src="https://image.flaticon.com/icons/png/512/644/644758.png"
                                alt="Rounded Image" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h5>Barbecue</h5>
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/food-3-11/128/food_Barbecue-Bbq-Skewer-Kabob-Hot-512.png"
                                alt="Rounded Image" className="rounded img-fluid"/>
                        </div>

                    </div>

                </div>
                <br/>
                <br/>
                <br/>


                {this.state.data.map(function(d,restaurantName,restaurantImgUrl,restaurantDescription,restaurantAverageCost, restaurantCuisine){
                    return (


                        <div className="container">

                            <h1 className="my-4">{d.restaurantName}</h1>



                            <div className="row">
                                <div className="col-md-7">
                                    <a href="#">
                                        <img className="img-fluid rounded mb-3 mb-md-0" src={d.restaurantImgUrl}
                                             alt=""/>
                                    </a>
                                </div>
                                <div className="col-md-5">
                                    <h2>Project One</h2>
                                    <p id="paragraph">{d.restaurantDescription}</p>
                                    <p id="paragraph">{d.restaurantAverageCost}</p>
                                    <p className="subheading">{d.restaurantCuisine}</p>
                                    <a className="btn btn-primary" href="#">View Menu</a>
                                </div></div>
                            <hr/>


                        </div>





                        )})}}
                </div>

        );
    }

}

export default LoginDashBoard;