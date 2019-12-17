import React, { Component } from "react";
import './MySettingsPage.css';
import {connect} from "react-redux";
import './LoginDashBoardCSS.css';
import {Modal} from "react-bootstrap";


const mapStateToProps = (state)=>{
    return {
        userEmailId: state.userId,
        restaurantId: state.userSelectedRestaurant
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}


class MySettingsPage extends Component{
    state = {
        activeOrderForUserDisplay: [],
        userName: "",
        userEmailId:  "",
        userPhoneNumber: "",
        restaurantName: "",
        restaurantDishResults: [],
        errorSelect: false,
        id: 1
    }
    returnToLoginDahboard = () => {
        this.props.history.push('/errorPageForRegistration');
    }
    forwardToMyCurrentLocation = () => {
        this.props.history.push('/MyCurrentLocation');
    }

    forwardToSettingsAddresses = () => {
        this.props.history.push('/UserSettingsPageAddresses')
    }

    settingsPage = () => {
        this.props.history.push('/MySettingsPage')
    }

    goBackToProfileSettingsPage = () => {
        this.props.history.push('/MySettingsPage')
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    goBackToLoginDashboard = () => {
        this.props.history.push('/LoginDashboard')
    }

    forwardToMyCart = () => {
        this.props.history.push('/MyCart')
    }

    goToActiveOrdersPage = () => {
        this.props.history.push('/ActiveOrders')
    }

    forwardTochatWithRestaurant =() => {
        this.props.history.push('/chatFeature')
    }

    chatWithRestaurantAndDeliveryAgent = () => {
        let currentComponent = this;
        fetch('/chatWithRestaurantAndDeliveryAgent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: "maithreyi.prabhu95@gmail.com",
                restaurantId: this.props.restaurantId
            }),
        }).then(res => {
            if (res.status === 200){
                this.goToChatFeature();
            }
            else{
                console.log("Cant Chat")
            }
        })
    }

    chatWithDeliveryAgent = () => {
        let currentComponent = this;
        fetch('/chatWithDeliveryAgentOnly', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: "maithreyi.prabhu95@gmail.com",
            }),
        }).then(res => {
            if (res.status === 200){
                this.goToChatFeature();
            }
            else{
                console.log("Cant Chat")
            }
        })
    }
    chatWithRestaurant = () => {
        let currentComponent = this;
        console.log("this is inside chat")
        console.log(this.props.restaurantId)
        console.log("Entered chat with restuarnat")
        fetch('/chatWithRestaurantOnly', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: "maithreyi.prabhu95@gmail.com",
                restaurantId: this.props.restaurantId,
                deliveryAgent: 0
            }),
        }).then(res => {
            if (res.status === 200){
                console.log("inside this")
                this.forwardTochatWithRestaurant();
            }
            else{
                console.log("Cant Chat")
            }
        })
    }

    componentWillMount() {
        let currentComponent = this;
        fetch('/getCurrentActiveOrderForUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: currentComponent.props.userEmailId
            }),
        }).then(res => {
            if (res.status !== 200){
                this.setState({
                    errorSelect: true
                })
            }
            return res.json();
        }).then(response => {
                console.log("Entereed")
                for(let i=0; i<response.length;i++){
                    let beforeSplitting = response[i].orderContents.split(',');
                    console.log(beforeSplitting)
                    response[i].ordercontents = beforeSplitting.join(' ');
                    console.log("after", response[i].ordercontents);
                    console.log(response[i])
                }
                for(let i=0;i<response.length;i++){
                    let beforeSplit = response[i].ordercontents
                    let afterSplit = "";
                    for(let j=0;i<beforeSplit;j++){
                        if (beforeSplit[j] != ';'){
                            afterSplit = afterSplit + beforeSplit[j];
                        }else{
                            afterSplit = afterSplit + " ";
                        }
                    }
                    response[i].ordercontents = afterSplit;
                }
                currentComponent.setState({
                    activeOrderForUserDisplay: response
                })
                console.log(response)}).then(res => {

        })
        }



    goToChatFeature = () => {
        this.props.history.push('/chatFeature')
    }


    render() {
        let mapDishesForUserView = this.state.activeOrderForUserDisplay.map((d,itemName)=>
        {
            return(

                <tr key={itemName}>
                    <td>{d.orderId}</td>

                    <td>{d.orderContents.split(',')}</td>
                    <td>{d.orderPrice}
                    </td>
                    <td>{d.createdAt}</td>

                </tr>





            )
        });

        return (
            <div>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#" onClick={this.goBackToLoginDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <a className="nav-link"><i
                                            className="fa fa-fw fa-user" onClick={this.goBackToLoginDashboard}/>Home</a>
                                    </li>


                                    <li>
                                        <a className="nav-link" onClick={this.signOut}> Sign Out </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4 pb-5">

                            <div className="author-card pb-3">
                                <div className="author-card-cover"
                                >
                                </div>
                                <div className="author-card-profile">
                                    <div className="author-card-avatar"><img
                                        src="https://www.caretechfoundation.org.uk/wp-content/uploads/anonymous-person-221117.jpg" />
                                    </div>

                                </div>
                            </div>
                            <div className="wizard">
                                <nav className="list-group list-group-flush">
                                    <a className="list-group-item" href="#">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div><i className="fe-icon-shopping-bag mr-1 text-muted"></i>
                                                <div className="d-inline-block font-weight-medium text-uppercase">{this.state.restaurantName}
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                    <a className="list-group-item" href="#" onClick={this.settingsPage}>
                                        <i className="fe-icon-user text-muted"></i>My Settings
                                    </a>
                                    <a className="list-group-item" href="#" onClick={this.forwardToSettingsAddresses}>
                                        <i className="fe-icon-map-pin text-muted"></i>Address
                                    </a>
                                    <a className="list-group-item active" href="#" onClick={this.forwardToSettingsAddresses}>
                                        <i className="fe-icon-map-pin text-muted"></i>Active Orders
                                    </a>
                                    <a className="list-group-item " href="#" onClick={this.forwardToMyCart}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div><i className="fe-icon-heart mr-1 text-muted"></i>
                                                <div className="d-inline-block font-weight-medium text-uppercase">My Cart
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="list-group-item " href="#" onClick={this.goToChatFeature}>
                                        <i className="fe-icon-map-pin text-muted"></i>chat with restaurant
                                    </a>
                                    <a className="list-group-item " href="#" onClick={this.goToChatFeature}>
                                        <i className="fe-icon-map-pin text-muted"></i>chat with delivery agent
                                    </a>
                                    <a className="list-group-item " href="#" onClick={this.goToChatFeature}>
                                        <i className="fe-icon-map-pin text-muted"></i>Group chat
                                    </a>
                                </nav>
                            </div>
                        </div>

                        <div className="col-lg-8 pb-5">
                            <form className="row">
                                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
                                <div className="container">

                        <div className="widget-content" id="activeOrdersTableForUser">

                            <table className="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th id="dishImageForActiveOrderUserView">Order Id</th>
                                    <th id="dishNameForActiveOrderUserView">Order Contents</th>
                                    <th id="dishPriceForActiveOrderUserView">Order Price</th>
                                    <th id="dishDescriptionForUserView">Created At</th>

                                </tr>
                                </thead>
                                <tbody>

                        {mapDishesForUserView}

                                </tbody>
                                <tfoot>
                                <tr>



                                </tr>


                                </tfoot>


                    </table>
                        </div></div>
                            </form></div></div></div>
                <Modal
                                    show={this.state.errorSelect}
                                    animation={false}
                                    id="modal"
                                >
                                    <div className="container">
                                        <div className="row">
                                            <div className="main">
                                                <div className="login-form">
                                                    <form>
                                                        <h2 className="text-center">There are no Active Orders</h2>
                                                        <div className="form-group">
                                                            <button onClick={this.goBackToLoginDashboard} type="submit"
                                                                    className="btn btn-primary btn-lg btn-block login-btn">Go to Home
                                                            </button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                </Modal></div>


        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (MySettingsPage);