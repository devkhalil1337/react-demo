import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component{
    state = {
        count:0,
        products:[{name:"product 1"},{name:"product 2"}]
    }

    handleIncreament = () =>{
        this.setState({count: this.state.count + 1});
    }
    handleDecreament = () =>{
        const {count} = this.state;
        if(count === 0){
            this.setState({count: 0});
            return;
        }
        this.setState({count: this.state.count - 1});
    }

     getCounter(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }

    getBedgeClass(){
        const {count} = this.state;
        let classes = "badge badge-";
        classes += count === 0 ? "warning" : "primary";
        return classes;
    }

    render(){
        return (
            <div className="container">
                <h1>Cart</h1>
                <div className="row">
                    <div className="col-md-4">
                        Product 1
                    </div>
                    <div className="col-md-4">

                        <button className="badge-primary" onClick={this.handleDecreament}>decreament</button> <span className={this.getBedgeClass()}>{this.getCounter()} </span>  <button className="badge-primary" onClick={this.handleIncreament}>Increament</button>
                    </div>
                    <div className="col-md-4">
                        $43.00
                    </div>
                </div>
            </div>
        )
    }
}


export default Counter;