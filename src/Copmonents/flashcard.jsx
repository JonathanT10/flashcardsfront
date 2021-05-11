import React from 'react';
import './flashcard.css';

function Flashcard(props) {
    let card = props.category;
    console.log(card);
    
    return (
      <div>
      {card.map(cardC => (
      <div className='card-container'>
      <div className='card'>
        <div className='front'>
          
          <div className='question'>{cardC.front}</div>
        </div>
        <div className='back'>
          <div className='answer'>{cardC.back}</div>
          <div className='category'>{cardC.category}</div>
        </div>
      </div>
    </div>
    ))}
    </div>
    
    );
}



export default Flashcard;