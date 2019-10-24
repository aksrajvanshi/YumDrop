import React, { Component } from "react";
import './LoginDashBoardCSS.css';

class LoginDashBoard extends Component{


    forwardToSettingsPage = () => {
        this.props.history.push('/MySettingsPage');
    }
    render() {
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
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2">
                            <div className="input-group">
                                <div className="input-group-btn search-panel">
                                    <button type="button" className="btn btn-default dropdown-toggle"
                                            data-toggle="dropdown">
                                        <span id="search_concept">Filter by</span> <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="#contains">Cost</a></li>
                                        <li><a href="#its_equal">Delivery time</a></li>
                                        <li><a href="#greather_than">Price : high to low</a></li>
                                        <li><a href="#less_than">Price : Low to high </a></li>
                                        <li><a href="#less_than">Distance</a></li>
                                        <li className="divider"></li>
                                    </ul>
                                </div>
                                <input type="hidden" name="search_param" value="all" id="search_param"/>
                                <input type="text" className="form-control" name="x" placeholder="Search term..."/>
                                <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><span
                        className="glyphicon glyphicon-search"></span></button>
                </span>
                            </div>
                        </div>
                    </div>
                </div><br/><br/><br/>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12 col-sm-4 col-md-2">
                            <div class="productbox">
                                <img src="https://thekatynews.com/wp-content/uploads/2017/06/mcdonalds-logo.jpg" class="img-responsive"/>
                                <div class="producttitle">McDonals</div>
                                <p class="text-justify">Burgers, Ice Cream</p>

                                <br/>
                                <div class="productprice">
                                    <div class="pull-right">
                                        <a href="#" class="btn btn-success btm-sm" role="button">Menu <span class="glyphicon glyphicon-cutlery"></span></a>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-2">
                            <div className="productbox">
                                <img src="https://thekatynews.com/wp-content/uploads/2017/06/mcdonalds-logo.jpg"
                                     className="img-responsive"/>
                                <div className="producttitle">McDonalds</div>
                                <p className="text-justify">Burgers, Ice Cream</p>

                                <br/>
                                <div className="productprice">
                                    <div className="pull-right">
                                        <a href="#" className="btn btn-success btm-sm" role="button">Menu <span
                                            className="glyphicon glyphicon-cutlery"></span></a>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="col-xs-12 col-sm-4 col-md-2">
                            <div className="productbox">
                                <img src="https://thekatynews.com/wp-content/uploads/2017/06/mcdonalds-logo.jpg"
                                     className="img-responsive"/>
                                <div className="producttitle">McDonals</div>
                                <p className="text-justify">Burgers, Ice Cream</p>

                                <br/>
                                <div className="productprice">
                                    <div className="pull-right">
                                        <a href="#" className="btn btn-success btm-sm" role="button">Menu <span
                                            className="glyphicon glyphicon-cutlery"></span></a>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-2">
                            <div className="productbox">
                                <img src="https://thekatynews.com/wp-content/uploads/2017/06/mcdonalds-logo.jpg"
                                     className="img-responsive"/>
                                <div className="producttitle">McDonals</div>
                                <p className="text-justify">Burgers, Ice Cream</p>

                                <br/>
                                <div className="productprice">
                                    <div className="pull-right">
                                        <a href="#" className="btn btn-success btm-sm" role="button">Menu <span
                                            className="glyphicon glyphicon-cutlery"></span></a>
                                    </div>


                                </div>
                            </div>
                        </div><br/>
                        <div class="col-md-2">
                            <div class="productbox">
                                <img src="https://cdn.doordash.com/media/restaurant/cover/IndiaPalace_Minneapolis_COPY.png" class="img-responsive"/>
                                <div class="producttitle">Indian Palace</div>
                                <p class="text-justify">Indian Food, spicy, vegetarian, non vegetarian</p>

                                <div class="productprice">
                                    <div class="pull-right">
                                        <a href="#" class="btn btn-success btm-sm" role="button">Menu <span class="glyphicon glyphicon-cutlery"></span></a>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }

}
export default LoginDashBoard;