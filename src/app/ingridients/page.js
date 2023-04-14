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
  const [cocktail, setCocktail] = useState([]);

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
              .then((data) => setCocktail(...data.drinks))
              .catch((error) => console.error(error));
          }}
        >
          Vodka
        </button>

        {console.log(cocktail)}
      </main>
    </>
  );
}
