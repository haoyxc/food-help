import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    let { title, source_url, image_url, recipe_id, publisher } = this.props.recipe;
    const { handleDetails } = this.props;
    return (
      <div className="recipe">
        <React.Fragment>
          <div className="recipe-text">
            <h6>{title}</h6>
            <p className="recipe-publisher">Adapted from {publisher}</p>
          </div>

          <div className="recipe-img-cont">
            <img src={image_url} alt="" className="recipe-img" />
          </div>

          <div className="recipe-btns">
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="recipe-btn"
            >
              Recipe URL
            </a>
            <button
              target="_blank"
              rel="noopener noreferrer"
              className="recipe-btn"
              onClick={handleDetails}
            >
              Details
            </button>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
