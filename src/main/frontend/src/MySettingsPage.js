import React, { Component } from "react";

class MySettingsPage extends Component{
     returnToLoginDahboard = () => {
    this.props.history.push('/errorPageForRegistration');
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
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


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
                </div>

                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

                    <div className="container">
                        <div className="row bg-dark mb-4 my-4 text-white">
                            <h2>Change System Settings</h2>
                        </div>

                        <div className="row">
                            <aside className="col-sm-6 col-md-3 card  my-4">
                                <h3>Company Name</h3>
                                <hr/>
                                <ul>
                                    <li>
                                        <a href="#" className="active">
                                            <span className="fa fa-gear"></span>
                                            General settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-wrench"></span>
                                            account settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-paint-brush "></span>
                                            Previous Orders
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-clock-o"></span>
                                            Payments
                                        </a>
                                    </li>

                                </ul>
                            </aside>


                                <button type="button" className="btn btn-success btn-lg btn-block my-4 mb-4 ">Save
                                    changes
                                </button>


</div>

                        </div>

                    </div>
                );
    }

}

export default MySettingsPage;