// import Image from "next/image";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <svg className={css.icon}>
        <use href={`/rentalCar.svg`} />
      </svg>

      {/* <Image src="/logo.svg" alt="Logo" width={40} height={40} /> */}
    </header>
  );
}
