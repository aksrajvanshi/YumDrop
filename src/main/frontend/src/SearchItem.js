import React, { Component } from "react";
import './LoginDashBoardCSS.css';

class SearchItem extends Component {
    state = {
        restaurantImage: "",
        restaurantName: "",
        restaurantTags: ""
    }
    render() {
        return (
        <div className="productbox">
            <img src={this.state.restaurantImage} />
            <div className="producttitle">{this.state.restaurantName}</div>
            <p className="text-justify">{this.state.restaurantTags}</p>
            <div className="productprice">
                <div className="pull-right">
                <a href="#" className="btn btn-success btm-sm" role="button">Menu <span
                    className="glyphicon glyphicon-cutlery"></span></a>
                </div>
            </div>
        </div>
        );
    }
}

export default SearchItem;