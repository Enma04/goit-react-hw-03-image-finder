import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends React.Component {
  render() {
    return(
      <ul className="gallery">
        <ImageGalleryItem data={this.props.images} />
      </ul>
    );
  }
}
