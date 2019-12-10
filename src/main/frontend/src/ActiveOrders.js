import React, { Component } from "react";
import './MySettingsPage.css';
import {connect} from "react-redux";
import './LoginDashBoardCSS.css';
import {Modal} from "react-bootstrap";


const mapStateToProps = (state)=>{
    return {
        userEmailId: state.userId
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
                userEmail: "maithreyi.prabhu95@gmail.com"
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
                userEmail: "maithreyi.prabhu95@gmail.com"
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
        console.log("Entered chat with restuarnat")
        fetch('/chatWithRestaurantOnly', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userEmail: "maithreyi.prabhu95@gmail.com",
                restaurantId: "abc12"
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
                userEmail: "maithreyi.prabhu95@gmail.com"
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
                    console.log(response[i].createdAt)
                }
                currentComponent.setState({
                    activeOrderForUserDisplay: response
                })
                console.log(response)})
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

                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>


                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#" onClick={this.goBackToLoginDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <a className="nav-link"><i
                                            className="fa fa-fw fa-user" onClick={this.goBackToLoginDashboard}/>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.forwardToMyCart}><i
                                            className="fa fa-fw fa-user"/>Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"   onClick={this.settingsPage} ><span>Settings</span></a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Sign Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>



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

                </Modal>

                <br/>
                <br/>
                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
                <div className="span7">
                    <div className="widget stacked widget-table action-table">
                        <div className="widget-header">
                            <i className="icon-th-list"></i>
                            <h3>Active Order</h3>
                        </div>
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

                                        <td><a
                                            className="btn btn-success btn-block" onClick={this.chatWithRestaurant}>chat With Restaurant <i className="fa fa-angle-right"></i></a>
                                        </td>
                                    <td><a
                                        className="btn btn-success btn-block" onClick={this.chatWithDeliveryAgent}>chat With Delivery Agent <i className="fa fa-angle-right"></i></a>
                                    </td>
                                    <td><a
                                        className="btn btn-success btn-block" onClick={this.chatWithRestaurantAndDeliveryAgent}>chat With Restaurant And Delivery Agent<i className="fa fa-angle-right"></i></a>
                                    </td>

                                </tr>


                                </tfoot>


                    </table>
                        </div></div></div></div>


        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (MySettingsPage);