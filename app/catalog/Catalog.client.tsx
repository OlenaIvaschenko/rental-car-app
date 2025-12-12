"use client";

import CarList from "@/components/List/List";
import css from "./Catalog.module.css";
import { getCars } from "@/lib/api/clientApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SyncLoader } from "react-spinners";
import SearchForm from "@/components/SearchForm/SearchForm";
import { useFiltersDraftStore } from "@/lib/store/filtersStore";

export default function CatalogClient() {
  const { draft} = useFiltersDraftStore();

  const { data, fetchNextPage, hasNextPage, isLoading, error } =
    useInfiniteQuery({
      queryKey: ["cars", draft],
      queryFn: ({ pageParam = 1 }) => getCars(pageParam, 12, draft),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const currentPage = Number(lastPage.page);
        const totalPages = Number(lastPage.totalPages);

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
    });

  if (isLoading)
    return (
      <SyncLoader
        color="#000000"
        loading={true}
        cssOverride={{
          display: "flex",
          justifyContent: "center",
          margin: "20px auto",
          opacity: "0.3",
        }}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  if (error || !data) return <p>Something went wrong.</p>;

  const allCars = data ? data.pages.flatMap((page) => page.cars) : [];

  console.log(allCars);

  return (
    <div className={css.catalogContainer}>
      {/* <DropdownMenu brands={brands}/> */}
      <SearchForm />
      <CarList allCars={allCars} />
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} className={css.showNext}>
         Load more
        </button>
      )}
    </div>
  );
}
