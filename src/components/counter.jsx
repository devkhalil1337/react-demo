import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component{

    // handleDecreament = () =>{
    //     const {count} = this.state;
    //     if(count === 0){
    //         this.setState({count: 0});
    //         return;
    //     }
    //     this.setState({count: this.state.count - 1});
    // }

     getCounter(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    getBedgeClass(){
        const {value} = this.props.counter;
        let classes = "badge badge-";
        classes += value === 0 ? "warning" : "primary";
        return classes;
    }

    render(){
        return (
            <div className="container">
                <h1>Cart</h1>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <span className={this.getBedgeClass()}>{this.getCounter()} </span>  <button className="badge-primary" onClick={() => this.props.handleIncreament(this.props.counter)}>Increament</button>
                    </div>
                    <div className="col-md-4">
                    <button className="badge-danger" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Counter;