import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../styles.module.css';

export default class ImageGallery extends React.Component {
  render() {
    const { images } = this.props;
    return(
      <ul className={css.ImageGallery}>
        <ImageGalleryItem data={images} />
      </ul>
    );
  }
}
