import React, { Component } from "react";
import "./RestaurantAddMenuForm.css";
class RestaurantAddMenuForm extends Component{
    state  = {
        restaurantDishDescription: "",
        restaurantDishName: "",
        restaurantDishPrice: "",
        restaurantDishCuisine: "",
        restaurantDishAvailability: ""


    }

    handleRestaurantDishAvailability= (event) => {
        this.setState({
            restaurantDishAvailability: event.target.value,
        })};

    handleRestaurantDishCuisine= (event) => {
        this.setState({
            restaurantDishCuisine: event.target.value,
        });
    };

    handleRestaurantDishDescription = (event) => {
        this.setState({
            restaurantDishDescription: event.target.value,
        });
    };

    handleRestaurantDishName = (event) => {
        this.setState({
            restaurantDishName: event.target.value,
        });
    };

    handleRestaurantDishPrice  = (event) => {
        this.setState({
            restaurantDishPrice: event.target.value,
        });
    };


    restaurantAddDish() {debugger;
        let obj = {}
        fetch('/restaurantAddDish',
            {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                        restaurantDishDescription: this.state.restaurantDishDescription,
                        restaurantDishName: this.state.restaurantDishName,
                        restaurantDishPrice: this.state.restaurantDishPrice,
                    }
                )

            }
        ).then(res => {


            if (res.status !== 200) {
                this.forwardToErrorInAddingItem();

            }else {
                this.forwwardToSuccessInAddingItem();
            }


        })}

    returnToLoginDahboard = () => {
        this.props.history.push('/RestaurantDashboard');
    }

    goToRestaurantSettingsPage = () => {
        this.props.history.push('/RestaurantSettingsPage');
    }
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
                            <a className="navbar-brand " href="#" onClick={this.goBackToRestaurantDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="upper-links"><a className="links text-white" onClick={this.returnToLoginDahboard}
                                    >Home</a>

                                    </li>

                                    <li className="upper-links"><a className="links text-white" onClick={this.goToRestaurantSettingsPage}
                                    >My Settings</a>

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
                                        <img src="https://www.trzcacak.rs/file/max/125/1250276_food-symbol-png.png" height="50%" width="50%"
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
                                                   value={this.state.restaurantDishName} onChange={this.handleRestaurantDishName}    className="form-control" type="text"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" id="inputEmail4"
                                                   value={this.state.restaurantDishPrice} onChange={this.handleRestaurantDishPrice}       placeholder="Dish Price"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input placeholder="Dish Cuisine" value={this.state.restaurantDishCuisine} onChange={this.handleRestaurantDishCuisine}
                                                   className="form-control" required="required" type="text"/>
                                        </div>
                                        <div className="form-group col-md-6">

                                            <select id="inputState" className="form-control" value={this.state.restaurantDishAvailability} onChange={this.handleRestaurantDishAvailability}>
                                                <option selected>Choose ...</option>
                                                <option> Available</option>
                                                <option> Not Available</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea value={this.state.restaurantDishDescription} value={this.handleRestaurantDishDescription} id="comment" name="comment" cols="40" rows="5" placeholder="Description of dish"
                                                      className="form-control"></textarea>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <button type="button" className="btn btn-danger" onClick={this.restaurantAddDish}>Save</button>
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