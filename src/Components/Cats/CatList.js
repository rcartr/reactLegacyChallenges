import React, { Component } from 'react';
 
const CatList = (props) => {
  return (
    <div className="catDiv">
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
