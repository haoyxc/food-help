import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    let { recipes } = this.props;
    console.log(recipes);
    return (
      <div>
        <React.Fragment>
          <RecipeSearch />
          <div className="main-container">
            {/* Title */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 text-center mb-3">
                <h2 className="text-slanted"> Recipe List</h2>
              </div>
            </div>
            {/* End of title */}
            <div className="row">
              {recipes.map(recipe => {
                return <Recipe key={recipe.id} recipe={recipe} />;
              })}
            </div>
          </div>
          <Recipe />
        </React.Fragment>
      </div>
    );
  }
}
