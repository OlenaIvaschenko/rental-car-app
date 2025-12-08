import { useState } from "react";
import css from "./SearchForm.module.css";
import DropdownMenu from "../DropdownBrand/DropdownBrand";

import DropdownBrand from "../DropdownBrand/DropdownBrand";
import DropdownPrice from "../DropdownPrice/DropdownPrice";
import { useQuery } from "@tanstack/react-query";
import { Filters, getBrands } from "@/lib/api/clientApi";
import { log } from "console";
import { useFiltersDraftStore } from "@/lib/store/filtersStore";

export default function SearchForm() {
  const { draft, setDraft, clearDraft } = useFiltersDraftStore();

  const [brand, setBrand] = useState(draft.brand);
  const [price, setPrice] = useState(draft.rentalPrice);

  const {
    data: brands,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  // console.log(brands);

  const prices = ["30", "40", "50", "60", "70", "80"];

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as unknown as Filters;
 

    setDraft(values);
    //  as unknown as NewNoteData;
    console.log(values);
    // addNoteMutation.mutate(values);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <input type="hidden" name="brand" value={brand} />
      {brands && (
        <DropdownBrand brands={brands} setBrand={setBrand} brand={brand} />
      )}
      <input type="hidden" name="rentalPrice" value={price} />
      <DropdownPrice prices={prices} setPrice={setPrice} price={price} />
      <div>
        <p>Car mileage / km</p>

        <input
          type="text"
          name="minMileage"
          className={css.input}
          defaultValue={draft.minMileage}
        />
        <input
          type="text"
          name="maxMileage"
          className={css.input}
          defaultValue={draft.maxMileage}
        />
      </div>

      <button type="submit">Search</button>
    </form>
  );
}
