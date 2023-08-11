import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../styles.module.css';

export default class ImageGallery extends React.Component {
  render() {
    return(
      <ul className={css.ImageGallery}>
        <ImageGalleryItem data={this.props.images} />
      </ul>
    );
  }
}
