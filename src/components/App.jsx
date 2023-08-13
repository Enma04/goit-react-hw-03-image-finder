import React, { Component } from 'react';
import { fetchPixabay } from '../resources/fetchPixabay';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './styles.module.css';
import Button from './Button/Button';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      search: '',
      page: 1,
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  //-------------------------------------------------
  //------------ COMPONENTS

  async componentDidUpdate(prevProps, prevSate) {
    const { search, page } = this.state;

    if(prevSate.search !== search) {
      console.log("Estoy dentro de una nueva busqueda!");
      const newData = await fetchPixabay(search, 1).then();
      this.setState(() => ({
        images: [...newData.hits],
        page: 1,
      }));
    }

  }

  //-------------------------------------------------
  //------------ FUNCTIONS
  handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.childNodes[1].value;
    this.setState({
      search: value,
    });
  }

  handlePage = async () => {
    const { search, page, images } = this.state;
    const newData = await fetchPixabay(search, page + 1).then();

    this.setState(() => ({
      page: page + 1,
      images: [...images, ...newData.hits],
    }));
  }
  
  //-------------------------------------------------
  //------------ RENDER
  render() {
    const { images } = this.state;
    const { handleSearch, handlePage } = this;
    return (
      <div className={css.App}>
        <Searchbar handleSearch={handleSearch} />
        <ImageGallery images={images} />
        { images.length !== 0 && <Button loadMore={handlePage} /> }
      </div>
    );
  }

};
