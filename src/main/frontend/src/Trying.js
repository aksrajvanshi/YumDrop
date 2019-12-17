import React, {Component} from "react";

class Trying extends Component{
    dateShow = () =>{
        const dateObject = new Date()
        console.log(new Date(Date.parse("2005-07-08T00:00:00")).toString());
        const dateToFormat = new Date('1976-04-19T12:59-0500');
        console.log(dateToFormat)
    }
    render() {
        const data =[{"name":"test1", "hey":"hello"},{"name":"test2", "hey":"hey"}];
        return (
            <div>
                <button onClick={this.dateShow}>Click me</button>
            </div>
        );
    }
}

export default Trying