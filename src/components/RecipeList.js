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
          <div className="main-container">
            <RecipeSearch />

            {/* Title */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 text-center mb-3">
                <h2 className="text-slanted"> Recipe List</h2>
              </div>
            </div>
            {/* End of title */}
            <div className="row recipe-container">
              {recipes.map(recipe => {
                return <Recipe key={recipe.recipe_id} recipe={recipe} />;
              })}
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
