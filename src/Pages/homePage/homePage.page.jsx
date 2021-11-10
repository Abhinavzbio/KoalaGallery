import React, { Component } from "react";
import { CardList } from "../../Components/card-list/card-list.component";
import { Searchbox } from "../../Components/searchBox/searchBox.component";
import  "./homePage.style.css";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
    };
    
  }

  

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  render() {
    const {images} = this.props;
    const {  searchInput } = this.state;
 
    const filteredImages = images.filter((item) =>
      item.data.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    
    return (
      <div >
        <h1 className="heading">Gallery</h1>
        <Searchbox
          placeholder="Search Images"
          handleChange={this.handleChange}
        />
        <CardList images={filteredImages}></CardList>
      </div>
    );
  }
}

export default HomePage;
