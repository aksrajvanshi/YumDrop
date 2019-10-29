import React, {Component} from "react";

class Trying extends Component{
    render() {
        const data =[{"name":"test1", "hey":"hello"},{"name":"test2", "hey":"hey"}];
        return (
            <div>
                {data.map(function(d, idx, idx2){
                    return (<div>
                        <li key={idx}>{d.name} </li>
                        <li>hey</li>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Trying