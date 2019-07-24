import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    let { title, source_url, image_url, recipe_id, publisher } = this.props.recipe;
    return (
      <div className="recipe">
        <React.Fragment>
          <h4>{title}</h4>
          <p className="recipe-publisher">Adapted from {publisher}</p>
          <img src={image_url} alt="" className="recipe-img" />
          <div className="recipe-btns">
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="recipe-btn"
            >
              Recipe URL
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="recipe-btn">
              Details
            </a>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
