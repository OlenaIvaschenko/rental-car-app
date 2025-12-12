import Image from "next/image";
import css from "./Item.module.css";
import Link from "next/link";
import { Car } from "@/types/car";
import { useState } from "react";
import { useFavouriteDraftStore } from "@/lib/store/favouriteStore";

interface Props {
  car: Car;
}

export default function CarInfoItem({ car }: Props) {
  const { draft, setDraft } = useFavouriteDraftStore();
  const [isBlue, setIsBlue] = useState(() => draft.includes(car.id));
 

  const lastTwo = car.address
    .split(", ")
    .map((p) => p.trim())
    .slice(-2);

  const favouriteClick = () => {
    // 1) Проверяем есть в зустанде кар с id этого Item
    // 2) Если есть, то удаляем id из зустенда
    // 3) Если нет, то добавляем id в зустанд set([...draft, car.id])

    if (draft.includes(car.id)) {
      setDraft(draft.filter((item) => item !== car.id));
    } else {
      setDraft([...draft, car.id]);
    }

    setIsBlue(!isBlue);
  };

  return (
    <div className={css.cardContainer}>
      <div className={css.imageWrapper}>
        <Image
          src={car.img}
          alt="Photo of car"
          width={276}
          height={268}
          // sizes="(max-width: 768px) 100vw, 50vw"
          className={css.image}
        />

        <svg className={css.icon} onClick={favouriteClick}>
          <use
            href={
              isBlue ? `/Vector.svg` : `/sprite.svg#icon-Property-1Default1`
            }
          />
        </svg>
      </div>
      <div className={css.carNamePriceWrapper}>
        <h2 className={css.carName}>
          {car.brand}
          <span className={css.span}> {car.model}</span>, {car.year}
        </h2>
        <p className={css.carName}>{car.rentalPrice} $</p>
      </div>
      <div className={css.infoWrapper}>
        <p className={css.text}>
          {lastTwo.join(" | ")} {car.rentalCompany} |
        </p>
        <p className={css.text}>
          {car.type} | {car.mileage}
        </p>
      </div>
      <div>
        <Link
          className={`${css.buttonEfect} ${css.link}`}
          href={`/catalog/${car.id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
