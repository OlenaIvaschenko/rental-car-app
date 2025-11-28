"use client";

import CarList from "@/components/List/List";
import css from "./Catalog.module.css";
import { getCars } from "@/lib/api/clientApi";

import { useInfiniteQuery } from "@tanstack/react-query";
import { SyncLoader } from "react-spinners";

export default function CatalogClient() {
  const { data, fetchNextPage, hasNextPage, isLoading, error } =
    useInfiniteQuery({
      queryKey: ["cars"],
      queryFn: ({ pageParam = 1 }) => getCars(pageParam),
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
    <>
      <CarList allCars={allCars} />
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} className={css.showNext}>
          Показати ще
        </button>
      )}
    </>
  );
}
