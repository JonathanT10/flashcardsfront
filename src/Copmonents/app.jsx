import React, { Component } from 'react';
import axios from 'axios';

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
            <h1>Flashcards</h1>
        );
    }
}

export default App;