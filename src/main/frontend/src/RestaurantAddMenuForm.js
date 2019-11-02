import React, { Component } from "react";
import "./RestaurantAddMenuForm.css";
class RestaurantAddMenuForm extends Component{

    render(){
        return (
            <div>
            <header>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
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


                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

                    <section class=" py-5">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-4 py-5 bg-dark  text-white text-center ">
                                <div className=" ">
                                    <div className="card-body">
                                        <img src="https://www.trzcacak.rs/file/max/125/1250276_food-symbol-png.png"
                                        />
                                            <h2 className="py-3">Add Dish</h2>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 py-5 border">
                                <h4 className="pb-4">Please fill the Dish details</h4>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input id="Full Name" name="Full Name" placeholder="Dish Name"
                                                   className="form-control" type="text"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" id="inputEmail4"
                                                   placeholder="Dish Price"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input placeholder="Dish Cuisine"
                                                   className="form-control" required="required" type="text"/>
                                        </div>
                                        <div className="form-group col-md-6">

                                            <select id="inputState" className="form-control">
                                                <option selected>Choose ...</option>
                                                <option> Available</option>
                                                <option> Not Available</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea id="comment" name="comment" cols="40" rows="5" placeholder="Description of dish"
                                                      className="form-control"></textarea>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <button type="button" className="btn btn-danger">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default RestaurantAddMenuForm;