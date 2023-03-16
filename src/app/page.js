"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import Head from "./head";
import scss from "./page.module.scss";

async function getRandomCocktail() {
  try {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`error ${err}`);
  }
}

export default function Homepage() {
  const [allCocktails, setAllCocktails] = useState([]);
  const [random, setRandom] = useState([]);
  // const [load, setLoad] = useState(false);

  return (
    <>
      <Head title="ShakeShake BAR | Homepage" />
      <main className={scss.main}>
        <div className={scss.main_block}>
          <h1 className={scss.main_title}>Welcome to ShakeShake BAR!</h1>
          <p className={scss.main_dscr}>
            In this bar you can find your favourite <b>cocktail</b> by its name
            or ingredient, or simply have fun in company by choosing a random
            cocktail.
          </p>
          <h2 className={scss.main_second}>
            OK, if you are ready, lets try to find you favourite cocktail!
          </h2>
          <div className={scss.main_link}>
            <Link href={"./ingridients"}>by Ingridients</Link>
            <Link href={"./name"}>by Name</Link>
          </div>
          <h3 className={scss.main_random}>
            Or try selecting a random cocktail:
          </h3>
          <button
            className={scss.main_btn}
            onClick={() => {
              getRandomCocktail()
                .then(
                  (data) => (setRandom(...data.drinks), console.log(random))
                )
                .catch((error) => console.error(error));
            }}
          >
            Random cocktail
          </button>
        </div>

        {random ? (
          <div>
            <Image
              src={random.strDrinkThumb}
              width={400}
              height={400}
              alt={random.strDrink}
            />
            <h1>{random.strDrink}</h1>
          </div>
        ) : null}
        {console.log(random.strDrink)}
      </main>
    </>
  );
}
