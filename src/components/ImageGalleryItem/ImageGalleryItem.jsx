import PropTypes from 'prop-types';

const ImageGalleryItem = ({tags, smallUrl, selectedImage}) => {
  return (
    <li>
      <img src={smallUrl} alt={tags} onClick={selectedImage} />
    </li>
  );
};


export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  previewImg: PropTypes.string,
  selectedImage: PropTypes.func,
};