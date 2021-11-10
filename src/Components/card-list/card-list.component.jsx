import React from "react";
import "./card-list.style.css";
import Card from "../card/card.component";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.images.map((image) => {
        const imageData = image.data
        return(
        
        <Card key={imageData.id} image={imageData} />
      )})}
    </div>
  );
};
