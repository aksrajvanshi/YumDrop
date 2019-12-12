import React, { Component } from "react";
import AutoComplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import Slider from '@material-ui/core/Slider';
import Geocode from "react-geocode";
import {makeStyles} from '@material-ui/core/styles'
import "bootstrap/dist/css/bootstrap.min.css";
import './LoginDashBoardCSS.css';
import StarRatingComponent from 'react-star-rating-component';


class SearchPage extends Component {

    state = {
        address: "",
        autocompleteOptions: [],
        searchQuery: this.props.searchQuery,
        searchResults: [],
        ratingFilter: 1,
        distanceFilter: 5,
    };

    handleSearchChange = (event) => {
        this.setState({searchQuery: event.target.value})
    }

    forwardToLoginForm = () => {
        this.props.history.push('/LoginForm');
    }

    forwardToPublicViewPAge = () => {
        this.props.history.push('/')
    }

    forwardToRegisterForm = () => {
        this.props.history.push('/RegisterForm')
    }

    handleRatingFilterChange = (evt, val) => {
        this.setState({ratingFilter: val})
    }

    handleSearchSelect = (event) => {
        this.setState({searchQuery: event.target.textContent})
    }

    handleDistanceFilterChange = (evt, val) => {
        this.setState({distanceFilter: val})
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


    getSearchResults = () => {
        this.props.setSearchQuery(this.state.searchQuery)
        let currentComponent = this;
        fetch('/searchRestaurantByLocationFromPublicPage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userAddress: this.state.address,
                restaurantSearchKeyword: this.state.searchQuery,
                minimumRating: this.state.ratingFilter,
                maximumDistance: this.state.distanceFilter
            }),
        }).then(res => {
            return res.json();
        }).then(res=>{
            console.log(res);
            let x = [];
            for (let i=0; i<res.length;i++){
                x[i] = res[i].restaurantDetails;
            }
            this.setState({searchResults: res})
        })
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
            this.getSearchResults();
        });
    }

    goToDishesView = (evt) => {
        this.props.setUserSelectedRestaurant(evt);
        this.props.history.push('/dishesForUserView')
    }

    componentWillMount = () => {
        let currentComponent = this;
        this.getAddress();
    }

    render() {

        const mapToSearchResults =  this.state.searchResults.map((item, index) => {
                return(
                    <div className="row" onClick={() => this.goToDishesView(item)}>
                        <div className="col-md-6 how-img">
                            <img src="https://previews.123rf.com/images/juliasart/juliasart1708/juliasart170800074/83585916-colorful-cafe-isometric-restaurant-building-cartoon-vector-icon-flat-isometric-design-.jpg"
                                 className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4 >{item.restaurantDetails.restaurantName}</h4>
                            <h4 className="subheading">{item.restaurantDetails.restaurantAddress}</h4>
                            <h4> <StarRatingComponent
                                name="rate your food"
                                starCount={5}
                                value={Math.round((item.restaurantRatings.overallRating / item.restaurantRatings.numberOfUsers) * 100) / 100}
                            /></h4>

                        </div>
                    </div>


                )}
            )

        if (this.props.accountType === "user") {
            this.props.history.push("/LoginDashboard");
        }
        else if (this.props.accountType === "restaurant") {
            this.props.history.push("/RestaurantDashboard")
        }

        return (
            <div>
                <head>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                </head>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                          id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                          id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                          id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet"
                          id="bootstrap-css"/>
                    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " onClick={this.forwardToPublicViewPAge}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
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

                <div className="form-row" data-wow-delay="0.4s">

                    <div className="col-md-4 " id="searchBar">
                        <div className="md-form">
                            <AutoComplete
                                freeSolo
                                onChange={evt => this.handleSearchSelect(evt)}
                                options={this.state.autocompleteOptions.map(option => option.restaurantDetails.restaurantName)}
                                disableClearable
                                renderInput={params => (
                                    <TextField {...params} variant="filled" label="Search for food, cuisines, restaurants here.." value={this.state.searchQuery} style={{backgroundColor:"white"}} fullWidth onChange={evt => this.handleSearchChange(evt)}/>
                                )}
                            />
                        </div>
                    </div>
                    <div className="col-md-1" >
                        <div className="md-form">
                            <button className="btn btn-primary btn-md" id="SearchButton" onClick={this.getSearchResults}><span id="SearchBar">Search</span></button>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="row grid-divider">
                        <div className="col-xl-5">
                            <div className="col-padding">
                                <h3>Filters</h3>
                                <div className="col-xl-5">
                                    <div className="md-form">
                                        <p>Rating</p>
                                        <Slider
                                            defaultValue={1}
                                            value={this.state.ratingFilter}
                                            onChange={this.handleRatingFilterChange}
                                            aria-labelledby="discrete-slider"
                                            step={1}
                                            marks
                                            min={1}
                                            max={5}
                                            valueLabelDisplay="Auto"
                                        />
                                        <p>Distance</p>
                                        <Slider
                                            defaultValue={5}
                                            value={this.state.distanceFilter}
                                            onChange={this.handleDistanceFilterChange}
                                            aria-labelledby="discrete-slider"
                                            step={1}
                                            marks
                                            min={1}
                                            max={5}
                                            valueLabelDisplay="Auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">

                                <h3>Search Results</h3>
                                <div className="how-section1">

                                    {mapToSearchResults}

                                </div>

                        </div>

                    </div>

                </div>











            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        searchQuery: state.searchQuery,
        searchResults: state.searchResults
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchQuery: (evt) => dispatch({
            type: "setSearchQuery",
            newSearchQuery: evt
        }),
        setSearchResults: (evt) =>
            dispatch({
            type: "setSearchResults",
            newSearchResults: evt
        }),
        setUserSelectedRestaurant: (evt) => dispatch({
            type: "setUserSelectedRestaurant",
            newUserSelectedRestaurant: evt.restaurantEmailId
        }),
        signOut: () => dispatch({type: "signOut"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchPage)