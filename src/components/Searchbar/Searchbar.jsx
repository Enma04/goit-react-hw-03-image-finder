import React from 'react';
import css from '../styles.module.css';

export default class Searchbar extends React.Component {
  render() {
    const { handleSearch } = this.props;

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSearch}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
