import React from "react";
import css from '../styles.module.css';

export default class Modal extends React.Component {
  render() {
    return(
      <div className={css.Overlay} >
        <div className={css.Overlay}>
          <img src={this.props.url} alt="Image" />
        </div>
      </div>
    );
  };
}