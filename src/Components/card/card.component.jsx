import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./card.style.css";

class Card extends Component {

  render() {
    const {image, history} = this.props;   
    return (
      <div className="card-container" onClick = {() => {
        history.push(`/showDetails/:${image.id}`)
    }
    }>
        <img className="thumbnail" alt="thumbnail" src={image.url} />
        
        <p className="title">{image.title}</p>
       
      </div>
    );
  }
}

export default withRouter(Card);
