import React, { Component } from "react";
import AutoComplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import Slider from '@material-ui/core/Slider'
import {makeStyles} from '@material-ui/core/styles'
import './Search.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './LoginDashBoardCSS.css';


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

    goToDishesView = (evt) => {
        this.props.setUserSelectedRestaurant(evt);
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
            this.setState({searchResults: x});
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
        return (
            <div>
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
                            <a className="navbar-brand " href="#" onClick={this.toLoginDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.forwardToMyCart}><i
                                            className="fa fa-fw fa-user"/>Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"  onClick={this.forwardToSettingsPage} ><span>Settings</span></a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Sign Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>)
                <div className="form-row" data-wow-delay="0.4s">
                    <div className="col-md-4">
                        <div className="md-form" >
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
                    <div className="col-md-4">
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
                <div>
                    <section className="about-area pt-80">
                        <div className="container">
                            {this.state.searchResults.map((item, index) => {
                                return(
                                    <div className="row menu_style1" onClick={() => this.goToDishesView(item)}>
                                        <div className="col-xl-12 mb-60">
                                            <div className="single_menu_list" id="containerForRestaurantDisplay" key={index}>
                                                <div>
                                                    <div className="menu_content">
                                                        <h4>{item.restaurantName}</h4>
                                                        <h5>{item.restaurantAddress}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            )}
                        </div>
                    </section>
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
            newUserSelectedRestaurant: evt.restaurantEmailId
        }),
        signOut: () => dispatch({type: "signOut"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (userSearchPage)