import React, { Component } from 'react';
import fetchPixabay from '../resources/fetchPixabay';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    const myKey = "38579369-eeb8272d66c6603b69812822b";
    const data = fetch(`https://pixabay.com/api/?q=cat&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(
        (response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        }
      )
      //.then( info => console.log("info: ", info) );

    const data2 = fetchPixabay();

    console.log("fetch: ", data2);
  }
  
  render() {
    return (
      <div>
        React homework template
      </div>
    );
  }

};
