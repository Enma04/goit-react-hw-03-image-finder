import React, { Component } from 'react';
import { fetchPixabay } from '../resources/fetchPixabay';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './styles.module.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
    }
  }

  async componentDidMount() {
    //const data2 = fetchPixabayAxios().then((resp) => resp.data);
    const data = await fetchPixabay().then();
    //const resp = data resp.then();
    this.setState(() => ({
      images: [...data.hits],
    }));
  }
  
  render() {
    const { images } = this.state;
    return (
      <div className={css.App}>
        <Searchbar />
        <ImageGallery images={images} />
      </div>
    );
  }

};
