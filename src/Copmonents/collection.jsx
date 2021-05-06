import React from 'react';
import './collection.css';

function Collections (props) {
let coll = props.card;
    return(
        
<div className='card-container'>
    <div className='card'>
      <div className='front'>
      {coll.map(coll => (
              <button className='card'>{coll.name}</button>
              ))}  

      </div>
    </div>
  </div>
   
    );
} 

export default Collections;