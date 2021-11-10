import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImageView from "../../Components/imageView/imageView.component";


class ShowDetails extends Component {


  render() {
    const { images, match } = this.props;
    const selectedImage = images.filter((item) =>
      match.url.includes(item.data.id)
    );
    
    return (
      <div>
        <ImageView image={selectedImage} />
      </div>
    );
  }
 
}

export default withRouter(ShowDetails);
