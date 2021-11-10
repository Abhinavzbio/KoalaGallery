import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImageView from "../../Components/imageView/imageView.component";
// import "./showDetails.style.css";

class ShowDetails extends Component {


  render() {
    const { images, match } = this.props;
    const selectedImage = images.filter((item) =>
      match.url.includes(item.data.id)
    );
    console.log("showDetails props", this.props);
    console.log("Filtered", match);
    return (
      <div>
        <ImageView image={selectedImage} />
      </div>
    );
  }
  componentWillUnmount() {
      const {history, match} = this.props
      history.push(`${match.url}`);
  }
}

export default withRouter(ShowDetails);
