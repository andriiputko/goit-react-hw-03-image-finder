import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, selectedImage }) => {
  return (
    <ul>
        {images.map(({id, webformatURL, tags, largeImageURL}) => (
        
          <ImageGalleryItem
            key={id}
            smallUrl={webformatURL}
            tags={tags}
            selectedImage={() => selectedImage(largeImageURL, tags)}
          />
        
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.func,
};
