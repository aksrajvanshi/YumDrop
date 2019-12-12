import React, {Component} from "react";
import {connect} from "react-redux";
import "./restaurantDashboardCSS.css"

const mapStateToProps = (state)=>{
    return {
        restaurantId: state.userId
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        setUserEmail: (evt) => dispatch({type: "setUserId", emailId: evt}),
        signOut: () => dispatch({type: "signOut"})
    }
}

class RestaurantDashboard extends Component{
    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind(this);
    }
    state = {
        Name: "Restaurant 1",
        restaurantPrimaryEmailId: "Restaurant 1",
        data: [],
        deleteItemThing: "",
        deleteItemThing1: []
    }
    componentWillMount() {
        let currentComponent = this;
        fetch('/getAllRestaurantDishes',{
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                restaurantId: this.props.restaurantId,})})
            .then(res => {
                console.log(res)
                return res.json()
            }).then(response => {
                currentComponent.setState({
                    data: response
                })
            console.log(response)})
        console.log(this.state.data)
        }





    forwardToAddingAnItem = () => {
        this.props.history.push("/RestaurantAddMenuForm");
    }

    signOut = () => {
        this.props.signOut();
        this.props.history.push('/');
    }

    editDishItem = (itemName) => {
        console.log("Edit this item")
        console.log(itemName)
    }

    deleteItem = (event) =>  {
        console.log("Inside this")
        console.log(event.target.dataset.value)
        this.setState({
            deleteItemThing1: event.target.dataset.value,
            deleteItemThing: event.target.dataset.value
        })
        console.log(this.state.deleteItemThing1)
        console.log(this.state.deleteItemThing)
    }

    forwardToRestaurantSettingsPage = () => {
        this.props.history.push("/RestaurantSettingsPage");
    }

    forwardToLogiDashboard = () => {
        this.props.history.push("/RestaurantDashboard");
    }

    handleClick(item) {
        console.log(item);



        let currentComponent = this;
        fetch('/deleteDish',{
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                restaurantId: this.props.restaurantId,
                dishName: item.dishName
            })})
            .then(res => {
                console.log(res.status)
                if (res.status === 200){
                    fetch('/getAllRestaurantDishes',{
                        method: 'POST',
                        redirect: 'follow',
                        headers: {
                            "Content-Type": "application/json",
                            'Access-Control-Allow-Origin': '*'
                        },
                        body: JSON.stringify({
                            restaurantId: this.props.restaurantId,})})
                        .then(res => {
                            console.log(res)
                            return res.json()
                        }).then(response => {
                        currentComponent.setState({
                            data: response
                        })
                        console.log(response)})
                    console.log(this.state.data)
                }
            })

    }

    forwardToChatFeature = () => {
        this.props.history.push('/chatFeature')
    }
    render() {
        if(this.props.restaurantId === null) {
            this.props.history.push('/')
        }

        let mapFunction = this.state.data.map((d,itemName) =>{
                return (
                    <tr key={itemName}>
                        <td><img
                            src="https://assets3.thrillist.com/v1/image/2793388/size/gn-gift_guide_variable_c.jpg" height="50px" width="50px"
                            alt=""  /></td>
                        <td>{d.dishName}</td>
                        <td>{d.dishDescription}
                        </td>
                        <td>{d.dishPrice}</td>
                        <td className="td-actions">


                            <a className="btn btn-small">
                                <i className="btn-icon-only icon-remove" onClick={this.handleClick.bind(this, d)} ></i>
                            </a>
                        </td>
                    </tr>

                )})
        return(
            <div>
                <header>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet" id="bootstrap-css"/>
                    <script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

                    <nav className=" navbar navbar-expand-lg navbar-dark ">
                        <div className="container">
                            <a className="navbar-brand " href="#" onClick={this.forwardToLogiDashboard}>YumDrop</a>
                            <div className="collapse navbar-collapse" id="navBarLinks">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item" >
                                        <a className="nav-link" onClick={this.forwardToRestaurantSettingsPage}><i
                                            className="fa fa-fw fa-user"></i>Settings</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" onClick={this.signOut}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>



                <div className="span7">
                    <div className="widget stacked widget-table action-table">
                        <div className="widget-header">
                            <i className="icon-th-list"></i>
                            <h3>Dishes</h3>
                        </div>
                        <div className="widget-content">

                            <table className="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>Dish Image</th>
                                    <th>Dish Name</th>
                                    <th>Dish Description</th>
                                    <th>Dish Price</th>
                                    <th className="td-actions"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {mapFunction}
                                </tbody>
                            <tfoot>
                            <td></td>
                            <td></td>
                           <td> <a
                                className="btn btn-success btn-block" onClick={this.forwardToAddingAnItem}>Add item <i className="fa fa-angle-right"></i></a>
                           </td>
                            </tfoot>
                            </table>

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantDashboard);