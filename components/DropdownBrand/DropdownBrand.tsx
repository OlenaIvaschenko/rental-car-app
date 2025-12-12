"use client";
import css from "./DropdownBrand.module.css";
import { useState } from "react";



interface Props {
  brands: string[];
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  brand:string;
}

export default function DropdownBrand({ brands, setBrand, brand }: Props) {

   const [isMenu, setIsMenu] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleClick = (brand: string) => {
    setBrand(brand);
    toggle();
  };

  return (
    <div className={css.menuContainer}>
      <p className={css.text}>Car brand</p>
      <button onClick={toggle} type="button" className={css.menuButton}>
        {brand===""?"Choose a brand":brand}
        
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
          {["", ...brands].map((brand, index) => {
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
