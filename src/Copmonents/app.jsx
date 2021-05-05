import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav/nav';
import Flashcard from './flashcard'

class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            collection: [],
            history: [],
            science: [],
            algebra: []
         }
    }

    async componentDidMount(){
        let result = await axios.get("http://localhost:5000/api/collections");
        this.setState({
            collection: result.data
        });
         const   [history, science, algebra] = this.state.collection;
         this.setState({
             history: history,
             science: science,
             algebra: algebra
         })
        
        console.log(this.state.collection);
        console.log(this.state.history);
    }

  
    render() {
        
        return (
            <div>
            <h3><Nav /></h3>
            <h1>Flashcards</h1>
            <h2>Categorys:</h2>
            <h3>{this.state.history.name}</h3>
            <h3>{this.state.science.name}</h3>
            <h3>{this.state.algebra.name}</h3>
            <h2><Flashcard card={this.state.history}/></h2>
            </div>
        );
    }
}

export default App;