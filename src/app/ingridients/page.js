"use client";
import { useState } from "react";

import Head from "./head";
import scss from "./page.module.scss";

async function getCocktailByIngridient(ingridient) {
  try {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingridient}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`error ${err}`);
  }
}

export default function Ingridient() {
  const [cocktails, setCocktails] = useState([]);

  return (
    <>
      <Head title={"ShakeShake BAR | Ingridients"} />
      <main className={scss.main}>
        <h2 className={scss.main_title}>
          Оn this page you can choose what you have available to create your
          cocktail, or enter the ingredients and find the cocktail you need,
          right now!
        </h2>
        <button
          onClick={() => {
            getCocktailByIngridient("Vodka")
              .then((data) => setCocktails(data.drinks))
              .catch((error) => console.error(error));
          }}
        >
          Vodka
        </button>
        {/* setCocktails([]); */}
        <button
          onClick={() => {
            getCocktailByIngridient("Lemon")
              .then((data) => setCocktails(data.drinks))
              .catch((error) => console.error(error));
          }}
        >
          Lemon
        </button>
        <button
          onClick={() => {
            getCocktailByIngridient("Rum")
              .then((data) => setCocktails(data.drinks))
              .catch((error) => console.error(error));
          }}
        >
          Rum
        </button>

        {cocktails ? (
          <ul>
            {cocktails.map((cocktail) => {
              return <li key={cocktail.idDrink}>{cocktail.strDrink}</li>;
            })}
          </ul>
        ) : (
          <>Try again!</>
        )}
      </main>
    </>
  );
}
