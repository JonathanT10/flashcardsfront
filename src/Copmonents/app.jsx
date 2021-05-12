import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav/nav';
import Flashcard from '../Copmonents/flashcard/flashcard';
import Collections from '../Copmonents/collections/collection';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            collection: [],
            choice: [],
            science: [],
            algebra: []
         }
    }

  
    async componentDidMount(){
        let result = await axios.get("http://localhost:5000/api/collections");
        this.setState({
            collection: result.data
        })
        console.log(this.state.collection);
    }

    // async componentDidMount(){
    //     let result = await axios.get("http://localhost:5000/api/collections/608ab61699ee6440388b79fc");
    //     this.setState({
    //         history: result.data.cardCollection
    //     });
    //     console.log(this.state.history);
    // }

   collButton(collName){
       
        let pickedColl = this.state.collection.filter(collName => {
            this.setState({
                choice: collName.cardCollection
            })
            console.log(collName);
        
        return collName;
       })
   
    }
   

  nextCard = () => {

  }
    

    render() {

        return (
            <div>
            <h3><Nav /></h3>
            <h1>Flashcards</h1>
            <h2>Categorys:</h2>
            
               <h2><Collections collection={this.state.collection} 
                            btn={() => this.collButton()}/></h2> 
             
               <h2><Flashcard category = {this.state.choice}/></h2> 
            </div>
        );
    }
}

export default App;