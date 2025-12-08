import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Filters } from "../api/clientApi";

type FiltersDraftStore = {
  draft: Filters;
  setDraft: (filters: Filters) => void;
  clearDraft: () => void;
};

const initialDraft = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};

export const useFiltersDraftStore = create<FiltersDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (filters) => set(() => ({ draft: filters })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "filter-draft",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
