"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import scss from "./page.module.scss";
import { FaHome, FaCocktail } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";

export default function Header() {
  const currentRoute = usePathname();

  return (
    <nav className={scss.nav_block}>
      <Link
        className={currentRoute === "/" ? scss.active : scss.nav_link}
        href={"./"}
      >
        Homepage
        <FaHome className={scss.icon} />
      </Link>
      <Link
        className={
          currentRoute === "/ingridients" ? scss.active : scss.nav_link
        }
        href={"./ingridients"}
      >
        Ingridients
        <FaCocktail className={scss.icon} />
      </Link>
      <Link
        className={currentRoute === "/name" ? scss.active : scss.nav_link}
        href={"./name"}
      >
        Name
        <BiDrink className={scss.icon} />
      </Link>
    </nav>
  );
}
