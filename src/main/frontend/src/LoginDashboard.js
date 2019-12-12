import React, { Component } from "react";
import './LoginDashBoardCSS.css';
import {connect} from "react-redux";


class LoginDashBoard extends Component{
    constructor(props) {
        super(props);

    }

    state = {
        userEmailId : this.props.emailId,
        searchResults: [{"restaurantAddress": "restaurantAddress"}],
        userAddress: "800 N Union St, Bloomington, IN 47408, USA",
        searchQuery: "",
        recommendedRestaurants: []
    }

    forwardToChatFeature = () => {
        this.props.history.push('/chatFeature')
    }
    componentDidMount () {
        let currentComponent = this
        console.log()
        fetch('/getAllReccommendedRestaurants',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmailId: this.props.userEmailId
            }),
        }).then(res => {
            return res.json();
        }).then(res=>{
            currentComponent.setState({
                recommendedRestaurants: res
            })
            console.log(this.state.recommendedRestaurants)
            if (res.status !== 200) {
            }else {
            }


        })

    }

    handleClick(item) {
        console.log(item);
        this.props.setUserSelectedRestaurant(item.restaurantId)
        this.forwardToMyCart();
    }



    handleSearchChange = (event) => {
        this.setState({searchQuery: event.target.value})
    }

    forwardToSettingsPage = () => {
        this.props.history.push('/MySettingsPage');
    }

    forwardToMyCart = () => {
        this.props.history.push('/dishesForUserView')
    }

    onClick= (event) => {
        this.forwardToSettingsPage();
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    render() {



        let mapForRecommendedRestaurants = this.state.recommendedRestaurants.map((d,itemName)=>
        {

            return(
                <div className="col-md-4">
                    <div className="single_menu_list">
                        <img onClick={this.handleClick.bind(this, d)}
                            src={d.restaurantImageURL}
                            alt=""/>
                            <br/>
                            <br/>
                            <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="menu_content">
                            <h4 onClick={this.handleClick.bind(this, d)}>{d.restaurantName} <span>{d.ratings}</span></h4>
                            <p onClick={this.handleClick.bind(this, d)}>{d.restaurantAddress}</p>
                            <h5>Indian, Vegetarian, Vegan, Non-Vegetarian</h5>

                        </div>

                    </div>
                </div>

            )
        })

        return (
            <div>
                <head>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                </head>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#">YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">

                                        <a onClick={this.forwardToMyCart} >
                                            <span><strong>Cart</strong></span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"  onClick={this.onClick} ><span>Settings</span></a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>


                <div className="container mt-5">

                    <div className="row">
                        <div className="col-sm-2">
                            <h6>Indian</h6>
                            <img
                                src="https://st2.depositphotos.com/2885805/10593/v/450/depositphotos_105938884-stock-illustration-indian-food-composition.jpg"
                                alt="Rounded Image" height="30%" width="30%" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h6>Mexican</h6>
                            <img
                                src="https://cdn4.iconfinder.com/data/icons/mexican-icons-2/206/Tacos-512.png"
                                alt="Rounded Image" height="25%" width="25%" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h6>Italian</h6>
                            <img
                                src="https://icons-for-free.com/iconfiles/png/512/food+food+italian+food+junk+food+pizza+icon-1320168016349880751.png"
                                alt="Rounded Image" height="25%" width="25%" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h6>American</h6>
                            <img
                                src="https://c8.alamy.com/comp/H797BY/hamburger-traditional-american-fast-food-icon-over-white-background-H797BY.jpg"
                                alt="Rounded Image" height="25%" width="25%" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2">
                            <h6>Thai</h6>
                            <img
                                src="https://image.flaticon.com/icons/png/512/644/644758.png"
                                alt="Rounded Image" height="25%" width="25%" className="rounded img-fluid"/>
                        </div>
                        <div className="col-sm-2" >
                            <h6>Barbecue</h6>
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/food-3-11/128/food_Barbecue-Bbq-Skewer-Kabob-Hot-512.png"
                                height="25%" width="25%" className="rounded img-fluid"/>
                        </div>

                    </div>

                </div>

                <br/>

                <br/>
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
                                <div className="col-xl-12 mb-60" id="headline">
                                    <div className="section-title text-center">
                                        <p>Popular Restaurants Near You</p>
                                        <h4>Restaurants</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-area pt-80">
                        <div className="container" >
                            <div className="row">

                            {mapForRecommendedRestaurants}
                            </div>
                        </div>

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
        signOut: () => dispatch({type: "signOut"}),
        setUserSelectedRestaurant: (evt) => dispatch({type: "setUserSelectedRestaurant", newUserSelectedRestaurant: evt}),
    }
}
export default  connect(mapStateToProps, mapDispatchToProps) (LoginDashBoard);