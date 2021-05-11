import React from 'react';
import './collection.css';


function Collections (props) {
let coll = props.collection;
let btn = () => {
    props.btn()
   }
   
    return(
        
<div className='card-container'>
    <div  className='card'>
      
      {coll.map(coll => (
          <tr className='card' key={coll.name}>
       <button className='card' onClick={() => btn(coll.name.currentTarget)}>{coll.name}</button> 
       </tr>
      
      ))}
     
      </div>
    
  </div>
   
    );
} 




export default Collections;