import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
        if (this.state.show == true){
        this.setState({ show: !this.state.show }); }
    }

    render() {
        return (

            <div>
                <header>
                    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
                        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                </header>
                <button onClick={this.IncrementItem}>Click to increment by 1</button>
                <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
                <button onClick={this.ToggleClick}>
                    { this.state.show ? <div className="col-md-8 col-sm-8 col-xs-8">
                        <a href="#" className="btn btn-success btn-product"><span
                            className="glyphicon glyphicon-shopping-cart"></span> Add to Cart</a>
                    </div> : <div><input type="text"
                                    placeholder={this.state.clicks}
                                         id="form5" className="form-control validate"/><a
                        className="btn icon-btn btn-success" ><button onClick={this.IncrementItem}><span
                        className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success" ></span>Add</button></a>
                        <a className="btn icon-btn btn-info" href="#"><span
                            className="glyphicon btn-glyphicon glyphicon-share img-circle text-info" onClick={this.DecreaseItem}></span>Share</a>
                        <a className="btn icon-btn btn-warning" href="#"><span
                            className="glyphicon btn-glyphicon glyphicon-minus img-circle text-warning" onClick={this.DecreaseItem}></span>Remove</a></div> }
                </button>
                { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
            </div>
        );
    }
}

export default App;
