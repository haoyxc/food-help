import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      url: `https://www.food2fork.com/api/search?key=01c0110ac9e94125f5afba447fd7d7cd&rId=${
        this.props.id
      }`
    };
  }
  render() {
    return (
      <div>
        <React.Fragment>Hello </React.Fragment>
      </div>
    );
  }
}
