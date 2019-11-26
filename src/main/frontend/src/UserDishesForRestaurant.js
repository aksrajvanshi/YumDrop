import React, { Component } from "react";
import {connect} from "react-redux";


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
class UserDishesForRestaurant  extends Component{
    state = {
        restaurantDishesForUsers: [],
        restaurantDetails: [],
        restaurantName: "",
        restaurantPrimaryEmailId: "",
        primaryPhoneNumber: "",
        fiveStarRating: 0,
        fourStarRating: 0,
        threeStarRating: 0,
        twoStarRating: 0,
        onestartRating: 0,
        numberOfThreeStarRating: 0,
        numberOfTwoStarRating: 0,
        numberOfOneStarRating: 0,
        numberOfFourStarRating: 0,
        numberOfFiveStarRating: 0

    }
    componentDidMount() {
        let currentComponent = this;

        fetch('/getRestaurantDataForUserView', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantId: "abc12"
            }),
        }).then(function(response) {
            console.log("returned");
            console.log(response);
            return response.json();
        }).then(function(data) {
            console.log(data);
            console.log(data.restaurantId, data.restaurantName);
            const userName = data.userName;
            console.log("Will mount username", userName);
            currentComponent.setState({
                restaurantName: data.restaurantName,
                restaurantPrimaryEmailId: data.restaurantPrimaryEmailId,
                primaryPhoneNumber: data.primaryPhoneNumber,
                fiveStarRating: data.fiveStarRating,
                fourStarRating: data.fourStarRating,
                threeStarRating: data.threeStarRating,
                twoStarRating: data.twoStarRating,
                onestartRating: data.onestartRating,
                numberOfThreeStarRating: data.numberOfThreeStarRating,
                numberOfTwoStarRating: data.numberOfTwoStarRating,
                numberOfOneStarRating: data.numberOfOneStarRating,
                numberOfFourStarRating: data.numberOfFourStarRating,
                numberOfFiveStarRating: data.numberOfFiveStarRating
            });
            console.log(currentComponent.state.restaurantName);
        }).then( res=>{
            fetch('/getDishesAvailableFromTheRestaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                restaurantId: this.props.restaurantId
            }),
        })}).then(res => {
            return res.json();
        }).then(res=>{
            console.log("Response received")
            console.log(res)
            console.log(res.length)
            let x = [];
            for (let i=0; i<res.length;i++){
                x[i] = res[i].DishDetails;
            }
            currentComponent.setState({
                restaurantDishesForUsers: x
            })
            console.log(this.state.restaurantDishesForUsers);
        })
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
        return(
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
                                        <a className="nav-link" onClick={this.signOut}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <br/>
                <br/>
                <div className="rgba-black-light">
                    <br/><br/><br/>
                    <div className="">
                        <li>
                            <p id="para">{this.state.restaurantName}</p>
                        </li>
                    </div>
                </div>
                <div className="how-section1">


                {this.state.restaurantDishesForUsers.map((item, index) => {
                    return(
                        <div className="row">
                            <div className="col-md-6 how-img">
                                <img src={item.dishImageUrl}
                                     className="square img-fluid" alt=""/>
                            </div>
                            <div className="col-md-6">
                                <h4>{item.dishName}</h4>
                                <h4 className="subheading">{item.dishDescription}</h4>

                                <button className="btn btn-success">Add to cart</button>
                            </div>
                        </div>
                    )}
                )}
                </div>
                <div>
                    <StarRatings
                        rating={this.state.fiveStarRating}
                        starRatedColor="blue"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                    /> <p>({this.state.numberOfFiveStarRating})</p>
                    <StarRatings
                        rating={this.state.fourStarRating}
                        starRatedColor="blue"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                    /> <p>({this.state.numberOfFourStarRating})</p>
                    <StarRatings
                        rating={this.state.threeStarRating}
                        starRatedColor="blue"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                    /> <p>({this.state.numberOfThreeStarRating})</p>
                    <StarRatings
                        rating={this.state.twoStarRating}
                        starRatedColor="blue"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                    /> ( <p>{this.state.numberOfTwoStarRating})</p>
                    <StarRatings
                        rating={this.state.onestartRating}
                        starRatedColor="blue"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                    />  (<p>{this.state.numberOfOneStarRating})</p>
                </div>

            </div>
        )
    }

}

export default  connect(mapStateToProps, mapDispatchToProps)  (UserDishesForRestaurant);