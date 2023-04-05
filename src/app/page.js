"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const [random, setRandom] = useState([]);

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
          <div className={scss.main_links}>
            <Link
              className={scss.main_link}
              href={"./ingridients"}
              title="Get random cocktail!"
            >
              by Ingridients
            </Link>
            <Link
              className={scss.main_link}
              href={"./name"}
              title="Get random cocktail!"
            >
              by Name
            </Link>
          </div>
          <h3 className={scss.main_random}>
            Or try selecting a random cocktail:
          </h3>

          <button
            className={scss.main_btn}
            onClick={() => {
              getRandomCocktail()
                .then((data) => setRandom(...data.drinks))
                .catch((error) => console.error(error));
            }}
          >
            Random cocktail
          </button>

          {random ? (
            <div className={scss.main_name}>
              {random.strDrinkThumb ? (
                <>
                  <div className={scss.main_wrap}>
                    <Image
                      priority
                      fill
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1000px) 50vw,
              33vw"
                      src={random.strDrinkThumb}
                      alt={random.strDrink}
                    />
                  </div>
                  <h1 className={scss.main_drink}>{random.strDrink}</h1>
                  <p className={scss.main_instruction}>
                    {random.strInstructions}
                  </p>
                  <div className={scss.main_lists}>
                    <ul className={scss.main_list}>
                      <li className={scss.main_item}>
                        <p className={scss.main_list_title}>Ingridients:</p>
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient1 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient1}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient2 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient2}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient3 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient3}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient4 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient4}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient5 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient5}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient6 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient6}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient7 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient7}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient8 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient8}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient9 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient9}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient10 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient10}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient11 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient11}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient12 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient12}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient13 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient13}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient14 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient14}</b>
                          </p>
                        ) : null}
                      </li>
                      <li className={scss.main_item}>
                        {random.strIngredient15 ? (
                          <p className={scss.main_border}>
                            <b>{random.strIngredient15}</b>
                          </p>
                        ) : null}
                      </li>
                    </ul>
                    <ul className={scss.main_list}>
                      <li className={scss.main_item}>
                        <p className={scss.main_list_title}>Measure:</p>
                      </li>
                      <li className={scss.main_item}>{random.strMeasure1}</li>
                      <li className={scss.main_item}>{random.strMeasure2}</li>
                      <li className={scss.main_item}>{random.strMeasure3}</li>
                      <li className={scss.main_item}>{random.strMeasure4}</li>
                      <li className={scss.main_item}>{random.strMeasure5}</li>
                      <li className={scss.main_item}>{random.strMeasure6}</li>
                      <li className={scss.main_item}>{random.strMeasure7}</li>
                      <li className={scss.main_item}>{random.strMeasure8}</li>
                      <li className={scss.main_item}>{random.strMeasure9}</li>
                      <li className={scss.main_item}>{random.strMeasure10}</li>
                      <li className={scss.main_item}>{random.strMeasure11}</li>
                      <li className={scss.main_item}>{random.strMeasure12}</li>
                      <li className={scss.main_item}>{random.strMeasure13}</li>
                      <li className={scss.main_item}>{random.strMeasure14}</li>
                      <li className={scss.main_item}>{random.strMeasure15}</li>
                    </ul>
                  </div>
                </>
              ) : null}
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}
