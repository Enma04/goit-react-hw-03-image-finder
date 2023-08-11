import React from 'react';

export default class ImageGalleryItem extends React.Component {
  render() {
    const { data } = this.props;

    return data.map( item => (
      (<li key={item.id} className="gallery-item">
        <img src={item.webformatURL} alt={`Img-${item.id}`} />
      </li>)
    ));
  }
}
