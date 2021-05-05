import React from 'react';

function Flashcard(props) {
    let card = props
    return (
        <div className="cardGrid">
            {card.name}

        </div>
    );
}



export default Flashcard;