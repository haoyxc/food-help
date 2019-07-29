import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: recipe,
      url: `https://www.food2fork.com/api/get?key=01c0110ac9e94125f5afba447fd7d7cd&rId=${
        this.props.id
      }`
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipe: jsonData.recipe
      });
      // console.log(this.state)
    } catch (e) {
      console.log(e);
    }
  }
  // state = {
  //   recipe: recipe
  // };
  // async componentDidMount() {
  //   const id = this.props.id;
  //   const url = `https://www.food2fork.com/api/get?key=01c0110ac9e94125f5afba447fd7d7cd&rId=${id}`;
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipe: jsonData.recipe
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  render() {
    console.log(this.state.recipe);
    const {
      publisher,
      publisher_url,
      source_url,
      image_url,
      title,
      ingredients
    } = this.state.recipe;
    const { handleIndex } = this.props;

    return (
      <div className="recipeDetails">
        <React.Fragment>
          <button href="" className="back-btn" onClick={() => handleIndex(1)}>
            Back to Search
          </button>
          <div className="recipe-details">
            <div className="">
              <h3>{title}</h3>A recipe by{" "}
              <a href={publisher_url} target="_blank" rel="noopener noreferrer">
                {publisher}
              </a>
              <p>
                Full recipe{" "}
                <a href={source_url} target="_blank" rel="noopener noreferrer">
                  Here
                </a>{" "}
              </p>
              <div className="recipe-info">
                <div className="recipe-img-container">
                  <img src={image_url} alt="" className="recipe-img-det" />
                </div>
                <ul className="ingredient-list">
                  <h4>Ingredients</h4>

                  {ingredients.map(ingr => {
                    return <li>{ingr}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
