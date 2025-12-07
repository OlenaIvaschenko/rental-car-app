"use client";
import css from "./DropdownBrand.module.css";
import { useState } from "react";

// const brands= [
//   "Aston Martin",
//   "Audi",
//   "BMW",
//   "Bentley",
//   "Buick",
//   "Chevrolet",
//   "Chrysler",
//   "GMC",
//   "HUMMER",
//   "Hyundai",
//   "Kia",
//   "Lamborghini",
//   "Land Rover",
//   "Lincoln",
//   "MINI",
//   "Mercedes-Benz",
//   "Mitsubishi",
//   "Nissan",
//   "Pontiac",
//   "Subaru",
//   "Volvo"
// ]

interface Props {
  brands: string[];
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  brand:string;
}

export default function DropdownBrand({ brands, setBrand, brand }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleClick = (brand: string) => {
    setBrand(brand);
    toggle();
  };

  return (
    <div className={css.menuContainer}>
      <p>Car brand</p>
      <button onClick={toggle} type="button" className={css.menuButton}>
        {brand===""?"Choose a brand":brand}
        <svg className={css.icon}>
          <use href={`/sprite.svg#icon-Property-1Default`} />
        </svg>{" "}
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {brands.map((brand, index) => {
            return (
              <li
                key={index}
                className={css.menuItem}
                onClick={() => handleClick(brand)}
              >
                {brand}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
