import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav/nav';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            collection: []
         }
    }

    async componentDidMount(){
        let result = await axios.get("url");
        this.setState({
            collection: result.data
        })
    }
    
    render() {
        return (
            <div>
            <h3><Nav /></h3>
            <h1>Flashcards</h1>
            </div>
        );
    }
}

export default App;