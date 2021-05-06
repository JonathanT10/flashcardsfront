import React from 'react';

function Flashcard(props) {
    let card = props.card;
    console.log(card);
    return (
        <div className="cardGrid">
          <div>{card}</div>  

        </div>
    );
}



export default Flashcard;