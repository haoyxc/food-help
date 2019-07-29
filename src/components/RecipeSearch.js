import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <div>
        <React.Fragment>
          <form className="search-container" onSubmit={handleSubmit}>
            <p>Search for something: separated by commas!</p>
            <input
              type="text"
              className="search-box"
              value={value}
              placeholder="Chicken, bread"
              onChange={handleChange}
            />
            <button type="submit" onSubmit={handleSubmit}>
              <i className="fa fa-search" />
            </button>
          </form>
        </React.Fragment>
      </div>
    );
  }
}
