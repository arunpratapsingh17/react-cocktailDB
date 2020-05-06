import React, { useState } from "react";
import CocktailList from "../components/CocktailList";
import Form from "../components/SearchForm";
export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [cocktails, setCocktailList] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const tempAlcohol = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktailList(tempAlcohol);
        } else {
          setCocktailList([]);
        }
      } catch (error) {
        console.log("Eror is dere8");

        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);
  return (
    <main>
      <Form setSearchTerm={setSearchTerm} />
      <CocktailList cocktails={cocktails} loading={loading} />
    </main>
  );
}
