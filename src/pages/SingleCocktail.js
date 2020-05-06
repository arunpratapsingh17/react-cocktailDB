import React from "react";
import { useParams, Link } from "react-router-dom";
export default function SingleCocktail() {
  const { name } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        console.log(name);

        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
        );
        const data = await response.json();
        console.log(data.drinks);

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strGlass: glass,
            strAlcoholic: info,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log("Error hai single cocktail page me");
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [name]); //Each time when value of name is changed,this useEffect will be called
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} />
          <div className="drink-info">
            <p>name:{name}</p>
            <p>category:{category}</p>
            <p>info:{info}</p>
            <p>glass:{glass}</p>
            <p>instructions:{instructions}</p>
            <p>
              ingredients:
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
