import React from "react";
import "./App.css";
// import { createStore } from "redux";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends React.Component {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=01c0110ac9e94125f5afba447fd7d7cd",
    recipe_id: 35382
  };

  // componentDidMount() {
  //   this.getRecipes();
  // }

  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
        <RecipeList recipes={this.state.recipes} />
        <RecipeDetails id={this.state.recipe_id} />
      </React.Fragment>
    );
  }
}

export default App;
