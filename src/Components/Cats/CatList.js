import React, { Component } from 'react';
 
const CatList = (props) => {
  return (
    <div className="myDiv">
      <ol>
      {props.breeds.map(cats => {
        return (
          <div>
            <li>{cats}</li>
          </div>
        )
      }
      )}
      </ol>
   </div>
  )
}
 
export default CatList;
