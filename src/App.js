import NavBar from "./components/navbar"
import Counters from "./components/counters"
import React, {Component} from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/notfound";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
class App extends Component {
    state = {
        counters:[{id:1,value:1},{id:2,value:0},{id:3,value:5},{id:4,value:0}]
    }
    onDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }
    handleIncreament = counter =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters})
    }
    render() {
        return (
                <Router>
                    <div className="app">
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/About" component={About} />
                            <Route exact path="/Contact" component={Contact} />
                            <Route component={NotFound} />
                        </Switch>

                    </div>
                {/* <div id="main" className="conainter">
                    <Counters counters={this.state.counters} onDelete={this.onDelete} onIncreament={this.handleIncreament} />
                </div> */}

                </Router>
        );
    }
}

export default App;
