import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    let { title, image_url } = this.props;
    return (
      <div>
        <React.Fragment>
          <h1>{title}</h1>
          <img src={image_url} alt="" />
        </React.Fragment>
      </div>
    );
  }
}
