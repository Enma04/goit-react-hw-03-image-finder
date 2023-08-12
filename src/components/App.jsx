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
      search: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  //-------------------------------------------------
  //------------ COMPONENTS
  async componentDidMount() {
    const data = await fetchPixabay().then();
    this.setState(() => ({
      images: [...data.hits],
    }));
  }

  componentDidUpdate(prevSate) {
    const { search } = this.state;
    console.log("Cambio de estado!");
    if(prevSate.search !== search) {

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

  handleNewSearch = async (search) => {
    return await fetchPixabay().then();
  }
  
  //-------------------------------------------------
  //------------ RENDER
  render() {
    const { images } = this.state;
    return (
      <div className={css.App}>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery images={images} />
      </div>
    );
  }

};
