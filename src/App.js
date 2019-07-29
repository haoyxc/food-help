import React from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends React.Component {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=01c0110ac9e94125f5afba447fd7d7cd",
    base_url: "https://www.food2fork.com/api/search?key=01c0110ac9e94125f5afba447fd7d7cd",
    recipe_id: 29159,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  componentDidMount() {
    this.getRecipes();
  }

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if (jsonData.recipes.length === 0) {
        this.setState({
          error: "Sorry, but your search did not return any results"
        });
      } else {
        this.setState({
          recipes: jsonData.recipes
        });
      }
    } catch (e) {
      console.log("error", e);
    }
  }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      recipe_id: id
    });
  };
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        console.log("URL", `${base_url}${query}${search}`);
        return { url: `${base_url}${query}${search}`, search: "" };
      },
      () => {
        this.getRecipes();
      }
    );
  };
  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails.bind(this)}
            value={this.state.search}
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            error={this.state.error}
          />
        );
      case 0:
        return (
          <RecipeDetails
            id={this.state.recipe_id}
            handleIndex={this.handleIndex.bind(this)}
          />
        );
    }
  };
  render() {
    return <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>;
  }
}

export default App;
