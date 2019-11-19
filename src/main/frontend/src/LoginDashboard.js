import React, { Component } from "react";
import './LoginDashBoardCSS.css';
import {connect} from "react-redux";


class LoginDashBoard extends Component{
    constructor(props) {
        super(props);

    }

    state = {
        userEmailId : this.props.userEmailId,
        searchResults: [{"restaurantAddress": "restaurantAddress"}],
        userAddress: "800 N Union St, Bloomington, IN 47408, USA",
        searchQuery: ""
    }

    componentDidMount () {
        let currentComponent = this
        fetch('/getAllRestaurants',{
            method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmailId: this.state.userEmailId
            }),
        }).then(res => {
            return res.json();
        }).then(res=>{
            let x = [];
            for (let i=0; i<res.length;i++){
                x[i] = res[i].restaurantDetails;
            }
            currentComponent.setState({
                searchResults: x
            })
            console.log(this.state.data)
            if (res.status !== 200) {
            }else {
            }


        })

    }

    getSearchResults = () => {
        let currentComponent = this;
        fetch('/searchRestaurantByLocationFromUserDashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userAddress: this.state.userAddress,
                restaurantSearchKeyword: this.state.searchQuery,
                userEmail: this.state.userEmailId
            }),
        }).then(res => {
            return res.json();
        }).then(res=>{
            let x = [];
            for (let i=0; i<res.length;i++){
                x[i] = res[i].restaurantDetails;
            }
            currentComponent.setState({
                searchResults: x
            })
            console.log(this.state.searchResults)
        })
    }

    handleSearchChange = (event) => {
        this.setState({searchQuery: event.target.value})
    }

    forwardToSettingsPage = () => {
        this.props.history.push('/MySettingsPage');
    }

    forwardToMyCart = () => {
        this.props.history.push('/MyCart')
    }

    onClick= (event) => {
        this.forwardToSettingsPage();
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    render() {

        if(this.props.emailId === null) {
            this.props.history.push('/')
        }
      
        return (
            <div>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#">YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.forwardToMyCart}><i
                                            className="fa fa-fw fa-user"/>Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"  onClick={this.onClick} ><span>Settings</span></a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Sign Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <div>
                    <div className="col-md-4">
                        <div className="md-form">
                            <input type="text"
                                   placeholder="Search for food, cuisines, restaurants here.."
                                   className="form-control validate" onChange={(event) => this.handleSearchChange(event)}/>

                        </div>
                    </div>
                    <div className="col-md-1" >
                        <div className="md-form">
                            <button className="btn btn-primary btn-md" onClick={this.getSearchResults}><span id="SearchBar">Search</span></button>
                        </div>
                    </div>
                </div>
                <div>
                    <section className="about-area pt-80">
                        <div className="container">
                            {this.state.searchResults.map((item, index) => {
                                return(
                                    <div className="row menu_style1">
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

                <div className="container mt-5">
                    <div className="section-title text-center">
                        <p>Try from the variety of Cuisines available</p>
                        <h4>Cuisines</h4>
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
                                src="https://icons-for-free.com/iconfiles/png/512/food+food+italian+food+junk+food+pizza+icon-1320168016349880751.png"
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
                        <div className="col-sm-2" >
                            <h5>Barbecue</h5>
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/food-3-11/128/food_Barbecue-Bbq-Skewer-Kabob-Hot-512.png"
                                height="70%" width="70%" className="rounded img-fluid"/>
                        </div>

                    </div>

                </div>

                <br/>

<br/>
<br/>



                        <div>
                            <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,900"
                                  rel="stylesheet"/>
                            <link href="https://fonts.googleapis.com/css?family=Oleo+Script" rel="stylesheet"/>

                            <section className="about-area pt-80">
                                <div className="container" >
                                    <div className="row">
                                        <div className="col-xl-12 mb-60">
                                            <div className="section-title text-center">
                                                <p>Popular Restaurants Near You</p>
                                                <h4>Restaurants</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row menu_style1">
                                        <div className="col-md-4">
                                            <div className="single_menu_list">
                                                <img
                                                    src="https://www.culinaryhill.com/wp-content/uploads/2017/09/Chipotle-Steak-Recipe-Culinary-Hill-2.jpg"
                                                    alt=""/>
                                                <div className="menu_content">
                                                    <h4>Chipotle <span>$8</span></h4>
                                                    <p>Burritos, Tacos, Salads, Bowls, Chips</p>
                                                    <h5>Mexican, Vegetarian, Vegan, Non-Vegetarian</h5>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single_menu_list">
                                                <img
                                                    src="https://assets.grab.com/wp-content/uploads/sites/4/2019/03/18143157/grabfood-singapore-delivery-dominos-700x700.jpg"
                                                    alt=""/>
                                                    <div className="menu_content">
                                                        <h4>Dominos <span>Avg %15</span></h4>
                                                        <p>Domino for pizza, sides, sandwiches, pasta, crusts, topping, breads, desserts, salads, dressings, sauce, and dipping cups!</p>
                                                        <h5>Italian, Vegetarian, Non-Vegetarian</h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single_menu_list" >
                                                <img
                                                    src="https://pbs.twimg.com/profile_images/692830789365403649/Iw_yGrfl_400x400.jpg"
                                                    alt=""/>
                                                    <div className="menu_content">
                                                        <h4>Fazoli<span>$5</span></h4>
                                                        <p>Snacks, Breadsticks, pizza, spaghetti, pasta, sandwiches, submarines, salads</p>
                                                        <h5>Italian, Vegetarian, Vegan, Non-Vegetarian</h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single_menu_list" id="containerForRestaurantDisplay">
                                                <img
                                                    src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/h-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg"
                                                    alt=""/>
                                                    <div className="menu_content">
                                                        <h4>McDonald's<span>$5</span></h4>
                                                        <p>Nuggets, Burgers, Beverages, Coffee, Salads, Burritos</p>
                                                        <h5>American, Non-Vegetarian</h5>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single_menu_list" id="containerForRestaurantDisplay">
                                                <img
                                                    src="https://img.grouponcdn.com/deal/oQL9HWSYQo9PQxYG2mBC/YH-2048x1229/v1/sc600x600.jpg"
                                                    alt=""/>
                                                    <div className="menu_content">
                                                        <h4>Indian Palace<span>$15</span></h4>
                                                        <p>North Indian, Rice, Breads, Curries</p>
                                                        <h5>Indian, Vegetarian, Vegan, Non-Vegetarian</h5>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="single_menu_list" id="containerForRestaurantDisplay">
                                                <img
                                                    src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg"
                                                    alt=""/>
                                                    <div className="menu_content">
                                                        <h4>Kha Thai<span>$15</span></h4>
                                                        <p>Soups, Appetizers, Rice, Salads, Grill</p>
                                                        <h5>Thai, Vegetarian, Vegan, Non-Vegetarian</h5>
                                                    </div>
                                            </div>
                                        </div>

                                        <br/><br/><br/><br/><br/>


                                    </div></div>
                                <br/><br/><br/><br/><br/>
                            </section>
                            <br/><br/><br/><br/><br/>
                            <a href="#"></a>
                        </div>


            </div>

        );
    }

}
const mapStateToProps = (state)=> {
    return {
        emailId: state.userId
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}
export default  connect(mapStateToProps, mapDispatchToProps) (LoginDashBoard);