import { render } from '@testing-library/react';
import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component{
    render() {
        const {counters,onIncreament,onDelete} = this.props;
        return(
            <div className="container">
              {counters.map(count => <Counter key={count.id} counter={count} handleIncreament={() => onIncreament(count)}  onDelete={() => onDelete(count.id)} />)} ;
            </div>
        )
    }
}

export default Counters