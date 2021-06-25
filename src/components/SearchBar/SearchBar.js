import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    query: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);

    this.setState({ query: "" });
  };

  render() {
    return (
      <header className="SearchBar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.query}
            onChange={this.handleChange}
            className="SearchForm-input"
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

export default SearchBar;
