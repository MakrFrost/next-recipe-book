import Image from "next/image";
import scss from "./page.module.scss";

export default function Cocktail({ cocktail }) {
  return (
    <>
      {cocktail ? (
        <div className={scss.main_name}>
          <div className={scss.main_wrap}>
            {cocktail.strDrinkThumb ? (
              <Image
                priority
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1000px) 50vw,
              33vw"
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
              />
            ) : (
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                }
                width={400}
                height={400}
                alt={cocktail.strDrink}
              />
            )}
          </div>
          <h1 className={scss.main_drink}>{cocktail.strDrink}</h1>
          <p className={scss.main_instruction}>{cocktail.strInstructions}</p>
          <div className={scss.main_lists}>
            <ul className={scss.main_list}>
              <li className={scss.main_item}>
                <p className={scss.main_list_title}>Ingridients:</p>
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient1 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient1}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient2 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient2}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient3 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient3}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient4 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient4}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient5 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient5}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient6 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient6}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient7 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient7}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient8 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient8}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient9 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient9}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient10 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient10}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient11 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient11}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient12 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient12}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient13 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient13}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient14 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient14}</b>
                  </p>
                ) : null}
              </li>
              <li className={scss.main_item}>
                {cocktail.strIngredient15 ? (
                  <p className={scss.main_border}>
                    <b>{cocktail.strIngredient15}</b>
                  </p>
                ) : null}
              </li>
            </ul>
            <ul className={scss.main_list}>
              <li className={scss.main_item}>
                <p className={scss.main_list_title}>Measure:</p>
              </li>
              <li className={scss.main_item}>{cocktail.strMeasure1}</li>
              <li className={scss.main_item}>{cocktail.strMeasure2}</li>
              <li className={scss.main_item}>{cocktail.strMeasure3}</li>
              <li className={scss.main_item}>{cocktail.strMeasure4}</li>
              <li className={scss.main_item}>{cocktail.strMeasure5}</li>
              <li className={scss.main_item}>{cocktail.strMeasure6}</li>
              <li className={scss.main_item}>{cocktail.strMeasure7}</li>
              <li className={scss.main_item}>{cocktail.strMeasure8}</li>
              <li className={scss.main_item}>{cocktail.strMeasure9}</li>
              <li className={scss.main_item}>{cocktail.strMeasure10}</li>
              <li className={scss.main_item}>{cocktail.strMeasure11}</li>
              <li className={scss.main_item}>{cocktail.strMeasure12}</li>
              <li className={scss.main_item}>{cocktail.strMeasure13}</li>
              <li className={scss.main_item}>{cocktail.strMeasure14}</li>
              <li className={scss.main_item}>{cocktail.strMeasure15}</li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
