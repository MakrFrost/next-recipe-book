import scss from "./page.module.scss";

export const metadata = {
  title: "ShakeShake BAR | Ingridients",
  description: "Find you favourite cocktail by Ingridients!",
  icons: {
    icon: [
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        url: "https://fav-gen.com/public/assets/img/emoji/svg/1f379.svg",
      },
    ],
  },
};

export default function Ingridient({}) {
  return (
    <>
      <main className={scss.main}>
        <div>Ingridients</div>
        <p>
          ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          rem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum
          lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum
          lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
      </main>
    </>
  );
}
