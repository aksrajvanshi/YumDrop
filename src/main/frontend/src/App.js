import React, { Component } from "react";

import LoginPage from "./LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button, Dropdown, DropdownButton} from "react-bootstrap";
import {connect} from 'react-redux';
import Geocode from "react-geocode";
import AutoComplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './index.css';
import './Search.css';


class App extends Component {

    state = {
        address: "",
        latitude: "",
        longitude: "",
        searchResults: [],
        searchQuery: "",
        autocompleteOptions: []
    };

    forwardToLoginForm = () => {
        this.props.history.push('/LoginForm');
    }

    forwardToPublicViewPAge = () => {
        this.props.history.push('/')
    }

    forwardToRegisterForm = () => {
        this.props.history.push('/RegisterForm')
    }

    goToSearchPage = () => {
        this.props.setSearchQuery(this.state.searchQuery)
        this.props.history.push('/SearchPage')
        console.log("hi");
    }

    getSearchResults = () => {
        let currentComponent = this;
        fetch('/searchRestaurantByLocationFromPublicPage', {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            body:JSON.stringify({
                userAddress: this.state.address,
                restaurantSearchKeyword: this.state.searchQuery
            }),
        }).then(res => {return res.json();
        }).then(res=>{
            let x = [];
            for (let i=0; i<res.length;i++){
                x[i] = res[i].restaurantDetails;
            }
            currentComponent.setState({
                searchResults: x
            })
        })
    }

    handleSearchSelect = (event) => {
        this.setState({searchQuery: event.target.textContent})
    }

    handleSearchChange = (event) => {
        this.setState({searchQuery: event.target.value})
    }

    async getAddress() {
        await navigator.geolocation.getCurrentPosition(
            position => Geocode.fromLatLng( position.coords.latitude , position.coords.longitude ).then(
                res => {
                    this.setState({address: res.results[0].formatted_address}, this.getAutocompleteOptions)
                }),
            err => console.log(err)
        );
    }

    getAutocompleteOptions() {
        fetch('/getAllRestaurants', {
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userAddress: this.state.address,
            })
        })
            .then(res => {
                return res.json()
            }).then(data => {
            this.setState({autocompleteOptions: data})
        });
    }

    componentWillMount() {
       this.getAddress();
    }


    render() {

        if (this.props.accountType === "user") {
            this.props.history.push("/LoginDashboard");
        }
        else if (this.props.accountType === "restaurant") {
            this.props.history.push("/RestaurantDashboard")
        }
        return (
            <div className="App">
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#" onClick={this.forwardToPublicViewPAge}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item" >
                                        <a className="nav-link" onClick={this.forwardToLoginForm}><i
                                            className="fa fa-fw fa-user"></i>Login</a>
                                    </li>
                                    <li className="nav-item" id="SignUpID">
                                        <a className="nav-link" onClick={this.forwardToRegisterForm}>Sign Up</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="view rgba-black-light">
                    <br/><br/><br/>
                    <div className="">
                        <li>
                            <p id="para" >Are you hungry?</p>
                        </li>
                        <ul className="list-unstyled">
                            <br/><br/><br/><br/>
                            <li>
                                <div className="form-row" data-wow-delay="0.4s">
                                    <div className="col-md-5"  id="firstbar">
                                        <div className="md-form">
                                            <select className="form-control" id="exampleFormControlSelect2">
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AR">Arizona</option>
                                                <option value="AZ">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DC">Delaware</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="IA">Idaho</option>
                                                <option value="ID">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="KS">Iowa</option>
                                                <option value="KY">Kansas</option>
                                                <option value="LA">Kentucky</option>
                                                <option value="MA">Louisiana</option>
                                                <option value="MD">Maine</option>
                                                <option value="ME">Maryland</option>
                                                <option value="MI">Massachusetts</option>
                                                <option value="MN">Michigan</option>
                                                <option value="MO">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MT">Missouri</option>
                                                <option value="NC">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NH">Nevada</option>
                                                <option value="NJ">New Hampshire</option>
                                                <option value="NM">New Jersey</option>
                                                <option value="NV">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="ND">North Carolina</option>
                                                <option value="OH">North Dakota</option>
                                                <option value="OK">Ohio</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WI">West Virginia</option>
                                                <option value="WV">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="md-form">
                                            <div>
                                            <AutoComplete
                                                freeSolo
                                                autoSelect="true"
                                                color="primary"
                                                size="medium"
                                                onChange={evt => this.handleSearchSelect(evt)}
                                                options={this.state.autocompleteOptions.map(option => option.restaurantDetails.restaurantName)}
                                                disableClearable
                                                renderInput={params => (
                                                    <TextField {...params} id="autocomplete" variant="filled" label="Search for food, cuisines, restaurants here.." style={{backgroundColor:"white"}} fullWidth onChange={(evt) => this.handleSearchChange(evt)} />
                                                )}
                                            />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1" >
                                        <div className="md-form">
                                            <button id="SearchButton" className="btn btn-primary btn-md" onClick={this.goToSearchPage} id="SearchBarButtonHomePage"><span id="SearchBar">Search</span></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div className="how-section1">
                    <div className="row">
                        <div className="col-md-6 how-img">
                            <img src="https://previews.123rf.com/images/juliasart/juliasart1708/juliasart170800074/83585916-colorful-cafe-isometric-restaurant-building-cartoon-vector-icon-flat-isometric-design-.jpg"
                                 className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4>Local favorites</h4>
                            <h4 className="subheading">Satisfy any craving with delivery from popular neighborhood restaurants and chains. Reorder go-tos or find something new.</h4>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Delivery to your doorstep</h4>
                            <h4 className="subheading">Get great food delivered or save time and money and preorder for pick up. Either way, order tracking and updates keep you in the know.</h4>

                        </div>
                        <div className="col-md-6 how-img">
                            <img src="https://cdn.clipart.email/3a7d43627822f0b19af9bd540aebd827_food-delivery-man-clipart-clipartxtras_170-155.jpeg"
                                 className="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 how-img">
                            <img src="https://activmeals.com/images/step3.png"
                                 className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4>Pickup or delivery from restaurants near you</h4>

                            <h4 className="subheading">Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave, and order online or through the YumDrop app. Find great meals fast with lots of local menus. Enjoy eating the convenient way with places that deliver to your door..</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Easy Pay</h4>
                            <h4 className="subheading">Pay for food with one click of a button.
                                Multiple payment options. </h4>
                        </div>
                        <div className="col-md-6 how-img">
                            <img src="https://www.trzcacak.rs/myfile/full/377-3774169_payment-channel-payment-channel-payment-channel-payment-bank.png"
                                 className="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accountType: state.accountType
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setSearchQuery: (evt) => dispatch({type: "setSearchQuery", newSearchQuery: evt}),

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
