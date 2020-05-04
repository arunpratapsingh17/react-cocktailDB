import React from "react";
import { useParams } from "react-router-dom";
export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          console.log(data.drinks);
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
  }, [id]);
  return <h1>single cocktail page</h1>;
}
