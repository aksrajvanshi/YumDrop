import React, { Component } from "react";
import "./RestaurantAddMenuForm.css";
import {connect} from "react-redux";
import ConvertImage from "react-convert-image";
import imageDataURI from "image-data-uri";



const mapStateToProps = (state)=>{
    return {
        restaurantId: state.userId
    }
};





class RestaurantAddMenuForm extends Component{
    state  = {
        restaurantDishDescription: "",
        restaurantDishName: "",
        restaurantDishPrice: 0.0,
        restaurantDishCuisine: "",
        restaurantDishAvailability: "",
        restaurantPrimaryEmailId: "",
        restaurantId: "",
        errorSelect: false,
        data: [],
        restaurantDishImage: ""


    }


    handleRestautantDishImage = (url) => {
        let base64Image = '';
        this.getDataUri(url, (result) => {
            base64Image = result;
            console.log(base64Image)
        })
        this.setState({restaurantDishImage: base64Image})

    }

    handleRestaurantDishAvailability= (event) => {
        this.setState({
            restaurantDishAvailability: "1",
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

    goToRestaurantDashboard = () => {
        this.props.history.push('/RestaurantDashboard')
    }



    getDataUri(url, callback) {
        let reader = new FileReader();
        reader.readAsDataURL(url.target.files[0]);
        reader.onload = function () {
            callback(reader.result)
        }
        reader.onerror = function () {
            console.log("file upload error")
        }
    }


    restaurantAddDish= () => {debugger;
        console.log(this.state.restaurantId);
        console.log(this.props.restaurantId);
        console.log(this.state.userId);
        fetch('/addDishToRestaurantMenu',
            {
                method: 'POST',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                        restaurantId: this.props.restaurantId,
                        dishAvailable: true,
                        dishDescription: this.state.restaurantDishDescription,
                        dishName: this.state.restaurantDishName,
                        dishPrice: this.state.restaurantDishPrice,
                    dishPhotoUrl: "https://wine4food.com/wp-content/uploads/2019/01/bigstock-Selection-of-Indian-food-inclu-12014759.jpg"
                    }
                )

            }
        ).then(res => {
            if (res.status !== 200) {
                this.setState({
                    errorSelect: true,
                    data: res.data
                })

            }else {
                console.log("Inside this")
                this.goToRestaurantDashboard();
            }
            return res.json();
        })
            .then(res => {

            console.log("response got")
                console.log(res);
            if (res.status !== 200) {
                this.setState({
                    errorSelect: true,
                    data: res.data
                })

            }else {
              this.goToRestaurantDashboard();
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
                <img src={this.state.restaurantDishImage}/>
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
                                            <input id="Full Name" name="myImage"  placeholder="Dish URL"
                                                   value={this.state.restaurantDishImage} onChange={this.handleRestautantDishImage}    className="form-control" type="file"/>

                                        </div>
                                    </div>


                                    <div className="form-row">


                                        <div className="form-group col-md-12">
                                            <textarea value={this.state.restaurantDishDescription} onChange={this.handleRestaurantDishDescription} id="comment" name="comment" cols="40" rows="5" placeholder="Description of dish"
                                                      className="form-control"></textarea>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <button type="button" className="btn btn-danger" onClick={this.restaurantAddDish}>Add</button>
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

export default connect(mapStateToProps) (RestaurantAddMenuForm);