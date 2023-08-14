import { Component } from "react";
import ImageGallery from "./ImageGallery";
import { SearchBar } from "./Searchbar/Searchbar";



export class App extends Component {

  state = {
    searchQuery: '',
    images: [],
    page: 1,
    selectedImage: null,
    alt: null,
    status: 'idle',
    error: null,
  };

  handleFormSubmit = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return;
    }
    this.resetState();
    this.setState({ searchQuery });
  };
  handleSelectedImage = (largeImageUrl, tags) => {
    this.setState({
      selectedImage: largeImageUrl,
      alt: tags,
    });
  };
  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
      </>
    );
  }
};
