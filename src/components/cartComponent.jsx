import React, { Component } from "react";
class CartComponent extends Component {
  state = {
    count: 0,
    imageUrl:
      "https://cdn4.iconfinder.com/data/icons/tech-support-4/28/speedy_delivery-512.png"
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <React.Fragment>
        <img
          src={this.state.imageUrl}
          alt="Delivery person"
          height="50"
          width="50"
        />
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn bth-secondary btn-sm">Add +</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Uh oh! The Cart looks empty" : count;
  }
}

export default CartComponent;
