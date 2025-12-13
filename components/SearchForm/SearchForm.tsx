import { useState } from "react";
import css from "./SearchForm.module.css";
import DropdownBrand from "../DropdownBrand/DropdownBrand";
import DropdownPrice from "../DropdownPrice/DropdownPrice";
import { useQuery } from "@tanstack/react-query";
import { Filters, getBrands } from "@/lib/api/clientApi";

import { useFiltersDraftStore } from "@/lib/store/filtersStore";

export default function SearchForm() {
  const { draft, setDraft } = useFiltersDraftStore();

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
      <div className={css.milage}>
        <p className={css.text}>Car mileage / km</p>
        <div className={css.inputWrapper}>

          <label className={css.prefix}>
            <span className={css.span}>From </span>
            <input
              type="text"
              name="minMileage"
              className={`${css.input} ${css.left}` }
              defaultValue={draft.minMileage}
            />
          </label>
            
            <label className={css.prefix}>
              <span className={css.span}>To</span>
            <input
              type="text"
              name="maxMileage"
              className={`${css.input} ${css.right}` }
              defaultValue={draft.maxMileage}
            />
            </label>
        
        </div>
      </div>

      <button type="submit" className={css.btnSearch}>
        Search
      </button>
    </form>
  );
}
