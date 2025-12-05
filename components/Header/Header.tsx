"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import css from "./Header.module.css";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <svg className={css.icon}>
        <use href={`/logo.svg`} />
      </svg>
      <nav className={css.nav}>
        {/* <Link href="/" className={clsx(css.navLink, pathname === "/" && css.active)}>Home</Link>
     <Link href="/catalog" className={clsx(css.navLink, 
            pathname.startsWith("/catalog") && css.active 
  )}>Catalog</Link> */}

        <Link
          href="/"
          className={`${css.navLink} ${pathname === "/" && css.active}`}
        >
          Home
        </Link>
        <Link
          href="/catalog"
          className={`${css.navLink} ${
            pathname.startsWith("/catalog") && css.active
          }`}
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
}
