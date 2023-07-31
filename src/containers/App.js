import React, { Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
    constructor() {
        super()
        this.state = {
            Developers: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ Developers: users })});
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { Developers, searchfield } = this.state;
        const filteredDevelopers = Developers.filter(Developer => {
            return Developer.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !Developers.length ? 
        <h1>Loading</h1> :
        (
                <div className="tc">
                    <h1 className="f1">Developers</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList Developers={filteredDevelopers} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
}

export default App;