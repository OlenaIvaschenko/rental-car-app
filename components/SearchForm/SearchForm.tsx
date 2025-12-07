import { useState } from "react";
import css from "./SearchForm.module.css"
import DropdownMenu from "../DropdownBrand/DropdownBrand";

import DropdownBrand from "../DropdownBrand/DropdownBrand";
import DropdownPrice from "../DropdownPrice/DropdownPrice";

export default function SearchForm() {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

    const brands= [
  "Aston Martin",
  "Audi",
  "BMW",
  "Bentley",
  "Buick",
  "Chevrolet",
  "Chrysler",
  "GMC",
  "HUMMER",
  "Hyundai",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lincoln",
  "MINI",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nissan",
  "Pontiac",
  "Subaru",
  "Volvo"
]

const prices=["30", "40", "50", "60", "70", "80"];




  const handleSubmit = (formData: FormData) => {
    
    const values = Object.fromEntries(formData);
    //  as unknown as NewNoteData;
    console.log(values);
    // addNoteMutation.mutate(values);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <input type="hidden" name="brand" value={brand} />
      <DropdownBrand brands={brands} setBrand={setBrand} brand={brand}/>
      <input type="hidden" name="price" value={price} />
      <DropdownPrice prices={prices} setPrice={setPrice} price={price}/>
         <input
         
          type="text"
          name="from"
          className={css.input}
        
        />
           <input
         
          type="text"
          name="to"
          className={css.input}
          
        />
        <button type="submit">Search</button>
    </form>
  );
}
