"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import css from "./Car.module.css";

import Image from "next/image";
import { getCarById } from "@/lib/api/clientApi";

const CarClient = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id),
    refetchOnMount: false,
  });

  console.log(data);

  if (isLoading) return <p>Loading, please wait...</p>;

    if (error || !data) return <p>Something went wrong.</p>;

  return (
    <div className={css.carContainer}>
      <div className={css.leftWrapper}>
        <div className={css.imageWrapper}>
          <Image
            src={data.img}
            alt="Photo of car"
            width={276}
            height={268}
            // sizes="(max-width: 768px) 100vw, 50vw"
            className={css.image}
          />
        </div>
      </div>

      <div className={css.rightWrapper}></div>
    </div>
  );
};
export default CarClient;
