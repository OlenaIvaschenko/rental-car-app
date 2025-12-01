"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import css from "./Car.module.css";

import Image from "next/image";
import { getCarById } from "@/lib/api/clientApi";
import BookForm from "@/components/BookForm/BookForm";

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
            width={640}
            height={512}
            // sizes="(max-width: 768px) 100vw, 50vw"
            className={css.image}
          />
        </div>
        <div>
          <BookForm />
        </div>
      </div>

      <div className={css.rightWrapper}>
        <div className={css.titleIdWrapper}>
        <h2>Buick Enclave, 2008</h2>
        <p>Id: 9582</p>
        </div>
        <div className={css.iconCityMileageWrapper}>
         <svg className={css.icon}>
          <use href={`/sprite.svg#icon-Location`} />
        </svg>
        <p className={css.city}>Kyiv, Ukraine</p>
        <p>Mileage: 5 858 km</p>
        </div>
        <p className={css.rentalPrice}>40$</p>
        <p className={css.carDescription}>The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.</p>

        <svg className={css.icon}>
          <use href={`/sprite.svg#icon-check-circle`} />
        </svg>
      </div>
    </div>
  );
};
export default CarClient;
