import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { getPhotos } from 'api/photos';
import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ImageGallery extends Component {
  state = {
    photos: [],
    page: 0,
    per_page: 12
  };

  componentDidMount () {
    this.fetchPhotos();

  }


  fetchPhotos = async () => {
    // const {page, per_page} = this.state;
    // const {searchQuery} = this.props;

    try {
        const { images } = await getPhotos()

        // if(!photos.length) {
        //     throw new Error("No matches found")
        // }
 
        this.setState({
            photos: images
        })
        console.log(this.state.photos)
    } catch(error) {
        toast.error(`Sorry something went wrong`);
    }
  }
  

  render() {
    return (
    <ul>
       {this.state.photos.map(({ id, webformatURL}) => {
            <ImageGalleryItem
            key={id}
            smallUrl={webformatURL}
        />
       }
         
       )}
    </ul>)
  }
}
