import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      value,
      handleChange,
      handleSubmit,
      error
    } = this.props;

    return (
      <div>
        <React.Fragment>
          <div className="main-container">
            <RecipeSearch
              value={value}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            {/* Title */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 text-center mb-3">
                <h2 className="text-slanted"> Recipe List</h2>
              </div>
            </div>
            {/* End of title */}
            <div className="row recipe-container">
              {error ? (
                <h3>{error}</h3>
              ) : (
                recipes.map(recipe => {
                  return (
                    <Recipe
                      key={recipe.recipe_id}
                      recipe={recipe}
                      handleDetails={() => handleDetails(0, recipe.recipe_id)}
                    />
                  );
                })
              )}
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
