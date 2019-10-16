import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class SearchReultBox extends Component {
    state = {
        imageSource: this.props.imageSource,
        restaurantName: this.props.restaurantName,
        restaurantLocation: this.props.restaurantLocation,
        restaurantTags: this.props.restaurantTags,
        restaurantRating: this.props.restaurantRating,
        restaurantMenuPrice: this.props.restaurantMenuPrice,
        restaurantDeliveryTime: this.props.restaurantDeliveryTime
    };

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

    render () {
        return (
            <div className="searchResultBox">
                <img src={this.state.imageSource} className="restaurantImage"/>
                <label>{this.state.restaurantName}</label>
                <p>{this.state.restaurantLocation}</p>
                <p>{"Menu Price: " + this.state.restaurantMenuPrice}</p>
                <p>{"Rating: " + this.state.restaurantRating}</p>
                <p>{"Tags: " + this.formatTags()}</p>
                <p>{"Delivery Time: " + this.state.restaurantDeliveryTime}</p>
            </div>
        );
    }
}
export default SearchReultBox;