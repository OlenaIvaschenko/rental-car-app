"use client";
import css from "./DropdownPrice.module.css";
import { useState } from "react";

interface Props {
  prices: string[];
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  price: string;
}

export default function DropdownPrice({ prices, setPrice, price }: Props) {
   const [isMenu, setIsMenu] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleClick = (price: string) => {
    setPrice(price);
    toggle();
  };

  return (
    <div className={css.menuContainer}>
      <p className={css.text}>Price/1 hour</p>
      <button onClick={toggle} type="button" className={css.menuButton}>
        {price === "" ? "Choose a price" : price}
        <svg className={css.icon} onClick={()=>{setIsMenu(!isMenu)}}>
          <use
            href={
              isMenu? `/sprite.svg#icon-Property-1Default` : `/Vector_1.svg`
            }
          />
        </svg>
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {["", ...prices].map((price, index) => {
            return (
              <li
                key={index}
                className={css.menuItem}
                onClick={() => handleClick(price)}
              >
                {price}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
