// "use client";
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
// import { useEffect, useState } from "react";
// import getAllCocktails from "./api/getAllCocktails";

import Head from "./head";
import scss from "./page.module.scss";

// export const metadata = {
// title: "ShakeShake BAR | Homepage",
// description: "Find you favourite cocktail!",
// link: [
//   { rel: "shortcut icon" },
//   { type: "image/x-icon" },
//   { href: "https://fav-gen.com/public/assets/img/emoji/svg/1f378.svg" },
// ],
// };

export default function Homepage() {
  // const [allCocktails, setAllCocktails] = useState([]);
  // useEffect(() => {
  //   const all = getAllCocktails();
  //   setAllCocktails(all);
  // }, [allCocktails]);
  // console.log(allCocktails);

  return (
    <>
      <Head title={"ShakeShake BAR | Homepage"} />
      <main>
        <p className={scss.main}>hello world </p>
        <p>
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem
          ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem
          ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
          ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem
          ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem
          ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
          ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
          ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
          ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem
          ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem
          ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
          ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
          ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
          ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem
          ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem
          ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </p>
      </main>
    </>
  );
}
