"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import scss from "./page.module.scss";

export default function Header() {
  const currentRoute = usePathname();

  return (
    <nav className={scss.nav_block}>
      <Link
        className={currentRoute === "/" ? scss.active : scss.nav_link}
        href={"./"}
      >
        Homepage
      </Link>
      <Link
        className={
          currentRoute === "/ingridients" ? scss.active : scss.nav_link
        }
        href={"./ingridients"}
      >
        Ingridients
      </Link>
      <Link
        className={currentRoute === "/name" ? scss.active : scss.nav_link}
        href={"./name"}
      >
        Name
      </Link>
    </nav>
  );
}
