import Head from "./head";
import scss from "./page.module.scss";

export default function Ingridient({}) {
  return (
    <>
      <Head title={"ShakeShake BAR | Ingridients"} />
      <main className={scss.main}>
        <h2 className={scss.main_title}>
          Оn this page you can choose what you have available to create your
          cocktail, or enter the ingredients and find the cocktail you need,
          right now!
        </h2>
      </main>
    </>
  );
}
