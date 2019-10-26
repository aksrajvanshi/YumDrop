import React, { Component } from "react";
import './LoginDashBoardCSS.css';

class SearchItem extends Component {
    state = {
        restaurantImage: this.props.restaurantImage,
        restaurantName: this.props.restaurantName,
        restaurantTags: this.props.restaurantTags
    }

    formatTags = () => {
        var formatedTags= "";
        for (var i = 0; i < this.state.restaurantTags.length; i++){
            if (i === this.state.restaurantTags.length - 1) {
                formatedTags += this.state.restaurantTags[i];
            }
            else {
                formatedTags += this.state.restaurantTags[i] + ", ";
            }
        }
        return formatedTags;
    }

    render() {
        return (
        <div className="productbox">
            <img src={this.state.restaurantImage} className="img-responsive"/>
            <div className="producttitle">{this.state.restaurantName}</div>
            <p className="text-justify">{this.formatTags()}</p>
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