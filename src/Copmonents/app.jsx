import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav/nav';
import Flashcard from './flashcard'
import Collections from './collection';

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
        console.log(this.state.collection);
    }

    // collect(){
    //     let collone = this.state.collection.pop();
    //     console.log(collone);
    //     return(collone);
    // }

    //  choice(){
    //     let chocollect = this.state.collection.filter(function(coll)){

    //     }
    // }
  
    render() {
        
        return (
            <div>
            <h3><Nav /></h3>
            <h1>Flashcards</h1>
            <h2>Categorys:</h2>
            
            <h2><Collections card={this.state.collection}/></h2>
            </div>
        );
    }
}

export default App;