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

    goBackToLoginDashboard = () => {
        this.props.history.push('/goBackToLoginDashboard');
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
                            <a className="navbar-brand " href="#" onClick={this.goBackToLoginDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <a className="nav-link"><i
                                            className="fa fa-fw fa-user"/>My Cart</a>
                                    </li>
                                    <li className="nav-item" id="SignUpID">
                                        <a className="nav-link" onClick={this.forwardToSettingsPage}>My Settings</a>
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
                                alt="Rounded Image" height="80%" width="80%" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h5>Mexican</h5>
                            <img
                                src="https://cdn4.iconfinder.com/data/icons/mexican-icons-2/206/Tacos-512.png"
                                alt="Rounded Image" height="70%" width="70%" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h5>Italian</h5>
                            <img
                                src="https://image.shutterstock.com/z/stock-vector-fast-food-pizza-slice-icon-delivery-toppings-isolated-on-white-background-532221031.jpg"
                                alt="Rounded Image" height="70%" width="70%" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h5>American</h5>
                            <img
                                src="https://c8.alamy.com/comp/H797BY/hamburger-traditional-american-fast-food-icon-over-white-background-H797BY.jpg"
                                alt="Rounded Image" height="70%" width="70%" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h5>Thai</h5>
                            <img
                                src="https://image.flaticon.com/icons/png/512/644/644758.png"
                                alt="Rounded Image" height="70%" width="70%" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h5>Barbecue</h5>
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/food-3-11/128/food_Barbecue-Bbq-Skewer-Kabob-Hot-512.png"
                                alt="Rounded Image" height="70%" width="70%" className="rounded img-fluid"/>
                        </div>

                    </div>

                </div>
                <br/>
                <br/>
                <br/>
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
                                        <img className="img-fluid rounded mb-3 mb-md-0" width="60%" height="60%" src={d.restaurantImgUrl}
                                             alt=""/>
                                    </a>
                                </div>
                                <div className="col-md-5">
                                    <h2>Project One</h2>
                                    <h4 id="paragraph">{d.restaurantDescription}</h4>
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