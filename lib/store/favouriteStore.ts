import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavouriteDraftStore = {
  draft: string[];
  setDraft: (favourites:string[]) => void;
  clearDraft: () => void;
};
const initialDraft: string[] = [];

export const useFavouriteDraftStore = create<FavouriteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (favourites) => set(() => ({ draft: favourites })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "favorites-draft",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
