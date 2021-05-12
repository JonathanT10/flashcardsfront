import React from 'react';
import './collections.css';


function Collections (props) {
let coll = props.collection;
let btn = () => {
    props.btn()
   }

    return(
        
<div className='inline-button'>
    <div  className='button'>
      
      {coll.map(coll => (
          <tr className='button' key={coll.name}>
       <button className='button' onClick={() => btn(coll.name.currentTarget)}>{coll.name}</button> 
       </tr>
      
      ))}
     
      </div>
    
  </div>
   
    );
} 




export default Collections;