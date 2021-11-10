import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import BackIcon from "../../assests/svg/backbutton.svg"
import "./imageView.style.css";

class ImageView extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     showDetails: false,
  //   }
  // }
  render() {
    const {image, history } = this.props;
    console.log("props imageview", image)
    const data = image[0].data;
    // const {showDetails} = this.state
    return (
      <div className="image-container" >
        <div className="subRedditDetails">
            <div className="subRedditHeading">
                <img className="backIcon" alt="back" src={BackIcon} onClick={()=> history.push('/')} />
                <h2>SubReddit: /{data.subreddit}</h2>
            </div>
            <p className="subRedditId">ID: {data.subreddit_id}</p>
        </div>
        <img className="image" alt="thumbnail" src={image[0].data.url} />
        <div className="imageDetails">
        <h2>{image[0].data.author}</h2>
        <p className="imageTitle">{image[0].data.title}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ImageView);
