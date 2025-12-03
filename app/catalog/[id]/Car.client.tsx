"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import css from "./Car.module.css";

import Image from "next/image";
import { getCarById } from "@/lib/api/clientApi";
import BookForm from "@/components/BookForm/BookForm";
// import { Car } from "@/types/car";

// interface Props{
//   car:Car
// }
const CarClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: car,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id),
    refetchOnMount: false,
  });

  console.log(car);

  if (isLoading) return <p>Loading, please wait...</p>;

  if (error || !car) return <p>Something went wrong.</p>;
  const cityCountry = car.address.split(", ").slice(-2).join(", ");

  const minCond = car.rentalConditions.find((c) =>
    c.toLowerCase().includes("minimum")
  );
  const age = minCond?.match(/\d+/)?.[0] ?? null;

  const deposit = car.rentalConditions[2] ?? "";

  return (
    <div className={css.carContainer}>
      <div className={css.leftWrapper}>
        <div className={css.imageWrapper}>
          <Image
            src={car.img}
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
          <h2>
            {car.brand} {car.model}, {car.year}
          </h2>
          <p>Id: {car.id}</p>
        </div>
        <div className={css.iconCityMileageWrapper}>
          <svg className={css.icon}>
            <use href={`/sprite.svg#icon-Location`} />
          </svg>
          <p className={css.city}>{cityCountry}</p>
          <p>Mileage: {car.mileage} km</p>
        </div>
        <p className={css.rentalPrice}>{car.rentalPrice}$</p>
        <p className={css.descrText}>{car.description}</p>

        <p className={css.descrTitle}>Rental Conditions: </p>
        <ul className={css.list}>
          {car.rentalConditions.map((condition, index) => {
            return (
              <li className={css.item} key={index}>
                <svg className={css.icon}>
                  <use href={`/sprite.svg#icon-check-circle`} />
                </svg>
                <p className={css.bullets}>{condition}</p>
              </li>
            );
          })}
        </ul>
        <p className={css.descrTitle}>Car Specifications: </p>
        <ul className={css.list}>
          <li className={css.item}>
            <svg className={css.icon}>
              <use href={`/sprite.svg#icon-Group`} />
            </svg>
            <p>Year: 2008</p>
          </li>
          <li className={css.item}>
            <svg className={css.icon}>
              <use href={`/sprite.svg#icon-Group1`} />
            </svg>
            <p>Type: Suv</p>
          </li>

          <li className={css.item}>
            <svg className={css.icon}>
              <use href={`/sprite.svg#icon-Group2`} />
            </svg>
            <p>Fuel Consumption: 10.5</p>
          </li>

          <li className={css.item}>
            <svg className={css.icon}>
              <use href={`/sprite.svg#icon-gear`} />
            </svg>
            <p>Engine Size: 3.6L V6</p>
          </li>
        </ul>

        <p className={css.descrTitle}>Accessories and functionalities: </p>
        <ul className={css.list}>
          {[...car.accessories, ...car.functionalities].map((item, index) => {
            return (
              <li className={css.item} key={index}>
                <svg className={css.icon}>
                  <use href={`/sprite.svg#icon-check-circle`} />
                </svg>
                <p>{item}</p>
              </li>
            );
          })}
          {/* <li className={css.item}>
            <svg className={css.icon}>
          <use href={`/sprite.svg#icon-check-circle`} />
        </svg>
        <p>Leather seats</p>
          </li>
          <li className={css.item}>
            <svg className={css.icon}>
          <use href={`/sprite.svg#icon-check-circle`} />
        </svg>
        <p>Panoramic sunroof</p>
          </li>
          <li className={css.item}>
            <svg className={css.icon}>
          <use href={`/sprite.svg#icon-check-circle`} />
        </svg>
        <p>Remote start</p>
          </li>
          <li className={css.item}>
            <svg className={css.icon}>
          <use href={`/sprite.svg#icon-check-circle`} />
        </svg>
        <p>Blind-spot monitoring</p>
          </li>
          <li className={css.item}>
            <svg className={css.icon}>
          <use href={`/sprite.svg#icon-check-circle`} />
        </svg>
        <p>Power liftgate</p>
          </li>
          <li className={css.item}>
            <svg className={css.icon}>
          <use href={`/sprite.svg#icon-check-circle`} />
        </svg>
        <p>Premium audio system</p>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default CarClient;
