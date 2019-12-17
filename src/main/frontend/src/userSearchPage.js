import React, { Component } from "react";
import AutoComplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import Slider from '@material-ui/core/Slider'
import {makeStyles} from '@material-ui/core/styles'
import './Search.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './LoginDashBoardCSS.css';
import ReactHover from "react-hover";
import StarRatingComponent from "react-star-rating-component";
import SliderReact from "react-rangeslider";


class userSearchPage extends Component {

    state = {
        address: "",
        autocompleteOptions: [],
        searchQuery: this.props.searchQuery,
        searchResults: [],
        ratingFilter: 1,
        distanceFilter: 5,
        userEmailId: this.props.emailId,
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

    handleDistanceFilterChange = (evt, val) => {
        this.setState({distanceFilter: val})
    }

    handleSearchSelect = (event) => {
        this.setState({searchQuery: event.target.textContent})
    }

    forwardToSettingsPage = () => {
        this.props.history.push('/MySettingsPage');
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    getUserAddress = async () => {
        let currentComponent = this;
        await fetch('/getUserDataForDashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: currentComponent.state.userEmailId
            }),
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            currentComponent.setState({address: data.userAddress}, currentComponent.getAutocompleteOptions)
        })
    }

    goToDishesView(item) {
        this.props.setUserSelectedRestaurant(item.restaurantDetails.restaurantId);
        this.props.history.push('/dishesForUserView')
    }


    getSearchResults = () => {
        let currentComponent = this;
        this.props.setSearchQuery(currentComponent.state.searchQuery)
        fetch('/searchRestaurantByLocationFromUserDashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userAddress: currentComponent.state.address,
                restaurantSearchKeyword: currentComponent.state.searchQuery,
                userEmail: this.state.userEmailId,
                minimumRating: this.state.ratingFilter,
                maximumDistance: this.state.distanceFilter
            }),
        }).then(res => {
            return res.json();
        }).then(res=>{
            let x = [];
            for (let i=0; i<res.length;i++){
                x[i] = res[i].restaurantDetails;
            }
            this.setState({searchResults: res});
        })
    }

    getAutocompleteOptions() {
        console.log(this.state.address)
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
            this.setState({autocompleteOptions: data});
            this.getSearchResults();
        });
    }

    forwardToMyCart = () => {
        this.props.history.push('/MyCart')
    }

    toLoginDashboard = () => {
        this.props.history.push('/LoginDashboard')
    }

    componentWillMount() {
        let currentComponent = this;
        this.getUserAddress();
    }

    render() {
        if(this.props.emailId === null) {
            this.props.history.push('/')
        }
        const mapToSearchResults =  this.state.searchResults.map((item, index) => {
            return(
                <div className="row" onClick={this.goToDishesView.bind(this, item)}>
                    <div className="col-sm-4 how-img">
                        <img src={item.restaurantDetails.restaurantImageUrl}
                             className="rounded-circle img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <p id="mainheading"><strong>{item.restaurantDetails.restaurantName}</strong></p>


                        <p>{item.distanceFromUserWithMetrics} away</p>
                        <ReactHover>
                            <ReactHover.Trigger type='trigger'>
                                <h5>Average user rating</h5>
                                <h7 className="padding-bottom-7">{Math.round((item.restaurantRatings.overallRating / item.restaurantRatings.numberOfUsers))} <small>/ 5</small></h7><br/>
                                <StarRatingComponent
                                    name="rate your food"
                                    starCount={5}
                                    value={5}
                                />


                                <br/>
                                <br/>
                            </ReactHover.Trigger>
                            <ReactHover.Hover type='hover'>
                                <div className="container" id="positionOfHover">

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="rating-block">
                                                <h6>Rating breakdown</h6>
                                                <div className="pull-left">
                                                    <div className="pull-left" id="star-rating-display" >
                                                        <div id="star-rating-display1">5 <span
                                                            className="glyphicon glyphicon-star"></span></div>
                                                    </div>
                                                    <div className="pull-left" id="star-rating-display2" >
                                                        <div className="progress" id="star-rating-display3">
                                                            <div className="progress-bar progress-bar-success"
                                                                 role="progressbar" aria-valuenow="5" aria-valuemin="0"
                                                                 aria-valuemax="5" id="star-rating-display4">
                                                                <span className="sr-only">80% Complete (danger)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pull-right" id="star-rating-display5">1</div>
                                                </div>
                                                <div className="pull-left">
                                                    <div className="pull-left" id="star-rating-display6">
                                                        <div id="star-rating-display7">4 <span
                                                            className="glyphicon glyphicon-star"></span></div>
                                                    </div>
                                                    <div className="pull-left" id="star-rating-display2">
                                                        <div className="progress" id="star-rating-display3">
                                                            <div className="progress-bar progress-bar-primary"
                                                                 role="progressbar" aria-valuenow="4" aria-valuemin="0"
                                                                 aria-valuemax="5" id="star-rating-display8">
                                                                <span className="sr-only">80% Complete (danger)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pull-right" id="star-rating-display9">1</div>
                                                </div>
                                                <div className="pull-left">
                                                    <div className="pull-left" id="star-rating-display10">
                                                        <div id="star-rating-display11">3 <span
                                                            className="glyphicon glyphicon-star"></span></div>
                                                    </div>
                                                    <div className="pull-left" id="star-rating-display12">
                                                        <div className="progress" id="star-rating-display13">
                                                            <div className="progress-bar progress-bar-info" role="progressbar"
                                                                 aria-valuenow="3" aria-valuemin="0" aria-valuemax="5"
                                                                 id="star-rating-display14">
                                                                <span className="sr-only">80% Complete (danger)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pull-right" id="star-rating-display15">0</div>
                                                </div>
                                                <div className="pull-left">
                                                    <div className="pull-left" id="star-rating-display16">
                                                        <div id="star-rating-display17">2 <span
                                                            className="glyphicon glyphicon-star"></span></div>
                                                    </div>
                                                    <div className="pull-left" id="star-rating-display18">
                                                        <div className="progress" id="star-rating-display19">
                                                            <div className="progress-bar progress-bar-warning"
                                                                 role="progressbar" aria-valuenow="2" aria-valuemin="0"
                                                                 aria-valuemax="5" id="star-rating-display20">
                                                                <span className="sr-only">80% Complete (danger)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pull-right" id="star-rating-display21">0</div>
                                                </div>
                                                <div className="pull-left">
                                                    <div className="pull-left" id="star-rating-display22">
                                                        <div id="star-rating-display23">1 <span
                                                            className="glyphicon glyphicon-star"></span></div>
                                                    </div>
                                                    <div className="pull-left">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-danger" role="progressbar"
                                                                 aria-valuenow="1" aria-valuemin="0" aria-valuemax="5"
                                                            >
                                                                <span className="sr-only">80% Complete (danger)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pull-right" >0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </ReactHover.Hover></ReactHover>
                    </div></div>



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
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
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

                <div className="form-row" data-wow-delay="0.4s" id="searchDivContainer">

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
                        <div className="col-sm-3">
                            <div className="col-padding">
                                <h3>Filters</h3>
                                <div className="col-xl-5">
                                    <div className="md-form">
                                        <p><strong>Rating</strong></p>
                                        <SliderReact
                                            value={this.state.ratingFilter}
                                            orientation="vertical"
                                            min={1}
                                            max={5}
                                            onChange={this.handleOnChange}
                                        />
                                        <p><strong>Distance</strong></p>
                                        <SliderReact
                                            min={1}
                                            max={10}
                                            value={this.state.distanceFilter}
                                            orientation="vertical"
                                            onChange={this.handleOnChangeDistanceFilter}
                                        />
                                        <br/>




                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">

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
        emailId: state.userId,
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
            newUserSelectedRestaurant: evt
        }),
        signOut: () => dispatch({type: "signOut"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (userSearchPage)